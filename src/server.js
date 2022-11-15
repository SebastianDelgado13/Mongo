const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// inicializacion
const app = express();

// configuracion

app.set('port', process.env.PORT || 5000);
app.set('views',path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultlayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir:  path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// modulos
app.use(express.urlencoded({extended:false}));
// variables globales

// rutas

app.get('/', (req,res) => {
    res.render('index')
});

// archivos estaticos
app.use(express.static(path.join(__dirname + 'public')));

module.exports = app;

