var response = require('../utils/response')
let config = require('../config')

const checkApiKey = (req, res, next) => {
    const apiKey = req.header("x-api-key");

    if(apiKey) {

        if(apiKey != config.app.api.key)
        {
            response.error([], 'Invalid Api Key', '01', 401, false, res)
        } else {
            next();
        }
    } else {
        response.error([], 'API Key not found', '01', 401, false, res)
    }
     
}

module.exports = checkApiKey