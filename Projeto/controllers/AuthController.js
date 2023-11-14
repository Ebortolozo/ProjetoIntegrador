const Cliente = require("../models/Cliente");
const bcrypt = require('bcryptjs');

module.exports = class AuthController {
    // Método para renderizar a página de login
    static login(req, res) {
        res.render('auth/login');
    }

    // Método para processar o login
    static async loginPost(req, res) {
        const { login, password } = req.body;

        try {
            const user = await Cliente.findOne({ where: { usuario: login } });

            //Verifica existencia do login
            if (!user) {
                req.flash('message', 'Login não cadastrado!');
                return res.render('auth/login');
            }

            //Confere a senha enviada com a senha do banco de dados
            const passwordMatch = bcrypt.compareSync(password, user.senha);

            if (!passwordMatch) {
                req.flash('message', 'Senha inválida');
                return res.render('auth/login');
            }

            req.session.userid = user.id;
            req.flash('message', "Login realizado com sucesso!");
            req.session.save(() => {
                res.redirect('/home');
            });
        } catch (err) {
            console.error(err);
            res.status(500).send("Erro interno do servidor");
        }
    }

    // Método para renderizar a página de registro
    static register(req, res) {
        res.render('auth/register');
    }

    // Método para processar o registro
    static async registerPost(req, res) {
        const { name, email, dataNasc, tel, cep, login, password, confirmpassword } = req.body;

        //Verifica se a senha e a confirmação batem
        if (password != confirmpassword) {
            req.flash('message', 'As senhas não conferem, tente novamente!');
            return res.render('auth/login');  
        }

        //Verificar se ja tem um email cadastrado, e manda um flash message(Caso True)
        const checkEmailExists = await Cliente.findOne({ where: { email: email } });
        if (checkEmailExists) {
            req.flash('message', 'O email já está em uso!');
            return res.render('auth/login');  
        }

        // Verifica se ja tem um cliente com um login igual
        const checkLoginExists = await Cliente.findOne({ where: { usuario: login } });
        if (checkLoginExists) {
            req.flash('message', 'Login já está em uso!');
            return res.render('auth/login');  
        }

        //Criptografia de Senha
        const salt = bcrypt.genSaltSync(10);
        const hashedPassord = bcrypt.hashSync(password, salt);

        const User = {
            nome: name,
            email,
            dataNasc,
            telefone: tel,
            endereco: cep,
            usuario: login,
            senha: hashedPassord
        };

        try {
            const createdUser = await Cliente.create(User);
            req.session.userid = createdUser.id;
            req.flash('message', "Cadastro realizado com sucesso!");
            req.session.save(() => {
                res.redirect('/');
            });
        } catch (err) {
            console.error(err);
            res.status(500).send("Erro interno do servidor");
        }
    }

    // Método para realizar o logout
    static logout(req, res) {
        req.session.destroy();
        res.redirect('/login');
    }
};
