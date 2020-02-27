const { Router } = require('express');

const router = Router();

router.patch('/', (req, res) => {
  req.session.destroy(() => {
    res.json({ isAuth: false });
  });
});

module.exports = router;
