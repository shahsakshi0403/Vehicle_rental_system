const { body } = require("express-validator");

exports.vehicleValidator = [
  body("name").trim().notEmpty().withMessage("Name is required"),

  body("type").trim().notEmpty().withMessage("Type is required"),

  body("brand").trim().notEmpty().withMessage("Brand is required"),

  body("model").trim().notEmpty().withMessage("Model is required"),

  body("year").isNumeric().withMessage("Year must be numeric"),

  body("rentPerDay").isNumeric().withMessage("Rent must be numeric"),
];
