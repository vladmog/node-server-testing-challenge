
exports.up = function(knex) {
  return knex.schema
  .createTable('characters', tbl => {
      tbl.increments();
      tbl
        .string('name', 255)
        .notNullable()
        .unique()
      tbl
        .string('hometown', 255)
        .notNullable()
  })
  .createTable('areas', tbl => {
      tbl.increments();
      tbl
        .string('name', 255)
        .notNullable()
        .unique()
      tbl
        .integer('population')
        .notNullable()
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('areas')
    .dropTableIfExists('chaaracters')
};
