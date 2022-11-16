/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('workout_table').del()
  await knex('workout_table').insert([
    {id: 1, day_id: 1, exercise_id: 1, sets: 3, reps: 10, order: 1, type_id: 1},
    {id: 2, day_id: 1, exercise_id: 3, sets: 3, reps: 10, order: 2, type_id: 1},
    {id: 3, day_id: 1, exercise_id: 4, sets: 3, reps: 10, order: 3, type_id: 1},
    {id: 4, day_id: 1, exercise_id: 19, sets: 4, reps: 10, order: 4,type_id: 6},
    {id: 5, day_id: 2, exercise_id: 6, sets: 3, reps: 10, order: 1, type_id: 2},
    {id: 6, day_id: 2, exercise_id: 7, sets: 3, reps: 10, order: 2, type_id: 2},
    {id: 7, day_id: 2, exercise_id: 8, sets: 3, reps: 10, order: 3, type_id: 2},
    {id: 8, day_id: 2, exercise_id: 22, sets: 3, reps: 10, order: 4, type_id: 7},
    {id: 9, day_id: 3, exercise_id: 10, sets: 3, reps: 10, order: 1, type_id: 3},
    {id: 10, day_id: 3, exercise_id: 11, sets: 3, reps: 10, order: 2, type_id: 3},
    {id: 11, day_id: 3, exercise_id: 12, sets: 3, reps: 10, order: 3, type_id: 3},
    {id: 12, day_id: 3, exercise_id: 20, sets: 3, reps: 10, order: 4, type_id: 6},
    {id: 13, day_id: 4, exercise_id: 13, sets: 3, reps: 8, order: 1, type_id: 4},
    {id: 14, day_id: 4, exercise_id: 14, sets: 3, reps: 8, order: 2, type_id: 4},
    {id: 15, day_id: 4, exercise_id: 15, sets: 3, reps: 8, order: 3, type_id: 4},
    {id: 16, day_id: 5, exercise_id: 25, sets: 3, reps: 15, order: 1, type_id: 5},
    {id: 17, day_id: 5, exercise_id: 17, sets: 3, reps: 10, order: 2, type_id: 5},
    {id: 18, day_id: 5, exercise_id: 18, sets: 3, reps: 15, order: 3, type_id: 5},
    {id: 19, day_id: 6, exercise_id: 20, sets: 3, reps: 10, order: 1, type_id: 6},
    {id: 20, day_id: 6, exercise_id: 23, sets: 3, reps: 10, order: 2, type_id: 7},
    {id: 21, day_id: 6, exercise_id: 21, sets: 3, reps: 10, order: 3, type_id: 6},
    {id: 22, day_id: 7, exercise_id: 24, sets: 0, reps: 0, order: 1, type_id: 8}
  ]);
};
