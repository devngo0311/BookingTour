const booking = require("../models/booking");

exports.getBooking = (req, res) => {
    console.log(req.body)
    booking.find((err, bookingData) => {
        if (err) {
            res.json({ msg: "error" });
        } else {
            res.json({ msg: "success", data: bookingData });
        }
    });
}
exports.addBooking = (req, res) => {
    console.log(req.body);
    var bookings = new tour({
        user_id: req.body.user_id,
        tour_id: req.body.tour_id,
        dateDeparture: req.body.dateDeparture,
        adult: req.body.adult,
        payment: req.body.payment,
        children: req.body.children,
        total: req.body.total,
    });
    booking.create(bookings, (err, bookingData) => {
        if (err) {
            console.log(err);
            res.json({ msg: "error" });
        } else {
            res.json({ msg: "success", data: bookingData });
        }
    });
}
exports.removeBooking = (req, res) => {
    booking.findByIdAndRemove(req.params.id, (err, bookingData) => {
        if (err) {
            res.json({ msg: "error" });
        } else {
            res.json({ msg: "success", data: bookingData });
        }
    });
}
exports.updateBooking = (req, res) => {
    booking.findByIdAndUpdate(req.params.id, req.body, (err, bookingData) => {
        if (err) {
            res.json({ msg: "error" });
        } else {
            res.json({ msg: "success", data: bookingData });
        }
    });
}
exports.findBooking = (req, res) => {
    booking.findById(req.params.id, (err, bookingData) => {
        if (err) {
            res.json({ msg: "error" });
        } else {
            res.json({ msg: "success", data: bookingData });
        }
    });
}