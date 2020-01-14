const { Router } = require('express');
const bcript = require('bcryptjs');
const UserSchema = require('../models/user');

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'login page' });
});

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const candidate = await UserSchema.findOne({ email });
    console.log(candidate);

    if (candidate) {
      if (await bcript.compare(password, candidate.password)) {
        req.session.user = candidate;
        req.session.isAuthenticated = true;

        req.session.save(err => {
          if (err) {
            throw err;
          } else {
            console.log('Hello login');
            res.redirect('/');
          }
        });
      } else {
        console.log('Error login');
        res.redirect('/login');
      }
    } else {
      console.log('Error register');
      res.redirect('/register');
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
