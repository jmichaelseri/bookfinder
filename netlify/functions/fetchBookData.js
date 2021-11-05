const axios = require('axios')

const handler = async (event, context) => {
    const { searchTerm } = event.queryStringParameters
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${process.env.REACT_APP_API_KEY}`
    try {
        axios.get(apiUrl)
    } catch(error){
        const { status, statusText, headers, data } = error.response
        return {
            statusCode: status,
            body: JSON.stringify({ status, statusText, headers, data })
        }
    }
}

module.exports = { handler }
