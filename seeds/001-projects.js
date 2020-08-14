
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Jazmine' , description: 'Complete my sprint' , project_completed: 'false'},
        {name: 'Richard' , description: 'Clean the house' , project_completed: 'false'},
    
      ]);
    });
};
