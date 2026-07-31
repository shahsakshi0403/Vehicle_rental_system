const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/vehicles");
  },
  filename: (req, res, next) => {
    const uniqueName = Date.now() + "-" + Math.round(Math.random * 1e9);

    cb(null, uniqueName + path.extname(file.originalName));
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    ile.mimetype === "image/jpg" ||
    ile.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Only images are allowed"));
  }
};

module.exports = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
});
