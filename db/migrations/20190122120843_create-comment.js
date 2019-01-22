exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', table => {
    table
      .uuid('id')
      .primary()
      .notNull()
    table.uuid('content').notNull()
    table.uuid('postId').references('posts.id')
    table.uuid('author').references('users.id')
    table
      .timestamp('createdAt')
      .defaultTo(knex.fn.now())
      .notNull()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments')
}
