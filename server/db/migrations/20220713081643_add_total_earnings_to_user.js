/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  knex.schema.table('users', function (table) {
    table.integer('total_earnings')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
  knex.schema.table('users', function (table) {
    table.dropColumn('total_earnings')
  })
}
