const express = require('express');
const path = require('path');

// inicializacion
const app = express();

// configuracion

app.set('port', process.env.PORT || 5000);
app.set('views',path.join(__dirname + 'views'));

// modulos
app.use(express.urlencoded({extended:false}));
// variables globales

// rutas

app.get('/', (req,res) => {
    res.send('Hola mundo');
});

// archivos estaticos
app.use(express.static(path.join(__dirname + 'public')));

module.exports = app;

