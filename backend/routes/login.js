const { Router } = require('express');
const bcript = require('bcryptjs');
const path = require('path');

const UserSchema = require('../models/user');

const router = Router();

// router.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../', 'build', 'index.html'));
// });

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const candidate = await UserSchema.findOne({ email });
    // console.log(candidate);

    if (candidate) {
      if (await bcript.compare(password, candidate.password)) {
        req.session.user = candidate;
        req.session.isAuthenticated = true;

        req.session.save(err => {
          if (err) {
            throw err;
          } else {
            console.log(req.session.isAuthenticated);
            console.log('Hello login');
            res.json({ homeRedirect: true });
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
