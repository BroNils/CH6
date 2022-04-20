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
  var id = parseInt(req.params.id);

  if(isNaN(id)) {
    return res.json({
      error: true,
      message: 'Invalid user biodata id',
      data: [],
    })
  }

  const data = await prisma.user_game_biodata.findFirst({
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

  if(!data) {
    return res.json({
      error: true,
      message: 'User biodata not found',
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
