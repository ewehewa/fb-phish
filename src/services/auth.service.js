import Users from "../models/users.js";

class AuthService {
  async loginUser(userData){
    const { email, password } = userData;
    const authenticatedUser = await Users.create({ email, password });
    return authenticatedUser;
  }

}

export default new AuthService();