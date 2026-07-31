const bookingService = require("../services/booking.service");

const createBooking = async (req, res, next) => {
  try {
    const booking = await bookingService.createBooking(
      req.user._id,

      req.body
    );

    return res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: booking,
    });
  } catch (err) {
    next(err);
  }
};

const myBookings = async (req, res, next) => {
  try {
    const bookings = await bookingService.myBookings(req.user._id);

    return res.json({
      success: true,

      data: bookings,
    });
  } catch (err) {
    next(err);
  }
};

const cancelBooking = async (req, res, next) => {
  try {
    const booking = await bookingService.cancelBooking(req.params.id);

    return res.json({
      success: true,
      message: "Booking cancelled",
      data: booking,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createBooking,
  myBookings,
  cancelBooking,
};
