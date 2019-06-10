import { Router } from 'express'
// import controller from '../controllers/mealControllers'
import userController from '../controllers/UserController';
const userRouter = Router();


userRouter.post('/', userController.create)
// userRouter.get('/', userController.getAllUsers)
// userRouter.get('/:id', userController.getOne)
// userRouter.put('/:id', userController.updateUsers)



export default userRouter