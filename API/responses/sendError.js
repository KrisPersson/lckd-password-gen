function sendError (statusCode, error) {

    return {
      statusCode: statusCode,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          success: false,
          body: error
        }
      )
    };
  }
  
module.exports = { sendError }