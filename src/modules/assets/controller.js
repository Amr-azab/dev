const assetModel = require("./model");
const AppError = require("../../utils/appError");
const catchAsync = require("../../utils/catchAsync");
const knex = require("../../../db/knex");
const { select } = require("./model");

// const { v4: uuidv4 } = require("uuid");

exports.addAsset = catchAsync(async (req, res, next) => {
  const {
    asset_name,
    serial_number,
    supported,
    status,
    priority,
    description,
    asset_type,
    user_id,
    contract_id,
    product_category_id,
    product_sub_category_id,
    company_id,
    asset_site_id,
    service_id,
    notes_id,
  } = req.body;
  const attach_image = req.file ? `/images/${req.file.filename}` : null;

  if (!asset_name || !serial_number) {
    return next(
      new AppError("Asset name and serial number are required.", 400)
    );
  }
  if (await assetModel.isSerialNumberDuplicate(serial_number)) {
    return next(
      new AppError(`Serial number ${serial_number} is already in use`, 400)
    );
  }
  if (company_id) {
    const foundCompany = await select("company", "*", { id: company_id });
    if (!foundCompany) {
      return next(
        new AppError(`Company with ID ${company_id} does not exist`, 404)
      );
    }
  }

  const foundService = await select("service", "*", { id: service_id });
  if (!foundService)
    return next(
      new AppError(`Service with ID ${service_id} does not exist`, 404)
    );
  const foundProductCategory = await select("product_category", "*", {
    id: product_category_id,
  });
  if (!foundProductCategory)
    return next(
      new AppError(
        `Product Category with ID ${product_category_id} does not exist`,
        404
      )
    );

  const foundProductSubCategory = await select("product_sub_category", "*", {
    id: product_sub_category_id,
  });
  if (!foundProductSubCategory)
    return next(
      new AppError(
        `Product Sub-Category with ID ${product_sub_category_id} does not exist`,
        404
      )
    );

  if (asset_site_id) {
    const foundAssetSite = await select("asset_site", "*", {
      id: asset_site_id,
    });
    if (!foundAssetSite) {
      return next(
        new AppError(`Asset Site with ID ${asset_site_id} does not exist`, 404)
      );
    }
  }

  if (user_id) {
    const foundUser = await select("users", "*", { id: user_id });
    if (!foundUser) {
      return next(
        new AppError(`Contract with ID ${user_id} does not exist`, 404)
      );
    }
  }

  if (contract_id) {
    const foundContract = await select("contracts", "*", { id: contract_id });
    if (!foundContract) {
      return next(
        new AppError(`Contract with ID ${contract_id} does not exist`, 404)
      );
    }
  }
  // Check notes_id if provided
  if (notes_id) {
    const foundNote = await select("notes", "*", { id: notes_id });
    if (!foundNote) {
      return next(new AppError(`Note with ID ${notes_id} does not exist`, 404));
    }
  }

  // Add the new asset
  const newAsset = await assetModel.addAsset(
    asset_name,
    serial_number,
    supported,
    status,
    priority,
    attach_image,
    description,
    asset_type,
    user_id,
    contract_id,
    product_category_id,
    product_sub_category_id,
    company_id,
    asset_site_id,
    service_id,
    notes_id
  );

  res.status(201).json({
    message: "Asset added successfully",
    newAsset,
  });
});

exports.updateAsset = catchAsync(async (req, res, next) => {
  const { assetId } = req.params; // Assuming assetId is passed in the URL parameters
  const {
    supported,
    status,
    priority,
    description,
    user_id,
    contract_id,
    product_category_id,
    product_sub_category_id,
    company_id,
    asset_site_id,
    service_id,
    notes_id,
    isDeleted,
  } = req.body;
  const attach_image = req.file ? `/images/${req.file.filename}` : null;
  // Check for duplicate serial number (if serial number is updated)
  // const existingAsset = await knex("assets").where({ id: assetId }).first();
  // if (
  //   serial_number &&
  //   existingAsset.serial_number !== serial_number &&
  //   (await isSerialNumberDuplicate(serial_number))
  // ) {
  //   return next(
  //     new AppError(`Serial number ${serial_number} is already in use`, 400)
  //   );
  // }

  if (company_id) {
    const foundCompany = await select("company", "*", { id: company_id });
    if (!foundCompany) {
      return next(
        new AppError(`Company with ID ${company_id} does not exist`, 404)
      );
    }
  }

  if (service_id) {
    const foundService = await select("service", "*", { id: service_id });
    if (!foundService) {
      return next(
        new AppError(`Company with ID ${service_id} does not exist`, 404)
      );
    }
  }
  if (product_category_id) {
    const foundProductCategory = await select("product_category", "*", {
      id: product_category_id,
    });
    if (!foundProductCategory) {
      return next(
        new AppError(
          `Company with ID ${product_category_id} does not exist`,
          404
        )
      );
    }
  }
  if (product_sub_category_id) {
    const foundProductSubCategory = await select("product_sub_category", "*", {
      id: product_sub_category_id,
    });
    if (!foundProductSubCategory) {
      return next(
        new AppError(
          `Company with ID ${product_sub_category_id} does not exist`,
          404
        )
      );
    }
  }

  if (asset_site_id) {
    const foundAssetSite = await select("asset_site", "*", {
      id: asset_site_id,
    });
    if (!foundAssetSite) {
      return next(
        new AppError(`Asset Site with ID ${asset_site_id} does not exist`, 404)
      );
    }
  }

  if (user_id) {
    const foundUser = await select("users", "*", { id: user_id });
    if (!foundUser) {
      return next(
        new AppError(`Contract with ID ${user_id} does not exist`, 404)
      );
    }
  }

  if (contract_id) {
    const foundContract = await select("contracts", "*", { id: contract_id });
    if (!foundContract) {
      return next(
        new AppError(`Contract with ID ${contract_id} does not exist`, 404)
      );
    }
  }
  if (notes_id) {
    const foundNote = await select("notes", "*", { id: notes_id });
    if (!foundNote) {
      return next(new AppError(`Note with ID ${notes_id} does not exist`, 404));
    }
  }

  // Call the updateAsset function to perform the update
  const updatedAsset = await assetModel.updateAsset(
    assetId,
    supported,
    status,
    priority,
    attach_image,
    description,
    user_id,
    contract_id,
    product_category_id,
    product_sub_category_id,
    company_id,
    asset_site_id,
    service_id,
    notes_id,
    isDeleted
  );

  // Return the response with the updated asset
  res.status(200).json({
    message: "Asset updated successfully",
    updatedAsset,
  });
});
