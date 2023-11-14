//Midleware para que o cliente já logado não possa logar e registrar denovo

module.exports.checkInvAuth = function (req, res, next) {
    const userId = req.session.userid

    if(userId) {
        res.redirect('/home')
    }

    next()
}