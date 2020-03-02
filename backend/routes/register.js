const { Router } = require('express');
const bcript = require('bcryptjs');

const UserSchema = require('../models/user');
const defaultTodos = require('../libs/default-todos');
const router = Router();

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
    res
      .status(404)
      .json({ message: 'Incorrect data. Check the data entered.' });
  }
});
module.exports = router;
