var bodyParser = require('body-parser')
const express = require ('express');

const app = express();
app.use(bodyParser.json())


const notes = {};
count = 0;

app.get ('/notes', (req, res) => {
    res.send(notes);
});

app.post('/notes', (req, res) => {
    count++;
    const { text } = req.body;
    notes[count] = {
        count, text
    };

    res.status(201).send(notes[count]);    
});

app.listen(4000, () => {
    console.log('Notes. Port 4000');
})