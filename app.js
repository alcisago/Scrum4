import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

//CONEXION A BASE DE DATOS
const mongoose = require('mongoose');
//const uri = 'mongodb://localhost:27017/registro';

const uri = 'mongodb+srv://alcisago:Mati5030*@cluster0.fqohr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(uri, options).then(
    () => {
        console.log('Conectado a DB')
    },
    err => { console.log(err) }
);


//MIDDLEWARE
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


//ruta
//app.get('/', function(req,res){
//    res.send('Hola mundo');
//});

app.use('/api', require('./routes/inscripcion'));


const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));


//puerto


app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
    console.log('Example app listening on port'+ app.get('puerto'));
});