const Booking = require("../models/booking");
const Vehicle = require("../models/vehicle");

const createBooking = async (userId, bookingData) => {
  const vehicle = await Vehicle.findById(bookingData.vehicleId);

  if (!vehicle) throw new Error("Vehicle not found");

  if (!vehicle.available) throw new Error("Vehicle is unavailable");

  const overlap = await Booking.findOne({
    vehicle: bookingData.vehicleId,

    status: "Booked",

    $or: [
      {
        startDate: {
          $lte: bookingData.endDate,
        },

        endDate: {
          $gte: bookingData.startDate,
        },
      },
    ],
  });

  if (overlap) throw new Error("Vehicle already booked for selected dates");

  const start = new Date(bookingData.startDate);
  const end = new Date(bookingData.endDate);
  const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;

  const booking = await Booking.create({
    user: userId,
    vehicle: bookingData.vehicleId,
    startDate: bookingData.startDate,
    endDate: bookingData.endDate,
    totalDays: days,
    totalPrice: days * vehicle.rentPerDay,
  });

  return booking;
};

const myBookings = async (userId) => {
  return await Booking.find({
    user: userId,
  })
    .populate("vehicle")
    .sort("-createdAt");
};

const cancelBooking = async (bookingId) => {
  return await Booking.findByIdAndUpdate(
    bookingId,
    {
      status: "Cancelled",
    },
    {
      new: true,
    }
  );
};

module.exports = {
  createBooking,
  myBookings,
  cancelBooking,
};
