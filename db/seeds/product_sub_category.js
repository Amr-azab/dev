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
      product_category_id: "73175e7f-419d-4175-afeb-2d55b2688e74", // Software Development category ID
      name: "Web Development",
      isDeleted: false,
    },
    {
      id: uuidv4(),
      product_category_id: "73175e7f-419d-4175-afeb-2d55b2688e74", // Software Development category ID
      name: "Mobile App Development",
      isDeleted: false,
    },
    {
      id: uuidv4(),
      product_category_id: "e2a5d9c4-2a2d-425b-8b97-423f86b09ed6", // Hardware & Components category ID
      name: "Processors",
      isDeleted: false,
    },
    {
      id: uuidv4(),
      product_category_id: "e2a5d9c4-2a2d-425b-8b97-423f86b09ed6", // Hardware & Components category ID
      name: "Graphics Cards",
      isDeleted: false,
    },
    {
      id: uuidv4(),
      product_category_id: "7428a6dc-50ac-4a84-80d2-e044d8588afa", // Networking & Communication category ID
      name: "Routers",
      isDeleted: false,
    },
    {
      id: uuidv4(),
      product_category_id: "7428a6dc-50ac-4a84-80d2-e044d8588afa", // Networking & Communication category ID
      name: "Switches",
      isDeleted: false,
    },
    {
      id: uuidv4(),
      product_category_id: "7ffc68c5-bc16-4148-919c-649870c8f4dc", // AI & Machine Learning category ID
      name: "Deep Learning Frameworks",
      isDeleted: false,
    },
    {
      id: uuidv4(),
      product_category_id: "7ffc68c5-bc16-4148-919c-649870c8f4dc", // AI & Machine Learning category ID
      name: "Data Science Tools",
      isDeleted: false,
    },
    {
      id: uuidv4(),
      product_category_id: "6039a297-68f6-4d47-8ebe-55086769e46c", // Electronics category ID
      name: "Laptop",
      isDeleted: false,
    },
    {
      id: uuidv4(),
      product_category_id: "6039a297-68f6-4d47-8ebe-55086769e46c", // Electronics category ID
      name: "PC computer",
      isDeleted: false,
    },
  ]);
};
