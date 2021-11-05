const express = require('express');
const router = express.Router();
const admin = require('../controllers/adminController');

// admin route
router.get('/loginAdmin', admin.login);
router.post('/loginAdmin', admin.authLoginAdmin);
router.get('/registerAdmin', admin.register);
router.post('/registerAdmin', admin.authRegister);
router.get('/adminpage', admin.authCookies);
//CRUD 
router.get('/adminpage/addtour', admin.tourManager);

module.exports = router;