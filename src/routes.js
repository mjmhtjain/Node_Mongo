const service = require('./service');

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: function (request, h) {

            return 'Hello World GET';
        }
    },
    {
        method: 'GET',
        path: '/getAll',
        handler: function (request, h) {

            return service.getAll();
        }
    }
]