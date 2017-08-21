
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('orders', (t) => {
        t.increment('id')
        t.string('order_name')
        t.string('created')
        t.string('pickup_time')
        t.boolean('completed')
        t.boolean('paid')
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('orders')
  
};
