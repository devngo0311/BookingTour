const mongoose = require('mongoose');
const myDbName = "bookingTourBD";

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/' + myDbName);
        console.log("connect succesfuly!!!");
    } catch (error) {
        console.log("connnect failure!!!");
    }
}
module.exports = { connect };