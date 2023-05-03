import express from 'express';
import bodyParser from "body-parser";

import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) => {
    response.send('Hi there');
});

app.post('/sms', (req, res) => {
    console.log(req)
    console.log(req.body)
    res.sendStatus(200);
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Listen on the port 3000...');
});