
exports.seed = function(knex) {
    return knex('areas').insert([
      {id: 1, name: 'Hyrule Field', population: '7'},
      {id: 2, name: 'Kakariko Village', population: '40'},
      {id: 3, name: 'Lake Hylia', population: '60'}
    ]);
};
