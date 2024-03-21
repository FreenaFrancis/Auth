
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require('../models/User')

const registerUser = asyncHandler(async (req, res) => {

    // here we check the user ie, whenever the user wants to register user have to send username,password ,email
    const{username,email,passsword} = req.body;
        if(!username || !email ||!passsword){
            res.status(400);
            throw new Error("All fields are mandatory")  // then shows this msg
        }
        // checks whether the user is available or not
        const userAvailable = await UserActivation.findOne({email});
        if (userAvailable){
            res.json(400);
            throw new Error("user already registered")
        }
        
        // then we arae getting the users name, email, password. but the password will be in raw password , so we have to make it hash function,
        // inorder to make password hash we use hash

        // hash password
        const hashpassword = await bcrypt.hash(passsword,10);  //password is 'raw password' and 10 is the solved rounds
        console.log("Hashed Password: ", hashpassword);
res.json({message:"Registered"})
    
});

const loginUser = async (req, res) => {
    try {
        // Your asynchronous code here
        res.json({ message: "login user" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const currentUser = async (req, res) => {
    try {
        // Your asynchronous code here
        res.json({ message: "current user" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });

    }
};

module.exports = { registerUser, loginUser, currentUser };

