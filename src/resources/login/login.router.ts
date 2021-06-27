import { Request, Response, NextFunction } from 'express';

const router = require('express').Router();
const loginService = require('./login.service');


router.route('/').post( async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  
  try {
    const accessToken = await loginService.createNewToken(req.body); ;
    
    if( accessToken === null ) { res.status(403).json("Unsuccessfull login")};
    if( accessToken ) { res.status(201).json(accessToken);}
  } catch (err) { 
    next(err);
  };
});


module.exports = router;


export {};
