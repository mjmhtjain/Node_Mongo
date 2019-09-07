const mongo = require('./mongo');

const fetchAll = async () => {

    try {
        const db = await mongo.connect();
        const query = {};

        return db.collection("contact")
            .find(query)
            .toArray();
    } catch (error) {
        console.log(`Encountered some error : ${error}`);
        return error;
    }

}

module.exports = {
    fetchAll
}