const usermodel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const accessTokenSecret = process.env.SECRETKEY;
const secret = 'TamNgo';

//body code
//get
exports.login = (req, res) => {
    res.render('login');
};
//get
exports.register = (req, res) => {
    res.render('register');
};

//get
exports.authCookies = (req, res) => {
    try {
        var token = req.cookies.token;
        jwt.verify(token, secret, (err, data) => {
            if (err) {
                return res.redirect("/user/login");
            } else {
                res.render('booking');
            }
        })
    } catch (error) {
        return res.render("views/Error404");
    }
};
//get
exports.authProfile = (req, res) => {
    try {
        var token = req.cookies.token;
        jwt.verify(token, secret, (err, data) => {
            console.log(data);
            if (err) {
                return res.redirect("/user/login");
            } else {
                res.render('profileUser', { data: data });
            }
        })
    } catch (error) {
        return res.render("views/Error404");
    }
};
//post
exports.authLogin = async(req, res) => {
    try {
        var username = req.body.username.toLowerCase() || "test";
        var password = req.body.password || "@@";
        await find_user({ username }, async(err, user) => {
            if (err) {
                res.status(402).json({ msg: "error" + err });
            } else {
                if (user) {
                    var id = user.id;
                    var validPassword = await bcrypt.compare(password, user.passWord);
                    if (validPassword) {
                        var token = await jwt.sign({ id }, secret, { expiresIn: 60 * 90 })
                        res.status(200).json({ message: "Valid password", token: token });
                    } else {
                        res.status(400).json({ message: "Invalid Password" });
                    }
                } else {
                    res.status(401).json({ message: "User does not exist" });
                }
            }
        });
    } catch (error) {
        res.status(500).json({ msg: "error" + error });
    }

};
//post
exports.authRegister = async(req, res) => {
    try {
        var salt = await bcrypt.genSalt(10);
        var username = req.body.username;
        var users = new usermodel({
            userName: req.body.username,
            passWord: await bcrypt.hash(req.body.password, salt),
            full_name: req.body.full_name,
            sdt: req.body.sdt,
            email: req.body.email
        });
        await find_user({ username }, async(err, user) => {
            if (err) {
                res.status(500).json({ msg: "error" + err });
            } else {
                if (user) {
                    res.status(400).json({ msg: "User exist" });
                } else {
                    await createUser(users, (err, userData) => {
                        if (err) {
                            res.status(500).json({ msg: "error" });
                        } else {
                            res.status(200).json({ msg: "Success" });
                        }
                    });
                }
            }
        });
    } catch (error) {
        res.status(500).json({ msg: "error" + error });
    }

};



createUser = (g_user, callback) => {
    g_user.save((err, result) => {
        if (err) callback(err, null);
        else {
            callback(null, result);
        }
    })
};

find_user = ({ username }, callback) => {
    usermodel.findOne({ userName: username }, (err, result) => {
        if (err) callback(err, null);
        else {
            callback(null, result);
        }
    })
};