class control {
    booking = (req, res, next) => {
        return res.render('booking');
    }
}
module.exports = new control;