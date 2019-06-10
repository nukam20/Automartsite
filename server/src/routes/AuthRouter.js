import { Router } from 'express';
// import AuthMiddlewares from '../middlewares/AuthMiddlewares';
import AuthController from '../controllers/UserController';

const AuthRouter = Router();

// AuthRouter.post(
//     '/signup',
//     AuthMiddlewares.ValidateParams,
//     AuthController.signup);

AuthRouter.post('/signin', AuthController.signup);
// AuthRouter.post('/login', AuthController.login);


export default AuthRouter;
