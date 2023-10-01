const { createClient } = require('redis')
let config = require('../config'),
    redisClient

(async () => {
    redisClient = createClient({
        url: `redis://${config.app.cache.host}:${config.app.cache.port}`
    })
    redisClient.on('connect', () => {
        console.log(`Redis connected on ${config.app.cache.host} : ${config.app.cache.port}`)
        console.log('==========================')
    })
    redisClient.on('end', () => {
        console.log('Redis disconnected');
    });
    redisClient.on('reconnecting', () => {
        console.log('Redis reconnecting');
    });
    redisClient.on('error', err => console.log('Redis Client Error', err));

    await redisClient.connect();
})()


const setCache = async(keyName, value, expired=600) => {
    const key = config.app.cache.prefix + ':' + keyName
    await redisClient.set(key, value, {
        EX: expired, //10 Menit
        NX: true
    })
}

const getCache = async(keyName) => {
    const key = config.app.cache.prefix + ':' + keyName
    const getCache = await redisClient.get(key)
    if(!getCache)
    {
        return null
    } else {
        return getCache
    }
}

const deleteCache = async(keyName) => {
    const key = config.app.cache.prefix + ':' + keyName
    await redisClient.del(key)
}

module.exports = {
    set: setCache,
    get: getCache,
    delete: deleteCache
}