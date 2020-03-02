const { Router } = require('express');
const bcript = require('bcryptjs');

const UserSchema = require('../models/user');

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const candidate = await UserSchema.findOne({ email });

    if (candidate) {
      if (await bcript.compare(password, candidate.password)) {
        req.session.user = candidate;
        req.session.isAuthenticated = true;

        req.session.save(err => {
          if (err) {
            throw err;
          } else {
            res.json({ homeRedirect: true, isAuth: true });
          }
        });
      } else {
        console.log('err passw');
        res.json({ message: 'Incorrect data. Check the data entered.' });
      }
    } else {
      res.json({ message: 'Incorrect data. Check the data entered.' });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
