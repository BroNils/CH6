/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
 function controller(req, res, next) {
  res.render('logout', { title: 'Logout' });
}

module.exports = controller;
