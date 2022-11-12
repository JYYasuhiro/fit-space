/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return await knex.schema.createTable('exercise_table', (table) => {
        table.increments('id').primary();
        table.string('exercise_name').unique().notNullable();
        table.integer('exercise_type')
        .references('id')
        .inTable('exercise_type')
        .notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTable('exercise_table');
};
