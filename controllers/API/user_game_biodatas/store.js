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
    || !req.body.first_name
    || !req.body.last_name
    || !req.body.age
    || !req.body.about
  ){
    return res.json({
      error: true,
      message: 'User id, first name, last name, age and about are required',
      data: [],
    })
  }

  const data = await prisma.user_game_biodata.create({
    data: {
      user_game: {
        connect: {
          id: parseInt(req.body.user_id)
        }
      },
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      age: parseInt(req.body.age),
      about: req.body.about,
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
    message: 'User game biodata created',
    data: [data],
  })
}

module.exports = controller;
