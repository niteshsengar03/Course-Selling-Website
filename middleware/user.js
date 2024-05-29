const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

function adminMidlleware(req, res, next) {
  
    const token = req.headers.authorization;
    // Bearer asdfa => [Bearer, asdfa]
    const words = token.split(" ");
    const jwtToken = words[1];
    const decodedvalue = jwt.verify(jwtToken, JWT_SECRET);
    if(decodedvalue.username){
      // pass the value of username to the next middleware or route
      req.username = decodedvalue.username;
      next();
    }
    else 
      res.status(403).json({msg: "Admin doesn't exist"});
  }
  
  module.exports = adminMidlleware;
  