/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
 function controller(req, res, next) {
  res.render('dashboard', { title: 'Dashboard' });
}

module.exports = controller;
