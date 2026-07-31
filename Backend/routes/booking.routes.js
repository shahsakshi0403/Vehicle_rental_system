const express = require("express");

const router = express.Router();

const bookingController = require("../controllers/booking.controller");
const auth = require("../middleware/auth.middleware");
const validate = require("../middleware/validate.middleware");
const { bookingValidator } = require("../validators/booking.validator");

router.post("/", auth, bookingValidator, validate, bookingController.createBooking);
router.get("/my", auth, bookingController.myBookings);
router.put("/cancel/:id", auth, bookingController.cancelBooking);

module.exports = router;
