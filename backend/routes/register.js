const { Router } = require('express');
const bcript = require('bcryptjs');
const path = require('path');

const UserSchema = require('../models/user');
const todos = require('../libs/default-todos');
const router = Router();

// router.get('/*', (req, res) => {
//   // res.json({ isAuth: false });
//   res.sendFile(path.join(__dirname, '../', 'build', 'index.html'));
// });
router.post('/', async (req, res) => {
  const { email, password } = req.body;
  console.log(email, '     ', password);
  console.log('Register route');
  const candidate = await UserSchema.findOne({ email });
  try {
    if (candidate) {
      res.redirect('/login');
    } else {
      const hashPassword = await bcript.hash(password, 10);
      const user = new UserSchema({
        email,
        password: hashPassword,
        todos,
      });
      console.log(user);
      await user.save();
    }

    res.send('Hello register');
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
