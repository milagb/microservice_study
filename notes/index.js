const express = require ('express');
const app = express();

const notes = {};

app.get ('/notes', (req, res) => {
    res.send(notes);

});

app.post('/notes', (req, res) => {

});

app.listen(4000, () => {
    console.log('Notes. Port 4000');
})