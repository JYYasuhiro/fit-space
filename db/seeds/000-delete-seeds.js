/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('workout_table').del()
  await knex('exercise_table').del()
  await knex('week_table').del()
  await knex('exercise_type').del()
};
