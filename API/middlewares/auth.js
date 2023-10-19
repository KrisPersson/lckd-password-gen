const jwt = require ('jsonwebtoken');

const jwtKey = 'Sockervadd'

const validateJWT = {

    before: async (req) => {

        try {

            const token = req.event.headers.authorization.replace('Bearer ', '');
            let isVerified;

            if (!token) {

                throw new Error();
            }
            else {

                jwt.verify ('token', jwtKey, function (err, decoded) {

                    if (decoded == undefined) isVerified = false;
                    else isVerified = true;
                });

                return isVerified;
            }
        }
        catch (error) {

            req.event.error = error.message;

            return req.response;
        }
    },
    onError: async (req) => {

        req.event.error = '401';

        return req.response;
    }
}

module.exports = { validateJWT }