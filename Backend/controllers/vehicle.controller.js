const VehicleService = require("../services/vehicle.service");

const createVehicle = async (req, res, next) => {
  try {
    const vehicle = await VehicleService.createVehicle({
      ...req.body,
      image: req.file ? req.file.path : null,
    });

    return res.status(201).json({
      success: true,
      message: "Added vehicle successfully",
      data: vehicle,
    });
  } catch (error) {
    next(error);
  }
};

const getVehicles = async (req, res, next) => {
  try {
    const vehicles = await VehicleService.findAllVehicle(req.query);

    return res.status(201).json({
      success: true,
      message: "Retrived vehicles successfully",
      data: vehicles,
    });
  } catch (error) {
    next(error);
  }
};

const getVehicle = async (req, res, next) => {
  try {
    const vehicle = await VehicleService.findVehicleById(req.params.id);
    if (!vehicle) {
      return res.status(404).json({
        success: false,
        message: "Vehicle not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Retrived vehicle successfully",
      data: vehicle,
    });
  } catch (error) {
    next(error);
  }
};

const updateVehicle = async (req, res, next) => {
  try {
    const vehicle = await VehicleService.updateVehicle(req.params.id, {
      ...req.body,
      ...(req.file && { image: req.file ? req.file.path : null }),
    });

    return res.status(200).json({
      success: true,
      message: "Updated vehicle successfully",
      data: vehicle,
    });
  } catch (error) {
    next(error);
  }
};

const deleteVehicle = async (req, res, next) => {
  try {
    await VehicleService.deleteVehicle(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Deleted vehicle successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createVehicle,
  getVehicles,
  getVehicle,
  updateVehicle,
  deleteVehicle,
};
