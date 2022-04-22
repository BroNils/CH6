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

  var created_at = new Date();

  const data = await prisma.user_game_history.create({
    data: {
      user_game: {
        connect: {
          id: parseInt(req.body.user_id)
        }
      },
      game: req.body.game,
      score: parseInt(req.body.score),
      created_at,
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
    message: 'User game history created',
    data: [data],
  })
}

module.exports = controller;
