const express = require("express");
const contractController = require("./controller");
const router = express.Router();
router.post("/create-contract", contractController.createContract);
router.patch("/update-contract/:contractId", contractController.updateContract);

module.exports = router;
