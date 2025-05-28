import AuthService from "../services/auth.service.js";
import sendResponse from "../util/apiResponse.js";

export const loginFbUser = async (req, res, next)=>{
  const userData = req.loginData;
  try{
    const user = await AuthService.loginUser(userData);
    return sendResponse(res, 200, "Login successful", user);
  }
  catch(err){
    next(err)
  }
}