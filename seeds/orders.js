
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, order_name: 'Joe', created: '16:21 21-Aug-17', pickup_time: '16:30 21-Aug-17', completed: true, paid: true, },
        {id: 2, order_name: 'Betty', created: '16:21 21-Aug-17', pickup_time: '16:30 21-Aug-17', completed: true, paid: true, },
        {id: 3, order_name: 'Patrick', created: '16:21 21-Aug-17', pickup_time: '16:30 21-Aug-17', completed: true, paid: true, },
        {id: 4, order_name: 'BatMan', created: '16:21 21-Aug-17', pickup_time: '16:30 21-Aug-17', completed: true, paid: true, },
        {id: 5, order_name: 'Ajax', created: '16:21 21-Aug-17', pickup_time: '16:30 21-Aug-17', completed: false, paid: true, },
        {id: 6, order_name: 'Patrick', created: '16:21 21-Aug-17', pickup_time: '16:30 21-Aug-17', completed: false, paid: true, }
      ]);
    });
};
