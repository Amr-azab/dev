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
      company_id: "948628d2-18aa-4801-87c0-87ce59b0aa78", // Referencing a company (replace with valid company IDs)
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
      company_id: "948628d2-18aa-4801-87c0-87ce59b0aa78", // Referencing a company (replace with valid company IDs)
      name: "amr mohamed",
      role: "Support",
      phone: "01098765432",
      isDeleted: false,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      id: uuidv4(),
      HrId: "0003",
      company_id: "22df9dbd-06b3-4b7a-960e-269cf96d0423", // Referencing a company (replace with valid company IDs)
      name: "ahmed hassan",
      role: "Customer",
      phone: "01122334455",
      isDeleted: false,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
  ]);
};
