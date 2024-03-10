const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email: { 
        type: String, 
        lowercase: true, 
        required: [true, "Email can't be blank"], 
        match: [/\S+@\S+\.\S+/, 'Invalid email address'], 
        index: true 
    },
    first_name: { 
        type: String, 
        required: true, 
        maxLength: 100 
    },
    last_name: { 
        type: String, 
        required: true, 
        maxLength: 100 
    },
    status: { 
        type: String, 
        enum: ['Member', 'Non-Member'] 
    },
    password: {
        type: String,
        required: true
    }
});

// Virtual for User's full name
UserSchema.virtual("fullName").get(function () {
    let fullname = "";
    if (this.first_name && this.last_name) {
        fullname = `${this.last_name}, ${this.first_name}`;
    }
    return fullname;
});
  
// Virtual for User's URL
UserSchema.virtual("url").get(function () {
    return `/clubhouse/User/${this._id}`;
});

// Hash the password before saving
UserSchema.pre('save', async function(next) {
    try {
        // Generate a salt
        const salt = await bcrypt.genSalt(10);
        // Hash the password with the salt
        const hashedPassword = await bcrypt.hash(this.password, salt);
        // Replace the plain text password with the hashed password
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model('User', UserSchema);
