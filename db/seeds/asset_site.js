const { v4: uuidv4 } = require("uuid");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("asset_site").del();

  // Inserts seed entries
  await knex("asset_site").insert([
    {
      id: uuidv4(),
      company_id: "22df9dbd-06b3-4b7a-960e-269cf96d0423",
      name: "Heliopolis",
      isDeleted: false,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      id: uuidv4(),
      company_id: "948628d2-18aa-4801-87c0-87ce59b0aa78",
      name: "New Cairo",
      isDeleted: false,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      id: uuidv4(),
      company_id: "70901333-a8b9-4841-8465-142f7372d79e",
      name: "Nasr City",
      isDeleted: false,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
  ]);
};
