const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
    },

    type: {
        type: String,
        required: [true, "Type is required"],
        enum: ["Car", "Bike", "SUV", "Truck"],
    },

    brand: {
        type: String,
        required: [true, "Brand is required"],
    },

    model: {
        type: String,
        required: [true, "Model is required"],
    },

    year: {
        type: String,
        required: [true, "Year is required"],
    },

    rentPerDay: {
        type: Number,
        required: [true, "Rent is required"],
        min: 1,
    },

    image: {
        type: String,
        default: null,
    },

    description: {
        type: String,
    },

    available: {
        type: Boolean,
        default: true,
    },

    popularity: {
        type: Number,
        default: 0,
    },


}, {
    timestamps: true,
});

module.exports = mongoose.model("Vehicle", vehicleSchema);