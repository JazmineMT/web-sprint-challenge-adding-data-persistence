
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('name')
        .notNullable();
        tbl.string('description')
        .notNullable();
        tbl.boolean('project_completed')
        .notNullable();

    })
    .createTable('tasks' , tbl => {
        tbl.increments();
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        tbl.text('description')
        .notNullable();
        tbl.text('notes');
        tbl.boolean('task_completed')
        .notNullable();

    })
    .createTable('resource_list' , tbl => {
        tbl.increments();
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resource')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.text('name')
        .unique()
        .notNullable();
        tbl.text('description')
    
    })
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resource_list')
    .dropTableIfExists('resources')
};
