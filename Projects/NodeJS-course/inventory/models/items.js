const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: { type: String, required: true, maxLength: 100 },
    description: { type: String, required: true, maxLength: 100 },
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
    price: { type: Number, },
    URL: {
        type: String,
        required: 'URL can\'t be empty',
        unique: true
    },

});

// Virtual for Item's full name
ItemSchema.virtual("name").get(function () {
    return this.name;
//   // To avoid errors in cases where an Item does not have either a family name or first name
//   // We want to make sure we handle the exception by returning an empty string for that case
//   let fullname = "";
//   if (this.first_name && this.family_name) {
//     fullname = `${this.family_name}, ${this.first_name}`;
//   }
//   return fullname;

});

// Virtual for Item's URL
// ItemSchema.virtual("url").get(function () {
//   // We don't use an arrow function as we'll need the this object
//   return `/catalog/Item/${this._id}`;
// });

// Export model
module.exports = mongoose.model("Item", ItemSchema);
