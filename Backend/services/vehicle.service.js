const Vehicle = require("../models/vehicle");
const getPaginationData = require("../utils/pagination");

const createVehicle = async (data) => {
  return await Vehicle.create(data);
};

const findAllVehicle = async (query) => {
  const { page, limit, skip } = getPaginationData(query);

  const filter = {};
  if (query.type) filter.type = query.type;
  if (query.available) filter.available = query.available;
  if (query.search) {
    filter.name = { $regex: query.search, $options: "i" };
  }

  let sort = {};
  switch (query.sort) {
    case "priceAsc":
      sort.rentPerDay = 1;
      break;
    case "priceDesc":
      sort.rentPerDay = -1;
      break;
    case "popular":
      sort.popularity = -1;
      break;
    default:
      sort.createdAt = -1;
      break;
  }

  const vehicles = await Vehicle.find(filter)
    .sort(sort)
    .skip(skip)
    .limit(limit);

  const total = await Vehicle.countDocuments(filter);

  return {
    vehicles,
    total,
    page,
    totalPages: Math.ceil(total / limit),
  };
};

const findVehicleById = async (id) => {
  return await Vehicle.findById(id);
};

const updateVehicle = async (id, data) => {
  return await Vehicle.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

const deleteVehicle = async (id) => {
  return await Vehicle.findByIdAndDelete(id);
};

module.exports = {
  createVehicle,
  findAllVehicle,
  findVehicleById,
  updateVehicle,
  deleteVehicle,
};
