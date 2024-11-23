const multer = require("multer");
const path = require("path");
const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/"); // Store in public/images
  },
  filename: function (req, file, cb) {
    // Get the date string (e.g., "Sat Nov 23 2024")
    const dateString = new Date().toDateString();

    // Replace spaces with dashes to match the desired format (e.g., "Sat-Nov-23-2024")
    const timestamp = dateString.replace(/ /g, "-");

    // Use the formatted timestamp with the original file name
    cb(null, `${timestamp}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
