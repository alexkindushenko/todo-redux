const { Router } = require('express');
const { Types } = require('mongoose');

const UserSchema = require('../models/user');

const router = Router();

router.get('/', (req, res) => {
  if (!req.session.isAuthenticated) {
    res.json({ isAuth: false });
  } else {
    res.json({
      todos: req.session.user.todos.map(el => ({
        done: el.done,
        important: el.important,
        id: el._id,
        label: el.label,
      })),
    });
  }
});

router.post('/', async (req, res) => {
  const user = await UserSchema.findById(req.session.user._id);
  console.log(req.body.str);
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
  const user = await UserSchema.findById(req.session.user._id);

  if (done || done === false) {
    user.todos = user.todos.map(el =>
      el._id === id ? { ...el, done: !el.done } : el
    );
  }
  if (important || important === false) {
    user.todos = user.todos.map(el =>
      el._id === id ? { ...el, important: !el.important } : el
    );
  }
  await user.save();
  res.json({ updateItem: true });
});

router.delete('/', async (req, res) => {
  const { id } = req.query;
  console.log(id);

  try {
    const user = await UserSchema.findById(req.session.user._id);
    const idx = user.todos.findIndex(el => el._id.toString() === id);
    const before = user.todos.slice(0, idx);
    const after = user.todos.slice(idx + 1);
    user.todos = [...before, ...after];
    await user.save();
    res.json({ updateItem: true });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
