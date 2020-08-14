
const db = require('../data/dbConfig')


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
    return db('tasks')
}

function addTasks(newTask){
    return db('tasks').insert(newTask)
}