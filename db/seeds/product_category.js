const { v4: uuidv4 } = require("uuid");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries in the 'product_category' table
  await knex("product_category").del();

  // Inserts seed entries
  await knex("product_category").insert([
    {
      id: uuidv4(),
      name: "Software Development",
      isDeleted: false,
    },
    {
      id: uuidv4(),
      name: "Hardware & Components",
      isDeleted: false,
    },
    {
      id: uuidv4(),
      name: "Networking & Communication",
      isDeleted: false,
    },
    {
      id: uuidv4(),
      name: "AI & Machine Learning",
      isDeleted: false,
    },
    {
      id: uuidv4(),
      name: "Electronics",
      isDeleted: false,
    },
  ]);
};
