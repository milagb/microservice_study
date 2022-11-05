const express = require ('express');
const app = express();

app.post('/notes/:id/observations', (req, res) => {

});

app.get('/notes/:id/observations', (req, res) => {

});

app.listen(5000, (() => {
    console.log('Observations. Port 5000');
}))