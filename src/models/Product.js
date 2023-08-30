const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            default: ""
        },
        categories: {
            type: Array,
            default: []
        },
        size: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model("Product", ProductSchema)


module.exports = Product