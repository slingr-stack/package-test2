listeners.listener1 = {
    label: 'Catch HTTP events',
    type: 'service',
    options: {
        service: 'http',
        event: 'webhook',
        matching: {
            path: '/pandadoc'
        }
    },
    callback: function(event) {
       sys.logs.error(JSON.stringify(event));
    }
};
