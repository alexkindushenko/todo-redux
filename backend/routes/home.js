const { Router } = require('express');
const { Types } = require('mongoose');
const path = require('path');

const UserSchema = require('../models/user');

const router = Router();

router.patch('/', (req, res) => {
  if (!req.session.isAuthenticated) {
    res
      .json({ isAuth: false })
      .sendFile(path.join(__dirname, '../', 'build', 'index.html'));
  } else {
    res.json({
      todos: req.session.user.todos.map(el => ({
        done: el.done,
        important: el.important,
        id: el._id,
        label: el.label,
      })),
      isAuth: true,
    });
  }
});

router.post('/', async (req, res) => {
  const user = await UserSchema.findById(req.session.user._id);
  const todo = {
    label: req.body.str,
    important: false,
    done: false,
    _id: Types.ObjectId(),
  };

  user.todos = [...user.todos, todo];
  await user.save();
  res.json({ todo });
});

router.put('/', async (req, res) => {
  const { done, important, id } = req.body;
  let todos;
  try {
    const user = await UserSchema.findById(req.session.user._id);
    if (done) {
      todos = user.todos.map(el =>
        el._id.toString() === id ? { ...el._doc, done: !el.done } : el
      );
    }
    if (important) {
      todos = user.todos.map(el =>
        el._id.toString() === id ? { ...el._doc, important: !el.important } : el
      );
    }
    user.todos = todos;
    await user.save();
    res.json({ id });
  } catch (error) {
    console.log(error);
  }
});

router.delete('/', async (req, res) => {
  const { id } = req.query;
  try {
    const user = await UserSchema.findById(req.session.user._id);
    const idx = user.todos.findIndex(el => el._id.toString() === id);
    const before = user.todos.slice(0, idx);
    const after = user.todos.slice(idx + 1);
    const todos = [...before, ...after];
    user.todos = todos;
    await user.save();

    res.json({ id });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
