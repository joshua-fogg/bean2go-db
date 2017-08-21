
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, order_id: 1, coffee_id: 2, person_name: 'Joe'},
        {id: 2, order_id: 2, coffee_id: 2, person_name: 'Betty'},
        {id: 3, order_id: 2, coffee_id: 2, person_name: 'Stiffler'},
        {id: 4, order_id: 3, coffee_id: 2, person_name: 'Patrick'},
        {id: 5, order_id: 3, coffee_id: 2, person_name: 'Spongebob'},
        {id: 6, order_id: 4, coffee_id: 3, person_name: 'Batman'},
        {id: 7, order_id: 4, coffee_id: 3, person_name: 'Batman'},
        {id: 8, order_id: 4, coffee_id: 3, person_name: 'Batman'},
        {id: 9, order_id: 4, coffee_id: 3, person_name: 'Batman'},
        {id: 10,order_id: 5, coffee_id: 5, person_name: 'Barry White'},
        {id: 11, order_id: 5, coffee_id: 1, person_name: 'Frieza'},
        {id: 12, order_id: 6, coffee_id: 6, person_name: 'Goku'},
        {id: 13, order_id: 6, coffee_id: 9, person_name: 'Ash Ketchup'},
      ]);
    });
};
