
exports.seed = function(knex) {
    return knex('characters').insert([
      {id: 1, name: 'Link', hometown: 'Kakariko Village'},
      {id: 2, name: 'Deku Tree', hometown: 'Forest Haven'},
      {id: 3, name: 'Rito', hometown: 'Rito Village'}
    ]);
};
