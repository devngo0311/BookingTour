exports.index = (req, res, next) => {
    return res.render('index');
    // return res.redirect("/tour/home");
}
exports.about = (req, res, next) => {
    return res.render('about');
    // return res.redirect("/tour/home");
}
exports.tour = (req, res, next) => {
    return res.render('tours');
    // return res.redirect("/tour/home");
}
exports.contact = (req, res, next) => {
    return res.render('contact');
    // return res.redirect("/tour/home");
}