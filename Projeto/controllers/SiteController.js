module.exports = class SiteController {
    static homepage(req, res) {
        res.render('site/homepage')
    }
}