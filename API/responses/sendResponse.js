function sendResponse (statusCode, body) {

    return {
      statusCode: statusCode,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          success: true,
          body: body
        }
      )
    };
  }
  
module.exports = { sendResponse }