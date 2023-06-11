'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })
    fastify.get('/aa', async function (request, reply) {
    return 'arguments';
  })
}
