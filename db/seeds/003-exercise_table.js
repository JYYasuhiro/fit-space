/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('exercise_table').del()
  await knex('exercise_table').insert([
    {id: 1, exercise_name: 'bench press', exercise_type: 1},
    {id: 2, exercise_name: 'incline bench press', exercise_type: 1},
    {id: 3, exercise_name: 'dips', exercise_type: 1},
    {id: 4, exercise_name: 'cable flies', exercise_type: 1},
    {id: 5, exercise_name: 'decline dumbbell press', exercise_type: 1},
    {id: 6, exercise_name: 'lat pulldowns', exercise_type: 2},
    {id: 7, exercise_name: 'cable lat rows', exercise_type: 2},
    {id: 8, exercise_name: 'dumbbell rows (each side)', exercise_type: 2},
    {id: 9, exercise_name: 'smith machine rows', exercise_type: 2},
    {id: 10, exercise_name: 'cable lateral raises', exercise_type: 3},
    {id: 11, exercise_name: 'dumbbell shoulder press', exercise_type: 3},
    {id: 12, exercise_name: 'facepulls', exercise_type: 3},
    {id: 13, exercise_name: 'squats', exercise_type: 4},
    {id: 14, exercise_name: 'deadlifts', exercise_type: 4},
    {id: 15, exercise_name: 'bulgarian split squats', exercise_type: 4},
    {id: 16, exercise_name: 'leg press', exercise_type: 4},
    {id: 17, exercise_name: 'hanging leg raises', exercise_type: 5},
    {id: 18, exercise_name: 'ab crunches', exercise_type: 5},
    {id: 19, exercise_name: 'skull crushers', exercise_type: 6},
    {id: 20, exercise_name: 'cable tricep extensions', exercise_type: 6},
    {id: 21, exercise_name: 'overhead tricep extensions', exercise_type: 6},
    {id: 22, exercise_name: 'seated curls', exercise_type: 7},
    {id: 23, exercise_name: 'EZ-bar preacher curls', exercise_type: 7},
    {id: 24, exercise_name: 'rest', exercise_type: 8},
    {id: 25, exercise_name: 'bicycle crunches', exercise_type: 5},
  ]);
};
