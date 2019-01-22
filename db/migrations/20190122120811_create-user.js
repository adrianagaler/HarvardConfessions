exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table
      .uuid('id')
      .notNull()
      .primary()
    table.text('nickname').notNull()
    table
      .text('email')
      .unique()
      .notNull()
    table.text('password').notNull()
    table.text('house').nullable()
    table
      .timestamp('createdAt')
      .defaultTo(knex.fn.now())
      .notNull()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
}
