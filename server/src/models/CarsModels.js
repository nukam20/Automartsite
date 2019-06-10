import moment from 'moment';
// import uuid from 'uuid';

class Car {

  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.cars = [];
  }
  /**
   * 
   * @returns {object} reflection object
   */
  create(data) {
    const newCars = {
      id: this.cars.length + 1,
      owner: data.owner || '',
      state: data.state || '',
      status: data.status || '',
      price: data.price || '',
      manufacturer: data.manufacturer || '',
      model: data.model ||'',
      createdDate: moment.now(),
      modifiedDate: moment.now()
    };
    this.cars.push(newCars);
    return newCars;
  }

  /**
   * 
   * @param {uuid} id
   * @returns {object} car object
   */
  findOne(id) {
    return this.cars.find(car => car.id === id);
  }
  /**
   * @returns {object} returns all cars
   */
  findAll() {
    return this.cars;
  }
  
  update(id, data) {
    const car = this.findOne(id);
    const index = this.cars.indexOf(car);
    this.cars[index].owner = data['owner'] || car.owner;
    this.cars[index].state = data['state'] || car.state;
    this.cars[index].status = data['status'] || car.status;
    this.cars[index].price = data['price'] || car.price;
    this.cars[index].manufacturer = data['manufacturer'] || car.manufacturer;
    this.cars[index].model = data['model'] || car.model;
    this.cars[index].createdDate = moment.now()
    return this.cars[index];
  }
  
  /**
   * 
   * @param {uuid} id 
   */
  delete(id) {
    const car = this.findOne(id);
    const index = this.cars.indexOf(car);
    this.cars.splice(index, 1);
    return {};
  }
}

export default new Car();