const { createClient } = require('redis')

/**
 * @description Create a redis client
 * @returns {RedisClient}
 */
const client = createClient()

module.exports = { client }
