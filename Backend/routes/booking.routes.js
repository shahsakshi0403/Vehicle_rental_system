const express = require("express");

const router = express.Router();

const controller = require("../controllers/booking.controller");

const auth = require("../middleware/auth.middleware");

const validate = require("../middleware/validate.middleware");

const { bookingValidator } = require("../validators/booking.validator");

router.post("/", auth, bookingValidator, validate, controller.createBooking);

router.get("/my", auth, controller.myBookings);

router.put("/cancel/:id", auth, controller.cancelBooking);

module.exports = router;
