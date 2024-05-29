// const {Admin} = require('../db/index');
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

// Implement admin auth logic
// You need to check the headers and validate the admin
// from the admin db.
// it will get json token
 function adminMidlleware(req, res, next) {
  // these authetication is done by  username and password sending at every request
  // const username = req.headers.username;
  // const password = req.headers.password;
  // const admin = await Admin.findOne({username:username,password:password});
  // if(admin){
  //     next();
  // }
  // else{
  //     res.status(403).json({msg: "Admin doesn't exist"});
  // }

  // this is done by token
  const token = req.headers.authorization;
  // Bearer asdfa => [Bearer, asdfa]
  const words = token.split(" ");
  const jwtToken = words[1];
  const decodedvalue = jwt.verify(jwtToken, JWT_SECRET);
  if(decodedvalue.username)
    next();
  else 
    res.status(403).json({msg: "Admin doesn't exist"});
}

module.exports = adminMidlleware;
