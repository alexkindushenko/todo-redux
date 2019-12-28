const { Router } = require('express');
const bcript = require('bcryptjs');

const UserSchema = require('../models/user');
const router = Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  const candidate = await UserSchema.findOne({ email });
  try {
    if (candidate) {
      res.redirect('/login');
    } else {
      const hashPassword = await bcript.hash(password, 10);
      const user = await new UserSchema({
        email,
        password: hashPassword,
        todos: [],
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
