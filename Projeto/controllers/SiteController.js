module.exports = class SiteController {
    static homepage(req, res) {
        return res.render('site/homepage')
    }
}