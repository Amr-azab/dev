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
      company_id: "c62b6b9c-fd9e-49e0-b555-6adaa310d595", // First company
      name: "Heliopolis",
      isDeleted: false,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      id: uuidv4(),
      company_id: "4283ba9d-133d-45f4-a0cd-b2b2bc0672de", // Second company
      name: "New Cairo",
      isDeleted: false,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      id: uuidv4(),
      company_id: "c6b508ad-702e-443c-ab6f-20d2af3d090b", // Third company
      name: "Nasr City",
      isDeleted: false,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
  ]);
};
