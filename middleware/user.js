const {User} = require('../db');

async function usserMidlleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;
    const user = await User.findOne({username:username,password:password});
    if(user){
        next();
    }
    else{
        res.status(403).json({msg: "User doesn't exist"});
    }
}

module.exports = usserMidlleware;