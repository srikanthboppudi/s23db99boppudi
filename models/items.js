const mongoose = require("mongoose")
const itemsSchema = mongoose.Schema({
itemName: String,
itemcategory: String,
itemPrice: Number
})
module.exports = mongoose.model("items",
itemsSchema)
