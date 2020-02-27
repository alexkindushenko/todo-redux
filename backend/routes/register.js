const { Router } = require('express');
const bcript = require('bcryptjs');
const path = require('path');

const UserSchema = require('../models/user');
const defaultTodos = require('../libs/default-todos');
const router = Router();

// router.get('/*', (req, res) => {
//   // res.json({ isAuth: false });
//   res.sendFile(path.join(__dirname, '../', 'build', 'index.html'));
// });
router.post('/', async (req, res) => {
  const { email, password } = req.body;
  const candidate = await UserSchema.findOne({ email });
  try {
    if (candidate) {
      console.log('User foud');

      res.redirect('/login');
    } else {
      const hashPassword = await bcript.hash(password, 10);
      const user = new UserSchema({
        email,
        password: hashPassword,
        todos: defaultTodos,
      });
      console.log(user);
      req.session.user = user;
      req.session.isAuthenticated = true;
      req.session.save(err => {
        if (err) {
          throw err;
        } else {
          console.log('login true');
          res.json({ homeRedirect: true });
        }
      });
      await user.save();
    }
    res.json({ homeRedirect: true });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
