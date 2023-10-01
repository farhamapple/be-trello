var response = require('../utils/response')
var jwt = require('jsonwebtoken')
var config = require('../config')
const { extractToken } = require('../utils/utils')

const checkJwt = (req, res, next) => {
    //extract token
    const token = extractToken(req)
   
    if(token != null) {

        jwt.verify(token, config.app.jwt.secret, (err, user) => {
            if(err)
            {
                response.error([], err.message , '01', 403, false, res)
            } else {
                req.user = user //untuk ngirim data user ke setiap route yang pake jwt
                next();
            }
        } )

    } else {
        response.error([], 'Token not found', '01', 401, false, res)
    }
     
}



module.exports = checkJwt