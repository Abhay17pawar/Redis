const createRedisConnection = require('./client');

async function init() {
    try {
        const client = await createRedisConnection();

        await client.hSet('user:1', 'name', 'abhay');
        await client.hSet('user:1', 'age', '20');
        const user = await client.hGetAll('user:1');
        console.log('User 1001:', user);
    } catch (error) {
        console.log(error);
    }
}

init();