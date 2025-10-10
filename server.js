//Importing 
import express from 'express'
import stations from './data/stations.js';
import bodyParser from 'body-parser';
const port = 3000;

const app = express();

app.use(bodyParser.json());

//GET example
app.get('/stations', (req, res) => {
    res.json(stations);
})

//POST example
app.post('/stations', (req, res) => {
    stations.push(req.body);
    res.json(stations);
})

//PATCH example
app.patch('/stations/:updates', (req, res) => {
    stations[req.params.updates] = req.body;
    res.json(stations);
})

//DELETE example
app.delete('/stations/:updates', (req, res) => {
    data.splice(req.params.updates, 1);
    res.json(stations);
})


app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`);
});
 