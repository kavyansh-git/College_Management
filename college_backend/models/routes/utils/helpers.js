const jwt = require("jsonwebtoken");

exports = {};

exports.getToken = async (actorId, actor) => {

    const token = jwt.sign({identifier: actor._id} , "thisKeyIsSupposedToBeSecret");
    return token;
};

 module.exports = exports;