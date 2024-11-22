const { v4: uuidv4 } = require("uuid");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries in the 'service' table
  await knex("service").del();

  // Inserts seed entries
  await knex("service").insert([
    {
      id: uuidv4(),
      name: "IT Support",
      isDeleted: false,
    },
    {
      id: uuidv4(),
      name: "Consulting",
      isDeleted: false,
    },
    {
      id: uuidv4(),
      name: "Software Development",
      isDeleted: false,
    },
    {
      id: uuidv4(),
      name: "Network Maintenance",
      isDeleted: false,
    },
  ]);
};
