require('dotenv').config();

'use strict'

//const base_url_api = process.env.BRIN_API_URL || 'http://localhost';

let app = {
    name : process.env.APP_NAME || 'Express Nodejs',
    port : process.env.APP_PORT || '3000',
    env : process.env.APP_ENV || 'development',
    base_url : process.env.APP_URL || 'http://localhost',
    front_url : process.env.APP_FRONT_URL || 'http://localhost',
    version : process.env.APP_VERSION || '0.0.1',
    // sso_client_id : process.env.BRIN_SSO_CLIENT_ID || 'demo',
    // sso_client_secret : process.env.BRIN_SSO_CLIENT_SECRET || 'secret',
    per_page : process.env.APP_PER_PAGE || 10,
    log_level: process.env.APP_LOG_LEVEL || 'info',
    cache:{
        driver : process.env.CACHE_DRIVER || '',
        prefix: process.env.CACHE_PREFIX || 'anythink',
        host : process.env.CACHE_HOST || '0',
        port : process.env.CACHE_PORT || '0',
        password : process.env.CACHE_PASSWORD || '',
    },
    jwt : {
        secret : process.env.JWT_SECRET || 'yoursecretkey',
        expired : process.env.JWT_EXPIRED_TIME || '60'
    },
    api : {
        key : process.env.API_KEY,
    },
    // api_integrated : {
    //     // base_url :  process.env.BRIN_API_URL || 'localhost',
    //     cek_login : base_url_api + '/sso/user/me',
    //     url_sso_token : base_url_api + '/oauth2/token',
    //     url_cek_login : base_url_api + '/sso/user/me',
    //     url_detail_pegawai : base_url_api + '/hrms/pegawai/index?active=true&'
    // }
}

module.exports = {
    app : Object.freeze(app)
}