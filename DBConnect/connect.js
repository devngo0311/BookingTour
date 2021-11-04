const mongoose = require('mongoose');
const myDbName = "userBooking";

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/' + myDbName);
        console.log("connect succesful!!!");
    } catch (error) {
        console.log("connnect failure!!!");
    }
}
module.exports = { connect };