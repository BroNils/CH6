const { PrismaClient } = require(process.env.ROOT_PATH + "/models/pgclient");

/** @type {import('../models/pgclient').PrismaClient} */
const prisma = new PrismaClient();

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function middleware(req, res, next) {
  // object has own property
  if(!req.headers || !req.headers.hasOwnProperty('token')) {
    return next();
  }

  const session = await prisma.session.findFirst({
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

  if(session && !session.error) {
    req.authorized = true;
  }

  next();
  // const deleted = await prisma.session.delete({
  //   where: {
  //     token: req.cookies.token,
  //   }
  // }).catch(err => {
  //   return {
  //     error: true,
  //     message: 'Unauthorized',
  //     data: [],
  //   }
  // });

  // res.clearCookie('token');
  // console.log(deleted);
}

module.exports = middleware;
