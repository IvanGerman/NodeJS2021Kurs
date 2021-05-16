const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {

  const users = await usersService.getAll();
  
  res.json(users.map(User.toResponse)); 
});

router.route('/:id').get(async (req, res) => {

  const { id } = req.params;
  const user = await usersService.getUserById(id);

  res.setHeader('content-type', 'application/json');
  res.status(user? 200 : 400)
    .json(User.toResponse(user));  
});

router.route('/').post( async (req,res) => {
  
  const user = await usersService.createNewUser(
     new User( {
       name: req.body.name,
       login: req.body.login,
       password: req.body.password
      })
    );

  res.setHeader('content-type', 'application/json');
  res.status(user? 201 : 400)
    .json(User.toResponse(user));
});

module.exports = router;
