const express = require('express');
const router = express.Router();
const tourCtrl = require('../controllers/tourController');

router.get('/home', tourCtrl.getTour);
router.post('/add', tourCtrl.addTour);
router.delete('/delete/:id', tourCtrl.removeTour);
router.put('/update/:id', tourCtrl.updateTour);
router.get('/find/:id', tourCtrl.findTour);

module.exports = router;