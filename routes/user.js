const controller = require('../controllers/controller');
const controllerIndex = require('../controllers/Indexcontroller');
const booking = require('../controllers/bookingController');
const express = require('express');
const router = express.Router();

// defaul page
router.get('/home', controllerIndex.index);
router.get('/about', controllerIndex.about);
router.get('/tours', controllerIndex.tour);
router.get('/contact', controllerIndex.contact);
// user route
router.get('/login', controller.login);
router.get('/register', controller.register);
router.post('/register', controller.authRegister);
router.post('/login', controller.authLogin);
router.get('/booking', controller.authCookies);
router.get('/profile', controller.authProfile);
//booking route
//router.get('/weltobooking', booking.booking);
module.exports = router;