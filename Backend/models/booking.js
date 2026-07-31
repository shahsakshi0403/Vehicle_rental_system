const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    vehicle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
      required: true,
    },

    startDate: {
      type: Date,
      required: [true, "Start Date is required"],
    },

    endDate: {
      type: Date,
      required: [true, "End Date is required"],
    },

    totalDays: {
      type: Number,
      required: [true, "Days is required"],
    },

    totalPrice: {
      type: Number,
      required: [true, "Price is required"],
      min: 1,
    },

    status: {
      type: String,
      enum: ["Booked", "Cancelled"],
      default: "Booked",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);
