const { PrismaClient } = require(process.env.ROOT_PATH + "/models/pgclient");

/** @type {import('../../models/pgclient').PrismaClient} */
const prisma = new PrismaClient();

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function controller(req, res, next) {
  if(!req.body.username || !req.body.password) {
    return res.json({
      error: true,
      message: 'Username and password are required',
      data: [],
    })
  }

  if(req.body.username != 'admin' || req.body.password != 'admin') {
    return res.json({
      error: true,
      message: 'Username or password is incorrect',
      data: [],
    })
  }

  const data = await prisma.session.create({
    data: {
      //randomly generated token
      token: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
    }
  }).catch(err => {
    return {
      error: true,
      message: err.message,
      data: [],
    }
  });

  if(data && data.error){
    return res.status(500).json(data)
  }

  return res.json({
    error: false,
    message: 'Login success',
    data: [data]
  })
}

module.exports = controller;
