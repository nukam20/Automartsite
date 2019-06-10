// import cars from '../data/CarData.js';
import  carModel from '../models/CarsModels'

const carController = {
  create(req, res) {
    if (!req.body.state && !req.body.status && !req.body.model && !req.body.price && !req.body.manufacturer) {
      return res.status(400).send({'message': 'All fields are required'})
    }
    const cars = carModel.create(req.body);
    return res.status(201).send(cars);
  },

  getAll(req, res) {
    const cars = carModel.findAll();
    return res.status(200).send(cars);
  },

  getAllCars(req, res)  {
    const cars = carModel.findAll();
    return res.status(200).send(cars);
  },
  
  getOne(req, res) {
    const { id } = req.params;
    const car = carModel.findOne(parseInt(id));
    if (!car) {
      return res.status(404).send({'message': 'reflection not found'});
    }
    return res.status(200).send(car);
  },

  updateCars(req, res) {
    const { id } =  req.params;
    const car = carModel.findOne(parseInt(id));
    if (!car) {
      return res.status(404).send({'message': 'car not found'});
    }
    const updatedCar = carModel.update(parseInt(id), req.body)
    return res.status(200).send(updatedCar);
  },

  delete(req, res) {
    const {id} = req.params
    const car= carModel.findOne(parseInt(id));
    if (!car) {
      return res.status(404).send({'message': 'car not found'});
    }
    const ref = carModel.delete(parseInt(id));
    return res.status(204).send(ref);
  }
}

export default carController;