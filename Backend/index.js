//Crear el Servidor
const express = require('express');
const app = express();

// Elegimos el puerto por el que va a escuchar el servidor
const port = 8080;
app.listen(port);

// Configuraciones Servidor
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
const cors = require('cors');
app.use(cors());
app.use(express.json());

//Conectar a la base de datos
const connectDataBase = require('./config/database');
connectDataBase();

// Routes
app.use('/api/user', require('./routes/user.route'));


// Hasta aqui hemos organizado
app.use('/index', (req, res) => {
    res.status(200).send(`Listenning on port ${port}`);
    console.log(`Listenning on port ${port}`); 
});
app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

