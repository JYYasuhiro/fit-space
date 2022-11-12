/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return await knex.schema.createTable('workout_table', (table) => {
        table.increments('id').primary();
        table.integer('day_id')
            .references('id')
            .inTable('week_table')
            .notNullable();
        table.integer('exercise_id')
            .references('id')
            .inTable('exercise_table')
            .notNullable();
        table.integer('sets').notNullable();
        table.integer('reps').notNullable();
        table.integer('order').notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTable('workout_table');
};
