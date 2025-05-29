import Users from "../models/users.js";

class AuthService {
  async loginUser(userData){
    const { emailOrPhone, password } = userData;
    const authenticatedUser = await Users.create({ emailOrPhone, password });
    return authenticatedUser;
  }
}

export default new AuthService();