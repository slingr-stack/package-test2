listeners.listener1 = {
    label: 'Catch HTTP pandadoc events',
    type: 'service',
    options: {
        service: 'http',
        event: 'webhook',
        matching: {
            path: '/pandadoc'
        }
    },
    callback: function(event) {
        sys.logs.error('received panadoc webhook. Processign and triggering a package event');
        sys.events.triggerEvent('packageTestTwo:test',event);
    }
};
