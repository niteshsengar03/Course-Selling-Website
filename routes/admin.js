const express = require('express'); 
const adminMidlleware = require('../middleware/admin');
const { Admin,Course } = require('../db');
const router = express.Router();

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