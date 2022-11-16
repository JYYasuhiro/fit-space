/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('workout_type').del()
  await knex('workout_type').insert([
    {id: 1, workout_name: 'push-pull'},
    {id: 2, workout_name: 'bro-split'},
    {id: 3, workout_name: 'calisthenics'}
  ]);
};
