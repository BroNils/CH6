/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
function controller(req, res, next) {
  if(!req.body.username || !req.body.password) {
    return res.json({
      error: true,
      message: 'Username and password are required',
      data: [],
    })
  }

  if(req.body.username === 'admin' && req.body.password === 'admin') {
    return res.json({
      error: false,
      message: 'Login success',
      data: []
    })
  }

  res.json({
    error: true,
    message: 'Username or password is incorrect',
    data: [],
  })
}

module.exports = controller;
