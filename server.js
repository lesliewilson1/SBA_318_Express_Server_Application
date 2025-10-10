import express from 'express'
import stations from './data/stations.js';
import bodyParser from 'body-parser';
const port = 3000;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json(stations);
})

app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`);
});
 