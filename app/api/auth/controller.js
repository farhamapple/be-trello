var response = require('../../utils/response')
var config = require('../../config')
var jwt = require('jsonwebtoken')
var redisClient = require('../../utils/redis')
const bcrypt = require("bcrypt")

const { User } = require('../../db/models')

module.exports = {
    login : async(req, res, next) =>{
        try{
            const { username, password } = req.body

            const key_token = 'token_be_trello#'+username
            const key_user_data = username

            var token = ''
            var getCacheToken = await redisClient.get(key_token)

            if(!getCacheToken){
                const getUser = await User.findOne({
                    where: {username : username}
                })

                const passwordMatch = await bcrypt.compare(password, getUser.password);
            
                if (!passwordMatch) {
                    return response.error({}, 'Authentication failed', '01', 401, false, res)
                }

                const tokenApp = jwt.sign({ 
                    id: getUser.id,
                    username: getUser.username, 
                    email: getUser.email 
                }, config.app.jwt.secret, { expiresIn: '1h' })

                //const refreshTokenApp = jwt.sign({ username: extractDataPegawai.username, nip: extractDataPegawai.nip, email: extractDataPegawai.email }, config.app.jwt.secret)

                var result = {
                    userData: getUser,
                    token: tokenApp,
                    expired: config.app.jwt.expired,
                    // refreshToken: refreshTokenApp
                }
                //simpan di cache redis
                await redisClient.set(key_user_data, JSON.stringify(result), 3600)
                await redisClient.set(key_token, tokenApp, 3600)


                return response.ok(result, 'Success Login App', '00', 200, true, res)
            }else{
                //ambil dari redis
                token = getCacheToken
                return response.ok(token, 'Already have Token', '00', 200, true, res)
            }

           
        }catch(err){
            // console.log(err)
            next(err)
        }
    },
}

