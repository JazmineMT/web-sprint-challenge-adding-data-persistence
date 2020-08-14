
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name:'Computer' , description: ' Best part of modern technology' },
        {name:'Coffee' , description: ' Nectar of the gods' },
        {name:'Bleach cleaner' , description: 'For that clean clean look' },
        {name:'Vaccum' , description: 'Modern day problems require modern day solutions' },
     
      ]);
    });
};
