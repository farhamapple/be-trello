responseResult = (data, isError = false, message, appCode='00', httpCode=200, fromChace, res) => {
    var result = {
        'code' : appCode,
        'status' : httpCode,
        'error' : isError,
        'message': message,
        'data': data,
        'fromCache' : fromChace
    };
    res.status(httpCode).json(result)
    res.end()
}

exports.ok = (data, message, statusCode='00', httpCode=200, fromCache=false,  res) => 
    responseResult(data, false, message, statusCode, httpCode, fromCache, res )

exports.error = (data=[], errorMessage, statusCode, httpCode, fromCache=false, res ) => 
    responseResult(data, true, errorMessage, statusCode, httpCode, fromCache, res )