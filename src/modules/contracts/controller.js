const contractModel = require("./model");
const AppError = require("../../utils/appError");
const catchAsync = require("../../utils/catchAsync");
// const { v4: uuidv4 } = require("uuid");

exports.createContract = catchAsync(async (req, res, next) => {
  const { company_id, service_id, notes_id, period, status, status_reason } =
    req.body;

  // Add the new asset
  const newContract = await contractModel.createContract(
    company_id,
    service_id,
    notes_id,
    period,
    status,
    status_reason
  );

  res.status(201).json({
    message: "Contract created successfully",
    newContract,
  });
});

exports.updateContract = catchAsync(async (req, res, next) => {
  const { contractId } = req.params;
  const { company_id, service_id, notes_id, period, status, status_reason } =
    req.body;

  const data = {
    company_id,
    service_id,
    notes_id,
    period,
    status,
    status_reason,
  };
  const updateContract = await contractModel.updateContract(contractId, data);

  res.status(200).json({
    message: "Contract updated successfully",
    updateContract,
  });
});
