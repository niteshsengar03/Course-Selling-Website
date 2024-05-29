const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user');
app.use(bodyParser.json());


// This is just a another use case of app.use 
// where you want to strucutre your code in different files
// and then use them in your main file which is index.js
// Here we are using adminRouter and userRouter in index.js
// and both of these routers are defined in their respective files
// jb /admin request aayega to adminRouter wala code chalega
// and then it will go to admin.js in routes folder
// and then if it is /admin/signup then it will go to signup route
app.use('/admin',adminRouter);
app.use('/user',userRouter);




const Port = 3000;
app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});
