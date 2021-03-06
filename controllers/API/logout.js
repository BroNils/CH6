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
  if(!req.authorized) {
    return res.status(401).json({
      error: true,
      message: 'Unauthorized',
      data: [],
    });
  }

  const deleted = await prisma.session.delete({
    where: {
      token: req.headers.token,
    }
  }).catch(err => {
    return {
      error: true,
      message: err.message,
      data: [],
    }
  });

  if(deleted && deleted.error) {
    return res.status(500).json(deleted);
  }

  res.json({
    error: false,
    message: 'Logout success',
    data: [],
  });
}

module.exports = controller;
