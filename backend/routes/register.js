const { Router } = require('express');
const bcript = require('bcryptjs');

const UserSchema = require('../models/user');
const defaultTodos = require('../libs/default-todos');
const isValid = require('../midlevare/isValid');

const router = Router();

router.post('/', isValid, async (req, res) => {
  const { email, password } = req.body;
  const candidate = await UserSchema.findOne({ email });
  try {
    if (candidate) {
      return res.status(200).json({ message: 'E-mail already in use.' });
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
          res.json({ homeRedirect: true });
        }
      });
      await user.save();
    }
    res.json({ homeRedirect: true });
  } catch (error) {
    res.json({ message: error });
  }
});
module.exports = router;
