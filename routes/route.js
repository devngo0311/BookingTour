const controller = require('../controllers/controller');
const controllerIndex = require('../controllers/Indexcontroller');
const booking = require('../controllers/bookingController');
const admin = require('../controllers/adminController');

function route(app) {
    // defaul page
    app.get('/', controllerIndex.index);
    // user route
    app.get('/login', controller.login);
    app.get('/register', controller.register);
    app.post('/register', controller.authRegister);
    app.post('/login', controller.authLogin);
    app.get('/booking', controller.authCookies);
    app.get('/profile', controller.authProfile);
    //booking route
    app.get('/weltobooking', booking.booking);
    // admin route
    app.get('/loginAdmin', admin.login);
    app.post('/loginAdmin', admin.authLoginAdmin);
    app.get('/registerAdmin', admin.register);
    app.post('/registerAdmin', admin.authRegister);
    app.get('/adminpage', admin.authCookies);
};
module.exports = route;