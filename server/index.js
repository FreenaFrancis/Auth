const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const UsetModel = require('./models/User')
const app = express();

app.use(express.json())
app.use(cors());
app.use(cookieParser());
app.use("/server/users",require('./routes/userRouter'))

mongoose.connect('mongodb://127.0.0.1:27017/auth')
console.log("mongodb connected");

// app.post('/register', (req,res)=>{
//     const{name,email,password} = req.body;
//     bcrypt.hash(password,10)
//     .then(bcrypt.hash)
// })


app.listen(5000, () => {
    console.log("Server is running")
})
