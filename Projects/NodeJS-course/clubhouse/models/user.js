var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    email: { type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
    first_name: { type: String, required: true, maxLength: 100 },
    last_name: { type: String, required: true, maxLength: 100 },
    Status: [{ type: String, enum: ['Member', 'Non-Member'] }], // corrected the Status field
});

// Virtual for User's full name
UserSchema.virtual("full_name").get(function () {
    // To avoid errors in cases where a User does not have either a last name or first name
    // We want to make sure we handle the exception by returning an empty string for that case
    let fullname = "";
    if (this.first_name && this.last_name) {
        fullname = `${this.last_name}, ${this.first_name}`;
    }
    return fullname;
});
  
// Virtual for User's URL
UserSchema.virtual("url").get(function () {
    // We don't use an arrow function as we'll need the 'this' object
    return `/clubhouse/User/${this._id}`;
});

mongoose.model('User', UserSchema);
