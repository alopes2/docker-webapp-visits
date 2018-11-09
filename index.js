const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send(`Number of visits is: ${visits || 0}`);
        client.set('visits', parseInt(visits || 0) + 1);
    });
});

app.listen(8081, () => {
    console.log('Listening on port 8081.');
});