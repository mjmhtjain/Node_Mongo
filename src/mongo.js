const MongoClient = require('mongodb').MongoClient;

const HOST = process.env.MONGO_HOST || "localhost";
const PORT = process.env.MONGO_PORT || "8989";
const USERNAME = process.env.MONGO_USER || "USER";
const PASSWORD = process.env.MONGO_PASSWORD || "PASSWORD";
const DB = process.env.MONGO_DB || "DB";


const url = `mongodb://${USERNAME}:${PASSWORD}@${HOST}:${PORT}/?ssl=true`;
let dbConnection = undefined;

const connect = () => {

    return MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(connection => {
            dbConnection = connection;
            return connection.db(DB);
        })
        .catch(err => {
            console.log(`Connection error occured: ${err}`);
        })
}

const close = () => {

    if (dbConnection) {
        dbConnection.close()
            .then(() => {
                console.log(`Mongo Connection Closed`);
                dbConnection = undefined;
            })
            .catch(err => {
                console.log(`Mongo Close Connection throwed an error: ${err}`);
            })
    }
}

module.exports = {
    connect,
    close
}
