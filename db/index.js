const mongoose = require('mongoose');

//Connect to MongoDB
mongoose.connect('your-mongodb-url');

//Define schema
const AdminSchema = new mongoose.Schema({
        username: String,
        password: String,
});
const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    // refer to Course Table
    purchasedCourse:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
    }]
});

const CourseSchema = new mongoose.Schema({
        title: String,
        description: String,
        imageLink: String,
        price: Number
});

const Admin = mongoose.model('Admin',AdminSchema);
const User = mongoose.model('User',UserSchema);
const Course = mongoose.model('Course',CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}