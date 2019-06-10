class User {

  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.users = [];
  }
  /**
   * 
   * @returns {object} reflection object
   */
  create(data) {
    const newUsers = {
      id: this.users.length + 1,
      email: data.email || '',
      first_name: data.first_name ||'',
      last_name: data.last_name || '',
      password: data.password || '',
      address: data.address || '',
      is_admin: data.is_admin || '',
      phone_number: data.phone_number || '',
      // token: jwt.sign({ email: 'anukamuchechukwu@gmail.com' }, options.secretOrKey)

    };
    this.users.push(newUsers);
    return newUsers;
  }

  /**
   * 
   * @param {uuid} id
   * @returns {object} user object
   */
  findOne(id) {
    return this.users.find(user => user.id === id);
  }
  /**
   * @returns {object} returns all users
   */
  findAll() {
    return this.users;
  }
  
  update(id, data) {
    const user = this.findOne(id);
    const index = this.user.indexOf(user);
    this.users[index].email= data['email'] || user.email;
    this.users[index].first_name= data['first_name'] || user.first_name;
    this.users[index].last_name= data['last_name'] || user.last_name;
    this.users[index].password= data['password'] || user.password;
    this.users[index].is_admin= data['is_admin'] || user.is_admin;
    this.users[index].address = data['address'] || user.address;
    this.users[index].phone_number = data['phone_number'] || user.phone_number;
    this.users[index].token = data['token'] || user.token;
    return this.users[index];
  }
  
  /**
   * 
   * @param {uuid} id 
   */
  delete(id) {
    const user = this.findOne(id);
    const index = this.users.indexOf(user);
    this.users.splice(index, 1);
    return {};
  }
}

export default new User();