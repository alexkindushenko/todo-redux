const express = require('express');
const app = express();
const session = require('express-session');
const csrf = require('csurf');
const MongoStore = require('connect-mongodb-session')(session);
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const PORT = process.env.port || 8888;
const MONGODB_URI = 'mongodb://localhost:27017/todo-mern';
const store = new MongoStore({
  collection: 'sessions',
  uri: MONGODB_URI,
});

app.use(
  session({
    secret: 'secret key11',
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);
app.use(csrf());
app.use(cookieParser());
app.use(express.json());
app.use((req, res, next) => {
  res.locals.isAuth = req.session.isAuthenticated;
  next();
});
app.all('*', function(req, res, next) {
  res.cookie('XSRF-TOKEN', req.csrfToken()); // X-XSRF-TOKEN
  next();
});

app.use('/login', require('./routes/login'));
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
