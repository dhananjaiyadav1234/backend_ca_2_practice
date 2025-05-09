const mongoose = require("mongoose")

const inventorySchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type:String,
        required: true
    }

})


module.exports = mongoose.model("inventory",inventorySchema)