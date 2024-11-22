const { v4: uuidv4 } = require("uuid");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("contracts").del();

  // Insert data into the contracts table
  await knex("contracts").insert([
    {
      id: uuidv4(), // Example ID
      guiId: "CONTRACT-0000001", // Example GUI ID
      company_id: "4283ba9d-133d-45f4-a0cd-b2b2bc0672de", // Company ID
      service_id: "4665492b-79a4-42e2-80cf-7f877b935245", // Service ID
      notes_id: null, // This will be NULL, as you want to exclude using notes_id
      period: "1 Year", // Example period
      status: "Active", // Default status
      status_reason: null, // Optional field
      isDeleted: false, // Default is false
    },
    {
      id: uuidv4(), // Example ID
      guiId: "CONTRACT-0000002", // Example GUI ID
      company_id: "4283ba9d-133d-45f4-a0cd-b2b2bc0672de", // Company ID
      service_id: "6b795836-6115-452f-a98f-363daaa6b198", // Service ID
      notes_id: null, // This will be NULL
      period: "6 Months", // Example period
      status: "Down", // Example status
      status_reason: "Maintenance", // Example reason
      isDeleted: false, // Default is false
    },
    {
      id: uuidv4(), // Example ID
      guiId: "CONTRACT-0000003", // Example GUI ID
      company_id: "4283ba9d-133d-45f4-a0cd-b2b2bc0672de", // Company ID
      service_id: "a8ec34db-b292-474a-a388-c70a8678264b", // Service ID
      notes_id: null, // This will be NULL, as you want to exclude using notes_id
      period: "1 Year", // Example period
      status: "Active", // Default status
      status_reason: null, // Optional field
      isDeleted: false, // Default is false
    },
    {
      id: uuidv4(), // Example ID
      guiId: "CONTRACT-0000004", // Example GUI ID
      company_id: "c62b6b9c-fd9e-49e0-b555-6adaa310d595", // Company ID
      service_id: "a8ec34db-b292-474a-a388-c70a8678264b", // Service ID
      notes_id: null, // This will be NULL
      period: "6 Months", // Example period
      status: "Down", // Example status
      status_reason: "Maintenance", // Example reason
      isDeleted: false, // Default is false
    },
    {
      id: uuidv4(), // Example ID
      guiId: "CONTRACT-0000005", // Example GUI ID
      company_id: "c62b6b9c-fd9e-49e0-b555-6adaa310d595", // Company ID
      service_id: "6b795836-6115-452f-a98f-363daaa6b198", // Service ID
      notes_id: null, // This will be NULL, as you want to exclude using notes_id
      period: "1 Year", // Example period
      status: "Active", // Default status
      status_reason: null, // Optional field
      isDeleted: false, // Default is false
    },
    {
      id: uuidv4(), // Example ID
      guiId: "CONTRACT-0000006", // Example GUI ID
      company_id: "c6b508ad-702e-443c-ab6f-20d2af3d090b", // Company ID
      service_id: "50622ebd-a816-4e9d-b6f6-6000a2cd37ae", // Service ID
      notes_id: null, // This will be NULL
      period: "6 Months", // Example period
      status: "Down", // Example status
      status_reason: "Maintenance", // Example reason
      isDeleted: false, // Default is false
    },
  ]);
};
