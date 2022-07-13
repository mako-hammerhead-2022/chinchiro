/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.string('auth0_id').primary()
    table.string('email')
    table.string('username')
    table.integer('win_tally').defaultTo(0)
    table.integer('loss_tally').defaultTo(0)
    table.integer('total_earnings').defaultTo(0)
    table.string('avatar')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
