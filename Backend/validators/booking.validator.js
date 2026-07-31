const { body } = require("express-validator");

exports.bookingValidator = [
    body("vehicleId")
    .trim()
    .notEmpty()
    .withMessage("Vehicle Id is required"),

    body("startDate")
    .isISO8601()
    .withMessage("Invalid start date"),

    body("endDate")
    .trim()
    .notEmpty()
    .withMessage("Invalid end date"),
];