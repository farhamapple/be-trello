const requestClientPost = async (url, postData, headersCustom={}) => {
    
    let result = {}

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...headersCustom
            },
            body: JSON.stringify(postData)
        })    

        if(!response.ok)
        {
            result = {
                statusCode : response.status,
                body : response.statusText
            }

            return result
        }

        const data = await response.json();

        result = {
            statusCode : response.status,
            body : data
        }

        return result

    } catch (error) {
        result = {
            error : true,
            body : error
        }
        // console.log(error)

        return result
    }
    

}

const requestClientGet = async (url, headersCustom={}) => {
    let result = {}

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...headersCustom
            }
        })    

        if(!response.ok)
        {
            result = {
                statusCode : response.status,
                body : response.statusText
            }

            return result
        }

        const data = await response.json();

        result = {
            statusCode : response.status,
            body : data
        }

        return result

    } catch (error) {
        result = {
            error : true,
            body : error
        }
        console.log(error)
    }
}

module.exports = {
    requestPost : requestClientPost,
    requestGet : requestClientGet,
}