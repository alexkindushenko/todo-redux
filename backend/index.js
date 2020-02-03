const express = require('express');
const mongoose = require('mongoose');
const app = express();
const session = require('express-session');
const csrf = require('csurf');
const MongoStore = require('connect-mongodb-session')(session);
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

const UserSchema = require('./models/user');

const PORT = process.env.port || 8888;
const MONGODB_URI = 'mongodb://localhost:27017/todo-mern';
const store = new MongoStore({
  collection: 'sessions',
  uri: MONGODB_URI,
});

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
app.use(
  session({
    secret: 'secret key11',
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

// app.use(csrf());
app.use(cookieParser());
app.use(express.json());

app.use(async (req, res, next) => {
  req.session.user = await UserSchema.findById('5e346abb0753612ab83d8300');
  req.session.isAuthenticated = true;
  // res.locals.isAuth = req.session.isAuthenticated;
  // res.locals.isAuth = true;
  // console.log(req.session.isAuthenticated);
  // console.log(req.session.user);

  next();
});
// app.all('*', function(req, res, next) {
//   res.cookie('XSRF-TOKEN', req.csrfToken());
//   next();
// });

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
app.use('/', require('./routes/home'));
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
