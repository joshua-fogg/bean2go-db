const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    getCoffeeList,
    getOrderByID,
    getOrders,
    addOrder
}

// retrieves coffee list and prices
function getCoffeeList(conn) {
    const db = conn || connection
    return db('coffee_list').select('*')
}

function getOrderByID(id, conn) {
    const db = conn || connection
    return db('orders').where(id, '=', 'orders.id')
}

function getOrders(conn) {
    const db = conn || connection
    return db('orders').select('*')
}

//addOrder: add order to orders && add order.items to order_items
function addOrder(order, conn) {
    const db = conn || connection
    return db('orders').insert([{
            order_name: order.orderName,
            pickup_time: order.recipientId,
            completed: order.completed,
            created_at: new Date()
        }], 'id')
        .then(addOrderItems(newOrderId))
        .catch(handleError((err) => {
            if (err) {
                return console.log(err)
            }
            return
        }))
}

function removeOrder(messageId, conn) {
    const db = conn || connection
    return db('order')
        .where('id', messageId)
        .del()
}

function addOrderItems(newOrderId) {
    newOrderId = newOrderId[0]
    const orderItems = order.orderItems.map((orderItem) => {
        return {
            order_id: newOrderId,
            coffee_id: orderItem.coffeeId,
            personal_name: orderItem.personalName
        }
    })
    return db('order_items').insert(orderItems)
}