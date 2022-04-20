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
  if(
    !req.body.user_id
    || !req.body.game
    || !req.body.score
  ){
    return res.json({
      error: true,
      message: 'User id, game and score are required',
      data: [],
    })
  }

  var id = parseInt(req.params.id);

  if(isNaN(id)) {
    return res.json({
      error: true,
      message: 'Invalid user history id',
      data: [],
    })
  }

  const update = await prisma.user_game_history.update({
    where: {
      id
    },
    data: {
      user_game: {
        connect: {
          id: parseInt(req.body.user_id)
        }
      },
      game: req.body.game,
      score: parseInt(req.body.score)
    }
  }).catch(err => {
    return {
      error: true,
      message: err.message,
      data: [],
    }
  });

  if(update && update.error){
    return res.status(500).json(update)
  }

  res.json({
    error: false,
    message: 'User history updated',
    data: [update],
  })
}

module.exports = controller;
