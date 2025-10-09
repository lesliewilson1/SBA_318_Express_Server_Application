import express from 'express'

const app = express();

const port = 1025;

app.get('/', (req, res) => {
    res.send('Hi');
})

app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`);
});
 