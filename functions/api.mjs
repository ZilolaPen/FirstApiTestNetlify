import express from 'express';
import bodyParser from 'body-parser';
import ServerlessHttp from 'serverless-http';

const port = 3000;
const data=[{"name": "John", "surname": "Doe"}]
const app = express();
app.use(bodyParser.json());
app.get('/getAllUsers', (req, res) => { 
    res.json(data);
})
app.post('/addUser', (req, res) => { 
    data.push(req.body);
    res.send("User added successfully");
})
export const handler = ServerlessHttp(app)

