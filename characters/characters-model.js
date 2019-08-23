const db = require('../data/dbConfig.js');

module.exports = {
    find,
    add,
    remove
}

function find(){
    return db('characters')
}

function add(character){
    return db('characters').insert(character)
        .then(() => {
            return find()
        })
}

function remove(id){
    id = parseFloat(id)
    return db('characters').where({id: parseFloat(id)}).del()
        .then(() => {
            return find()
        })
}
