const { PrismaClient } = require(process.env.ROOT_PATH + '/models/pgclient');

/** @type {import('../../../models/pgclient').PrismaClient} */
const prisma = new PrismaClient()

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function controller(req, res, next) {
  if(!req.authorized) {
    return res.status(401).json({
      error: true,
      message: 'Unauthorized',
      data: [],
    });
  }

  if(!req.body.username || !req.body.password || !req.body.email) {
    return res.json({
      error: true,
      message: 'Username, password and email are required',
      data: [],
    })
  }

  const data = await prisma.user_game.create({
    data: {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
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

  res.json({
    error: false,
    message: 'User created',
    data: [data],
  })
}

module.exports = controller;
