const router = require('express').Router();
const User = require('./user.model.ts');
const usersService = require('./user.service.ts');



router.route('/').get(async (req, res) => {

  const users = await usersService.getAll();
 
  if (!users) {
    return res.status(401).json( {message: 'Error, Users not found'} );
  };
  
  return res.status(200).json(users.map(User.toResponse));
});



router.route('/:id').get(async (req, res) => {

  const { id } = req.params;
  const user = await usersService.getUserById(id);

  if (!user) {
    return res.status(404).json( {message: 'Error, User not found'} );
  };
  
  return res.status(200).json(User.toResponse(user));
});



router.route('/').post( async (req,res) => {
  
  const user = await usersService.createNewUser(
     new User({...req.body }));

  if (!user) {
    return res.status(400).json( {message: 'Error, new User was not created'} );
  };
    
  return res.status(201).json(User.toResponse(user));
});



router.route('/:id').put(async (req, res) => {

  const { id } = req.params;
  const newUserData = req.body;
  const user = await usersService.updateUser(id, newUserData);
  

  if (!user) {
    return res.status(400).json( {message: 'Error, User could not be updated'} );
  };
    
  return res.status(200).json(User.toResponse(user));
});



router.route('/:id').delete(async (req, res) => {

  const { id } = req.params;
  const user = await usersService.deleteUser(id);
  
  if (!user) { 
     return res.status(404).json( {message: 'Error, User could not be deleted'} );
  };
    
  return res.status(204).json(`User ${user} successfully deleted`);
});



module.exports = router;
