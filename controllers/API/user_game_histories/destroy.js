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

  var id = parseInt(req.params.id);

  if(isNaN(id)) {
    return res.json({
      error: true,
      message: 'Invalid user history id',
      data: [],
    })
  }

  const data = await prisma.user_game_history.delete({
    where: {
      id
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
    message: 'User history deleted',
    data: [data],
  })
}

module.exports = controller;
