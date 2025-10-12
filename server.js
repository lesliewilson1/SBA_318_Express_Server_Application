//Importing 
import express from 'express';
import stations from './data/stations.js';
import cors from 'cors';
import bodyParser from 'body-parser';
const port = 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.set('view engine', 'pug');
app.use(express.static('public'));


//Homepage using Pug
app.get('/', (req, res) => {
    res.render('index', {title: "Rock Stations Across the USA", message: "Rock Stations Across the USA"});
});

//GET example
app.get('/stations', (req, res) => {
    res.json(stations);
});

//POST example
app.post('/stations', (req, res) => {
    stations.push(req.body);
    res.json(stations);
});

//PATCH example
app.patch('/stations/:updates', (req, res) => {
    stations[req.params.updates] = req.body;
    res.json(stations);
});

//DELETE example
app.delete('/stations/:updates', (req, res) => {
    data.splice(req.params.updates, 1);
    res.json(stations);
});

app.use((err, req, res, next) => {
    res.status(500).send('OOPs!');
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`);
});
 