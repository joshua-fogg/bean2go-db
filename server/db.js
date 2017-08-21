const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    getCoffeeList,
    getOrder,
    getOrders,
    addOrder
}

// retrieves coffee list and prices
function getCoffeeList(conn) {
    const db = conn || connection
    return db('coffee_list').select('*')
}

//addOrder: add order to orders && add order.items to order_items
function addOrder(order, conn) {
    const db = conn || connection
    return db('orders').insert([{
        order_name: order.orderName,
        pickup_time: order.recipientId,
        completed: order.completed,
        created_at: new Date()
            .then(
                db('order_items').insert([{ //this will not work atm... multiple items
                    order_id: order.orderId,
                    coffee_id: order.coffeeId,
                    personal_name: order.personName
                }])
            )
    }])
}

function getOrders(conn) {
    const db = conn || connection
    return db('orders').select('*')
}

function removeOrder(messageId, conn) {
    const db = conn || connection
    return db('order')
        .where('id', messageId)
        .del()
}