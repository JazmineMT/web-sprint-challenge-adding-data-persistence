
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Friday Project'  , project_description: 'Complete my sprint' , project_completed: 'false'},
        {name: 'House Chores' , project_description: 'Clean the house' , project_completed: 'false'},
    
      ]);
    });
};
