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
  const data = await prisma.user_game_history.findMany().catch(err => {
    return {
      error: true,
      message: err.message,
      data: [],
    }
  });

  if(data && data.error){
    return res.status(500).json(data)
  }

  if(!data) {
    return res.json({
      error: true,
      message: 'No user history found',
      data: [],
    })
  }

  res.json({
    error: false,
    message: 'Success',
    data: [data],
  })
}

module.exports = controller;
