const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    getCoffeeList,
    getOrder,
    getOrders,
    addOrder
}

function getCoffeeList(conn) {
    const db = conn || connection
    return db('coffee_list').select('*')
}

function addOrder(order, conn) {
    const db = conn || connection
    return db('orders').insert([{
        order_name: message.orderName,
        pickup_time: message.recipientId,
        completed: message.completed,
        created_at: new Date()
    }])
}

function getPeople(conn) {
    const db = conn || connection
    return db('people').select()
}

function deleteMessage(messageId, conn) {
    const db = conn || connection
    return db('messages')
        .where('id', messageId)
        .del()
}