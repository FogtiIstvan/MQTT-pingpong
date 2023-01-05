const client = require('./util/mqttclient');
var i = 0;

client.on('connect', function () {
    console.log('Connected')
  
    client.subscribe('pong', function (err) {
        if (!err) {
          client.publish('ping', 'Hello mqtt ping')
        }
    })
})

client.on('message', function (topic, message) {
    console.log(message.toString());
    client.publish('ping', 'Hello mqtt ping' + i);
    if(i == 100) client.end();
    i++;
})

