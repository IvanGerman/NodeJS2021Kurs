const router = require('express').Router();
// const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {

  const boards = await boardsService.getAll();
  
  res.status(boards? 200 : 401)
    .json(boards); 
});

router.route('/:id').get(async (req, res) => {

  const { id } = req.params;
  const board = await boardsService.getBoardById(id);

  res.setHeader('content-type', 'application/json');
  res.status(board? 200 : 401)
    .json(board);  
});

// router.route('/').post( async (req,res) => {
  
//   const user = await usersService.createNewUser(
//      new User( {
//        name: req.body.name,
//        login: req.body.login,
//        password: req.body.password
//       })
//     );

//   res.setHeader('content-type', 'application/json');
//   res.status(user? 201 : 400)
//     .json(User.toResponse(user));
// });

module.exports = router;
