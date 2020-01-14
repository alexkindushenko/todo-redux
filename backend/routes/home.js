const { Router } = require('express');
const UserSchema = require('../models/user');

const router = Router();

router.get('/', (req, res) => {
  if (!req.session.isAuthenticated) {
    res.redirect('/login');
  } else {
    res.json({ todos: req.session.user.todos });
  }
  res.end();
});

router.post('/', async (req, res) => {
  const user = await UserSchema.findById(req.session.user._id);

  user.todos = [...user.todos, { label: req.body.label }];
  await user.save();
  res.send('post');
});

module.exports = router;
