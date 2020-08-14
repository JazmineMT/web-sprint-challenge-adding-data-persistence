
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {project_id : 1 , description: 'finish writing seed data' , notes: ' do not mess up' , task_completed: false},
        {project_id : 1 , description: 'write endpoints' , notes: ' do not mess up' , task_completed: false},
        {project_id : 2 , description: 'clean the bathrooms' , notes: ' use bleach' , task_completed: false},
        {project_id : 2 , description: 'vaccum' , notes: 'remember the bedroom' , task_completed: true}
      ]);
    });
};
