const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Vui long nhap username"],
        trim: true,
    },
    passWord: {
        type: String,
        required: [true, "Vui long nhap password"],
        trim: true,
    },
    full_name: {
        type: String,
        // required: [true, "Vui long nhap ten"],
    },
    sdt: {
        type: String,
        required: [true, "Vui long nhap so dien thoai"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Vui long nhap dia chi mail"],
        trim: true,
    },
});

const usermodel = mongoose.model("user", userSchema);
module.exports = usermodel;











// module.exports.createUser = (g_user, callback) => {
//     g_user.save((err, result) => {
//         if (err) callback(err, null);
//         else {
//             callback(null, result);
//         }
//     })
// };

// module.exports.find_user = ({ username }, callback) => {
//     model.findOne({ userName: username }, (err, result) => {
//         if (err) callback(err, null);
//         else {
//             callback(null, result);
//         }
//     })
// };