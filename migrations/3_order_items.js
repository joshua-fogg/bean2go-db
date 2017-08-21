
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExtsis('order_items', (t) => {
        t.increments('id')
        t.integer('order_id').references('orders.id')
        t.integer('coffee_id').references('coffee_list.id')
        t.string('person_name')
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('order_items')
  
};
