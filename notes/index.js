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
    // console.log(text);
    // console.log({text});
    // console.log({text, text});

    // let num = 12;
    // let binario = true;
    // let str = "string"

    let data = {
        num: 1,
        binario: true,
        str: "joao",
        obj: {cacete: "em pé"}
    };

    // let { num, binario, str } = data;
    let num = data.num;
    // let text = req.body.text;
    let { obj } = data;
    let { cacete } = data.obj;

    console.log(num);
    console.log(obj);
    console.log(cacete);

    // console.log(binario);
    // console.log(str);


    res.status(201).send(notes[count]);    
});

app.listen(4000, () => {
    console.log('Notes. Port 4000');
})