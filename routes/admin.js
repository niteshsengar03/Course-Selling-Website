const express = require('express'); 
const adminMidlleware = require('../middleware/admin');
const { Admin,Course } = require('../db');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');

router.post('/signup',async (req,res)=>{
    // implement adming logic
    const username = req.body.username;
    const password = req.body.password;
    
   await Admin.create({
        username:username,
        password:password
    })
    res.json({
        menubar: 'Admin Signup',
    })
})

router.post('/signin',async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const admin = await Admin.findOne({username,password});
    if(admin){
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

router.post('/course',adminMidlleware,async (req,res)=>{
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    const newCourse = await Course.create({
        title:title,
        description:description,
        imageLink:imageLink,
        price:price
    })
    res.json({
        message: 'Course Created', courseID:newCourse._id
    })
});

router.get('/course',adminMidlleware,async (req,res)=>{
    const courses = await Course.find();
    res.json(courses);
})

module.exports = router;