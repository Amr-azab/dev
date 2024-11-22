const express = require("express");
const assetController = require("./controller");
const upload = require("../../utils/upload");
const router = express.Router();
router.post("/create-asset", upload.single("photo"), assetController.addAsset);
router.patch(
  "/update-asset/:assetId",
  upload.single("photo"),
  assetController.updateAsset
);

module.exports = router;
