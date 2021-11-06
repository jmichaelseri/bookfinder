// const axios = require('axios')

// const handler = async (event) => {
//   const {queryTerm} = event.queryStringParameters.queryTerm
//   const API_ENDPOINT = `https://www.googleapis.com/books/v1/volumes?q=${queryTerm}&key=${process.env.REACT_APP_API_KEY}`
//   try {
//     const { data }  = await axios.get(API_ENDPOINT)
//     return {
//       statusCode: 200,
//       body: JSON.stringify(data)
//     }
//   } catch (error) {
//     const { status, statusText, headers, data} = error.response
//     return {
//       statusCode: status,
//       body: JSON.stringify({ status, statusText, headers, data})
//     }
//   }
// }

// module.exports = { handler }
