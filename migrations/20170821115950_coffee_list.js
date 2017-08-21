
exports.up = function(knex, Promise) {
    return knex.schema.creatTableIfNotExists('coffee_list',(t) => {
        t.increments('id')
        t.string('coffee_type'),
        t.string('size'),
        t.string('price')
    }) 
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('coffee_list')
  
};
