
const mongoose = require('mongoose');

const dataBase = () => {
    return mongoose.connect(process.env.MONGO_DB_STR);
}
module.exports = dataBase;