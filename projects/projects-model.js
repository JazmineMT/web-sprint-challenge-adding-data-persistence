
const db = require('../data/dbConfig')
const { select } = require('../data/dbConfig')


module.exports = {
    getResources, 
    addResources, 
    getProjects, 
    addProjects,
    getTasks, 
    addTasks

}



function getResources(){
    return db('resources')
}


function addResources(newResource){
    return db('resources').insert(newResource)
}

function getProjects(){
    return db('projects')
}

function addProjects(newProject){
    return db('projects').insert(newProject)
}

function getTasks(){
    return db('projects')
    .select('*', 'description')
    .from('projects as p')
    .join('tasks as t', 'p.id', 't.id',)
}

function addTasks(newTask){
    return db('tasks').insert(newTask)
}