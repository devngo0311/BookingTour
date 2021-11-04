const tour = require("../models/tour");

exports.getTour = (req, res) => {
    console.log(req.body)
    tour.find((err, tourData) => {
        if (err) {
            res.json({ msg: "error" });
        } else {
            res.json({ msg: "success", data: tourData });
        }
    });
}
exports.addTour = (req, res) => {
    console.log(req.body);
    var tours = new tour({
        tourName: req.body.tourName,
        tourDescription: req.body.tourDescription,
        tourDuration: req.body.tourDuration,
        tourDeparture: req.body.tourDeparture,
        tourTransportation: req.body.tourTransportation,
        tourImages: req.body.tourImages,
        tourDetail: req.body.tourDetail
    });
    tour.create(tours, (err, tourData) => {
        if (err) {
            console.log(err);
            res.json({ msg: "error" });
        } else {
            res.json({ msg: "success", data: tourData });
        }
    });
}
exports.removeTour = (req, res) => {
    tour.findByIdAndRemove(req.params.id, (err, tourData) => {
        if (err) {
            res.json({ msg: "error" });
        } else {
            res.json({ msg: "success", data: tourData });
        }
    });
}
exports.updateTour = (req, res) => {
    tour.findByIdAndUpdate(req.params.id, req.body, (err, tourData) => {
        if (err) {
            res.json({ msg: "error" });
        } else {
            res.json({ msg: "success", data: tourData });
        }
    });
}
exports.findTour = (req, res) => {
    tour.findById(req.params.id, (err, tourData) => {
        if (err) {
            res.json({ msg: "error" });
        } else {
            res.json({ msg: "success", data: tourData });
        }
    });
}