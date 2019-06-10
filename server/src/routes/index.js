import { Router } from 'express';

// import AuthRouter from './AuthRouter';
import carRouter from './CarRouter';
import userRouter from './UserRouter';
const router = Router();

// router.use('/auth', AuthRouter);
router.use('/api/v1/cars', carRouter)
router.use('/api/v1/users', userRouter)

export default router;
