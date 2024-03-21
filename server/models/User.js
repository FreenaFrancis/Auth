const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter the user name"]
    },
    email: {
        type: String,
        required: [true, "please enter the email"]
    },
    password: {
        type: String,
        required: [true, "please enter the password"]
    }
}, {
    timestamps: true // Replace the semicolon with a comma
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel; // Corrected the variable name
