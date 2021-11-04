const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Vui long nhap username"],
        trim: true,
    },
    password: {
        type: String,
        required: [true, "Vui long nhap password"],
        trim: true,
    },
    full_name: {
        type: String,
    },
});

const adminmodel = mongoose.model("admin", userSchema);
module.exports = adminmodel;