const { v4: uuidv4 } = require("uuid");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    {
      id: uuidv4(),
      HrId: "0001",
      company_id: "4283ba9d-133d-45f4-a0cd-b2b2bc0672de", // Referencing a company (replace with valid company IDs)
      name: "admin",
      role: "Admin",
      phone: "01234567890",
      isDeleted: false,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      id: uuidv4(),
      HrId: "0002",
      company_id: "4283ba9d-133d-45f4-a0cd-b2b2bc0672de", // Referencing a company (replace with valid company IDs)
      name: "ahmed hassan",
      role: "Customer",
      phone: "01098765432",
      isDeleted: false,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      id: uuidv4(),
      HrId: "0003",
      company_id: "4283ba9d-133d-45f4-a0cd-b2b2bc0672de", // Referencing a company (replace with valid company IDs)
      name: "Amr mohamed",
      role: "Support",
      phone: "01122334455",
      isDeleted: false,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
  ]);
};
