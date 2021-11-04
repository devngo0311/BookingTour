const controller = require('../controllers/controller');
const controllerIndex = require('../controllers/Indexcontroller');
const booking = require('../controllers/bookingController');
const admin = require('../controllers/adminController');
const express = require('express');
const router = express.Router();

// defaul page
router.get('/home', controllerIndex.index);
// user route
router.get('/login', controller.login);
router.get('/register', controller.register);
router.post('/register', controller.authRegister);
router.post('/login', controller.authLogin);
router.get('/booking', controller.authCookies);
router.get('/profile', controller.authProfile);
//booking route
//router.get('/weltobooking', booking.booking);
// admin route
router.get('/loginAdmin', admin.login);
router.post('/loginAdmin', admin.authLoginAdmin);
router.get('/registerAdmin', admin.register);
router.post('/registerAdmin', admin.authRegister);
router.get('/adminpage', admin.authCookies);

module.exports = router;