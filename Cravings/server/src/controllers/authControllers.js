import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const UserRegister = async (req, res, next) => {
  try {
    //Fetch data from frontEnd
    const { fullName, email, mobileNumber, password } = req.body;

    //verify that all data exist
    if (!fullName || !email || !mobileNumber || !password) {
      const error = new Error("All feilds required");
      error.statusCode = 400;
      return next(error);
    }

    //  check for duplicate user before registration
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email already registered");
      error.statusCode = 400;
      return next(error);
    }

    //encrypt the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    //save data to database
    const newUser = await User.create({
      fullName,
      email,
      mobileNumber,
      password: hashPassword,
    });

    //send response to Frontend
    console.log(newUser);
    res.status(201).json({ message: "Registration Successfull" });

    //END
  } catch (error) {
    next(error);
  }
};

export const UserLogin = async (req, res, next) => {
  try {
    //Fetch data from frontEnd
    const {email,password} = req.body;

    //verify that all data exist
    if (!fullName || !email || !mobileNumber || !password) {
      const error = new Error("All feilds required");
      error.statusCode = 400;
      return next(error);
    }

    //  check if user is registered or not 
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("Email not registered");
      error.statusCode = 402;
      return next(error);
    }

    //verify password 
    const isVerified = await bcrypt.compare(password, existingUser.password);
    if(!isVerified){
        const error = new Error("Password didn't match");
        error.statusCode = 402;
        return next(error);
    }

    //send message to frontend
    res.status(200).json({message:"Login Successfull", data:existingUser})
    
    //End 
  } catch (error) {
    next(error);
  }
};

export const UserLogout = async (req, res, next) => {
  try {
    res.status(200).json({message:"Logout Successfull"});
  } catch (error) {
    next(error);
  }
};
