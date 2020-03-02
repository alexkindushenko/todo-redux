module.exports = (req, res, next) => {
  if (!req.session.isAuthenticated) {
    return res.json({ isAuth: false });
  }
};
