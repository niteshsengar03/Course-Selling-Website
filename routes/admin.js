const {Router} = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

//Admin Routes
router.post('/signup',(req,res)=>{
    //Implement admin signup logic
})

router.post('/signin',(res,res)=>{
    //Implement admin signup logic
});

router.post('/course',adminMiddleware,(req,res)=>{
    //Implement course creation logic
});

router.get('/courses',adminMiddleware,(req,res)=>{
    //Implement fetching all courses logic
});

module.exports = router;