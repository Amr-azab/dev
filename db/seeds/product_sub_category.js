const { v4: uuidv4 } = require("uuid");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries in the 'product_sub_category' table
  await knex("product_sub_category").del();

  // Inserts seed entries
  await knex("product_sub_category").insert([
    {
      id: uuidv4(),
      product_category_id: "f31a24f1-8448-4bd4-afd1-b0ceb15552eb", // Software Development category ID
      name: "Web Development",
      isDeleted: false,
    },
    {
      id: uuidv4(),
      product_category_id: "f31a24f1-8448-4bd4-afd1-b0ceb15552eb", // Software Development category ID
      name: "Mobile App Development",
      isDeleted: false,
    },
    {
      id: uuidv4(),
      product_category_id: "3791759c-0071-4ecb-b4e7-f538c537efe0", // Hardware & Components category ID
      name: "Processors",
      isDeleted: false,
    },
    {
      id: uuidv4(),
      product_category_id: "3791759c-0071-4ecb-b4e7-f538c537efe0", // Hardware & Components category ID
      name: "Graphics Cards",
      isDeleted: false,
    },
    {
      id: uuidv4(),
      product_category_id: "247924df-a8ef-438d-8b02-38c699f1aae1", // Networking & Communication category ID
      name: "Routers",
      isDeleted: false,
    },
    {
      id: uuidv4(),
      product_category_id: "247924df-a8ef-438d-8b02-38c699f1aae1", // Networking & Communication category ID
      name: "Switches",
      isDeleted: false,
    },
    {
      id: uuidv4(),
      product_category_id: "74c608e6-ac35-4898-8e97-b1d3d383b9f7", // AI & Machine Learning category ID
      name: "Deep Learning Frameworks",
      isDeleted: false,
    },
    {
      id: uuidv4(),
      product_category_id: "74c608e6-ac35-4898-8e97-b1d3d383b9f7", // AI & Machine Learning category ID
      name: "Data Science Tools",
      isDeleted: false,
    },
    {
      id: uuidv4(),
      product_category_id: "4cf97b56-3da7-41c5-9162-91ca3dadab3e", // Electronics category ID
      name: "Laptop",
      isDeleted: false,
    },
    {
      id: uuidv4(),
      product_category_id: "4cf97b56-3da7-41c5-9162-91ca3dadab3e", // Electronics category ID
      name: "PC computer",
      isDeleted: false,
    },
  ]);
};
