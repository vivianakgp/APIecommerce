const bcrypt = require("bcrypt");
const Users = require("../models/user.models");
class UserService {
  static async authUser(email, password) {
    try {
      const user = await Users.findOne({ where: { email } });
      if (user) {
        const isValid = bcrypt.compareSync(password, user.password);
        return { isValid, user };
      }
      return false;
    } catch (err) {
      throw err;
    }
  }
  static async createUser(data) {
    try {
      await Users.create(data);
      return true;
    } catch (err) {
      throw err;
    }
  }
}
module.exports = UserService;
