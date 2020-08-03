const { onUpdateTrigger } = require('../../../knexfile');

exports.up = async (knex) =>
  knex.schema
    .createTable('projects', (table) => {
      table.increments('id');
      table.text('title').notNullable();

      // references table users
      table
        .integer('user_id')
        .references('users.id')
        .notNullable()
        .onDelete('CASCADE');

      // created_at and updated_at default
      table.timestamps(true, true);
    })
    .then(() => knex.raw(onUpdateTrigger('projects')));

exports.down = async (knex) => knex.schema.dropTable('projects');
