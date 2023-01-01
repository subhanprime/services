
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json())
require('./database/connection.js')
const customer = require('./customer.controllers.js')
app.get('/', (req, res) => {
    console.log('main page server')
    res.send('hello world')
})

app.post('/customer', customer.createCutomer)
app.get('/customerAll', customer.findAllCutomer);
app.get('/oneUserwithTweets', customer.oneUserwithTweets);
app.post('/postCreator', customer.postCreatorfn)
// oneUserwithTweets
app.listen(4000, () => {
    console.log("server listen on port 4000")
})