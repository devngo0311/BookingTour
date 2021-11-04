class control {
    index = (req, res, next) => {
        return res.render('index');
        // return res.redirect("/tour/home");
    }
}
module.exports = new control;