/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('exercise_type').del()
  await knex('exercise_type').insert([
    {id: 1, name: 'chest'},
    {id: 2, name: 'back'},
    {id: 3, name: 'shoulders'},
    {id: 4, name: 'legs'},
    {id: 5, name: 'abs'},
    {id: 6, name: 'triceps'},
    {id: 7, name: 'biceps'},
  ]);
};
