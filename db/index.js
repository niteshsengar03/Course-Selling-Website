const  mongoose = require("mongoose");

mongoose.connect('mongodb+srv://niteshsengar9831:WM3KgrH1N0h4VWYT@cluster0.cfc1khk.mongodb.net/course_selling_app');

const AdminSchema = new mongoose.Schema({
    username:String,
    password:String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    // refering to Couse table 
    purchasedCourses: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Course"
    }]
});

const CourseSchema = new mongoose.Schema({
    title:String,
    description:String,
    imageLink:String,
    price:Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}