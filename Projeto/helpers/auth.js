//Midleware para que o cliente só possa acessar as telas se estiver logado

module.exports.checkAuth = function (req, res, next) {
    const userId = req.session.userid

    if(!userId) {
        res.redirect('/login')
    }

    next()
}