const { Router } = require('express');
const path = require('path');

const UserSchema = require('../models/user');

const router = Router();

router.get('/', (req, res) => {
  if (!req.session.isAuthenticated) {
    // res.sendFile(path.join(__dirname, 'build', 'index.html'));
    res.json({ msg: 'no auth' });
  } else {
    res.json({ todos: req.session.user.todos });
    // res.sendFile(path.join(__dirname, 'build', 'index.html'));
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
