const express = require("express");

const router = express.Router();

const vehicleController = require("../controllers/vehicle.controller");
const { vehicleValidator } = require("../validators/vehicle.validator");
const auth = require("../middleware/auth.middleware");
const validate = require("../middleware/validate.middleware");
const upload = require("../middleware/upload.middleware");

router.post(
  "/",
  auth,
  upload.single("image"),
  vehicleValidator,
  validate,
  vehicleController.createVehicle
);
router.get("/", vehicleController.getVehicles);
router.get("/:id", vehicleController.getVehicle);
router.put(
  "/:id",
  auth,
  vehicleValidator,
  validate,
  vehicleController.updateVehicle
);
router.delete("/:id", auth, vehicleController.deleteVehicle);

module.exports = router;
