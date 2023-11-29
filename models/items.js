const mongoose = require("mongoose")
const itemsSchema = mongoose.Schema({
itemName: {
    type: String,
    required: true,
},
itemcategory:{
 type: String,
 required: true,
 minlength: 4,
 maxlength: 15,
},
itemPrice:{
 type: Number,
 required: true,
 min: 0,
 max: 1500,
},
});
module.exports = mongoose.model("items",
itemsSchema)
