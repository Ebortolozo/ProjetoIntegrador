const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')

const app = express()

const conn = require("./db/conn")

// Models, aqui ele chama as funçoes de criar as tables

const Evento = require('./models/Evento')
const Planos = require('./models/Planos')
const Empresa = require("./models/Empresa")
const Cliente = require('./models/Cliente')
const Esportes = require('./models/Esportes')

// Import Routes
const AuthRoutes = require("./routes/AuthRoutes")
const SiteRoutes = require("./routes/SiteRoutes")


// Import Controllers (Unico)
const AuthController = require('./controllers/AuthController')


// template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//receber resposta do body
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

// session middleware
app.use(
    session({
        name: "session",
        secret: "segredo_projeto",
        resave: false,
        saveUninitialized: false,
        store: new FileStore({
            logFn: function () {},
            path: require('path').join(require('os').tmpdir(), 'sessions'),
        }),
        cookie: {
            secure: false,
            maxAge: 360000,
            expires: new Date(Date.now() + 360000),
            httpOnly: true
        }
    })
)

// flash messages
app.use(flash())

// public path
app.use(express.static('public'))

//set session to res
app.use((req, res, next) => {
    if (req.session.userid) {
        res.locals.session = req.session
    }

    next()
})

//routes
app.use('/', AuthRoutes)
app.use('/home', SiteRoutes)

//Conexão
app.get('/', AuthController.login)
conn
    //.sync({force: true})
    .sync()
    .then(() => {
        app.listen(3000)
    })
    .catch((err) => {
        console.log(err)
    })