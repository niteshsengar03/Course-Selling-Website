const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const {JWT_SECRET} = require('../config');
const jwt = require("jsonwebtoken");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    username = req.body.username;
    password = req.body.password;
    await User.create({
        username: username,
        password: password
    })
    res.json({
        message: 'User created successfully'
    })

});
router.post('/signin',async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findOne({username,password});
    if(user){
        const token = jwt.sign({username:username},JWT_SECRET);
        res.json({
            token:token
        })
    }
        else{
            res.status(411).json({
                message: 'Invalid Username or Password'
            })
        }
    
})

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({})
    res.json({
        message: response
    });

    
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    
    
    const username = req.username;
    

    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.json({
        message: "Purchase complete!"
    })
});


router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic
    
    const username = req.username;
    const user = await User.findOne({

        username:username
    })
    // console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    })
    res.json({msg: courses});
});

module.exports = router;