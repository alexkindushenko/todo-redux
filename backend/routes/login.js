const { Router } = require('express');
const bcript = require('bcryptjs');

const UserSchema = require('../models/user');
const isValid = require('../midlevare/isValid');

const router = Router();

router.post('/', isValid, async (req, res) => {
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
            return res.json({ homeRedirect: true, isAuth: true });
          }
        });
      } else {
        return res.json({ message: 'Password confirmation is incorrect.' });
      }
    } else {
      return res.json({ message: 'E-mail not found.' });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
