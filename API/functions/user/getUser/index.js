const jwt = require ('jsonwebtoken');

const { sendResponse } = require ('./../../../responses/sendResponse');
const { sendError } = require ('./../../../responses/sendError');

const encrypt = require ('./../../../encryption/encrypt');

const { ddb } = require ('./../../../services/ddb');

exports.handler = (async (event, context) => {

    const { username, password } = event.body;

    try {

        const data = await ddb.get ({
            TableName: 'users',
            Key: {
                username: username
            }
        }).promise();
        console.log(data)

        if (data.Item === undefined) {

            return sendResponse (200, { message: "Användaren finns inte" });
        }

        //TODO: Verifiera lösenord
        else {

            const token = jwt.sign(
                { id: data.Item.userId },
                'Sockervadd', 
                { expiresIn: '2h' });

            return sendResponse (200, { message: "Inloggad", username: username, userId: data.Item.userId, token: token });
        }
    }
    catch (error) {

        return sendError (400, { message: error.message });
    }
});