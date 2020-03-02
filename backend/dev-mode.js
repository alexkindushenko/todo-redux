const express = require('express');
const mongoose = require('mongoose');
const app = express();
const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session);
const cookieParser = require('cookie-parser');
const cors = require('cors');

const UserSchema = require('./models/user');

const PORT = process.env.port || 8888;
const MONGODB_URI = 'mongodb://localhost:27017/todo-mern';
const store = new MongoStore({
  collection: 'sessions',
  uri: MONGODB_URI,
});

app.use(cors());
app.use(
  session({
    secret: 'secret key11',
    resave: false,
    saveUninitialized: false,
    store,
  })
);

app.disable('x-powered-by');
app.use(cookieParser());
app.use(express.json());

app.use(async (req, res, next) => {
  req.session.user = await UserSchema.findById('5e4525572a489b5e70a69ccf');
  req.session.isAuthenticated = true;
  next();
});
app.get('/', (req, res) => {
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
      isAuth: true,
    });
  }
});
app.use('/', require('./routes/home'));
app.use('/login', require('./routes/login'));
app.use('/logout', require('./routes/logout'));
app.use('/register', require('./routes/register'));

const start = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    app.listen(PORT, () => {
      console.log('Server runing!!!');
    });
  } catch (e) {
    console.log(e);
  }
};

start();
