const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId
const config = require('./../config/nnz_form_config.js');

const db = {
    async connect() {
        try {
            const client = await MongoClient.connect(url)
            const db = client.db('nnzForm');
            console.log('Успешно соеденились')
            return {client, db};
        }
        catch(e) {
            return Promise.reject(new Error('Ошибка соединения с базой данных'));
        }
    },

    //Возвращант objectId
    objectId(id) {
        return new ObjectId(id);
    }
}

module.exports = db;
