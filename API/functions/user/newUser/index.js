exports.handler = (async (event, context) => {

    if ('error' in event) {

        return sendError (error.statusCode, { message: error.message });
    }
});