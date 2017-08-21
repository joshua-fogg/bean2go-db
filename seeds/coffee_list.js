
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('coffee_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('coffee_list').insert([
        {id: 1, coffee_type: 'Flat White', size: 'S', price: '4.20'},
        {id: 2, coffee_type: 'Flat White', size: 'M', price: '4.50'},
        {id: 3, coffee_type: 'Flat White', size: 'L', price: '5.00'},
        {id: 4, coffee_type: 'Cappuccino', size: 'S', price: '4.20'},
        {id: 5, coffee_type: 'Cappuccino', size: 'M', price: '4.50'},
        {id: 6, coffee_type: 'Cappuccino', size: 'M', price: '5.00'},
        {id: 7, coffee_type: 'Long Black', size: 'S', price: '3.80'},
        {id: 8, coffee_type: 'Short Black', size: 'XS', price: '3.80'},
        {id: 9, coffee_type: 'Versato', size: 'S', price: '4.20'},
      ]);
    });
};
