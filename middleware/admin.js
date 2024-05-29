const {Admin} = require('../db/index');

async function adminMidlleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;
    const admin = await Admin.findOne({username:username,password:password});
    if(admin){
        next();
    }
    else{
        res.status(403).json({msg: "Admin doesn't exist"});
    }
}

module.exports = adminMidlleware;