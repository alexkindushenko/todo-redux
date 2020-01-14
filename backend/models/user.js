const { model, Schema } = require('mongoose');

module.exports = model(
  'User',
  new Schema({
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    todos: [
      {
        label: String,
        done: {
          type: Boolean,
          required: true,
          default: false,
        },
        important: {
          type: Boolean,
          default: false,
          required: true,
        },
      },
    ],
  })
);
