// import cars from '../data/CarData.js';
// import cars from '../data/CarData.js';
import  userModel from '../models/UserModel'
import Jwt from '../utils/utils'

const userController = {
  create(req, res) {
    // if (!req.body.email && !req.body.password && !req.body.address && !req.body.phone_number && !req.body.first_name) {
    //   return res.status(400).send({'message': 'All fields are required'})
    // }
    const newUser = userModel.create(req.body);

    const tokenData = {
        name: newUser.name,
        id: newUser.id
    }
    
    const data = {
        token: Jwt.generateToken(tokenData),
        name: newUser.name,
        id: newUser.id,
        address: newUser.address,
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        phone_number: newUser.phone_number
    }

    return res.status(201).send(data);
  },
}

export default userController;