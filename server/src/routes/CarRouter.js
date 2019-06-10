import { Router } from 'express'
// import controller from '../controllers/mealControllers'
import carController from '../controllers/CarController';
const carRouter = Router();


carRouter.post('/', carController.create)
carRouter.get('/', carController.getAllCars)
carRouter.get('/:id', carController.getOne)
carRouter.put('/:id', carController.updateCars)



export default carRouter