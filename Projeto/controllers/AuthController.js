const Cliente = require("../models/Cliente")

const bcrypt = require('bcryptjs')

module.exports = class AuthController {
    static login(req, res) {
        res.render('auth/login')
    }

    static async loginPost(req, res) {
        
        const {login, password} = req.body

        //Encontrar usuario
        const user = await Cliente.findOne({where: {usuario: login}})

        if(!user) {
            req.flash('message', 'E-mail não cadastrado!')
            res.render('auth/login')
        }

        // Verificar se o password bate
        const passwordMatch = bcrypt.compareSync(password, user.senha)

        if(!passwordMatch) {
            req.flash('message', 'Senha inválida')
            res.render('auth/login')
        }
        
        // Inicializar Sessão
        req.session.userid = user.id
        
        req.flash('message', "Cadastro realizado com sucesso!")
        
        req.session.save(() => {
            res.redirect('/')
        })

    }

    static register(req, res) {
        res.render('auth/register')
    }

    static async registerPost(req,res) {

        const {name, email, dataNasc, tel, cep, login, password, confirmpassword} = req.body

        // validar confirmação de senha

        if(password != confirmpassword) {
            req.flash('message', 'As senhas não conferem, tente novamente!')
            res.render('auth/register')

            return
        }

        // validar email 

        const checkEmailExists = await Cliente.findOne({ where : {email: email}})

        if(checkEmailExists) {
            req.flash('message', 'O email já está em uso!')
            res.render('auth/register')

            return
        }

        //validar usuario 

        const checkLoginExists = await Cliente.findOne({ where : {usuario: login}})

        if(checkLoginExists) {
            req.flash('message', 'Login já está em uso!')
            res.render('auth/register')

            return
        }

        // create a password
        //name, email, dataNasc, tel, cep, login, password, confirmpassword

        const salt = bcrypt.genSaltSync(10)
        const hashedPassord = bcrypt.hashSync(password, salt)

        const User = {
            nome: name,
            email,
            dataNasc,
            telefone: tel,
            endereco: cep,
            usuario: login,
            senha: hashedPassord
        }

        try {
            const createdUser = await Cliente.create(User)

            // Inicializar Sessão
            req.session.userid = createdUser.id

            req.flash('message', "Cadastro realizado com sucesso!")

            req.session.save(() => {
                res.redirect('/')
            })

            
        }catch(err){
            console.log(err)
        }
    }

    static logout(req, res) {
        req.session.destroy()
        res.redirect('/login')
    }
}