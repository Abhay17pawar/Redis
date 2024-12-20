const { createClient } = require('redis');

async function createRedisConnection() {
    const client = createClient({
        url: 'redis://127.0.0.1:6379', 
    });

    client.on('connect', () => console.log('Connected to Redis!'));
    client.on('error', (err) => console.error(`Redis connection error: ${err}`));

    await client.connect(); 
    return client;
}

module.exports = createRedisConnection;
