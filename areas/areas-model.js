const db = require('../data/dbConfig.js');

module.exports = {
    find,
    add,
    remove
}

function find(){
    return db('areas')
}

function add(area){
    return db('areas').insert(area)
        .then(() => {
            return find()
        })
}

function remove(id){
    id = parseFloat(id)
    return db('areas').where({id: parseFloat(id)}).del()
        .then(() => {
            return find()
        })
}