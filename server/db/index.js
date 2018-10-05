const db = require('./db.js');

module.exports = {
    connect: db.connect,
    objectId: db.objectId
};
