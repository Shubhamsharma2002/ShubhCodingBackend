import {User} from "../Models/User.Model.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
const secret = "secret";
const register = async(req,res)=>{
    let { username, name, email, password } = req.body;
  let emailCon = await User.findOne({ email: email });
  if (emailCon) {
    return res.json({ success: false, message: "Email already exists" });
  }
  else {

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        let user = User.create({
          username: username,
          name: name,
          email: email,
          password: hash
        });

        return res.json({ success: true, message: "User created successfully" });
      });
    });

  }
}
const login = async(req,res)=>{
    let { email, password } = req.body;
  let user = await User.findOne({ email: email });

  if (user) {
    // Rename the second `res` to avoid conflict
    bcrypt.compare(password, user.password, function (err, isMatch) {
      if (err) {
        return res.json({ success: false, message: "An error occurred", error: err });
      }
      if (isMatch) {
        let token = jwt.sign({ email: user.email, userId: user._id }, secret);
        return res.json({ success: true, message: "User logged in successfully", token: token, userId: user._id });
      } else {
        return res.json({ success: false, message: "Invalid email or password" });
      }
    });
  } else {
    return res.json({ success: false, message: "User not found!" });
  }
}

const getuserDetails = async(req,res)=>{
    console.log("Called")
  let { userId } = req.body;
  let user = await User.findOne({ _id: userId });
  if (user) {
    return res.json({ success: true, message: "User details fetched successfully", user: user });
  } else {
    return res.json({ success: false, message: "User not found!" });
  }
}

export {register,login,getuserDetails};