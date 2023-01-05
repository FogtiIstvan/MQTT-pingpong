const mqtt = require('mqtt')

const url = 'mqtt://192.168.1.117:1883';

const options = {
    // Clean session
    clean: true,
    connectTimeout: 4000,
    // Authentication
    clientId: 'testUserID',
    username: 'István',
    password: 'root',
  }

const client = mqtt.connect(url, options);

module.exports = client;