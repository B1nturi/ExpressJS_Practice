const express = require('express');
const app = express();

app.use(express.raw());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/', (req, res) => {
    console.log(req.body.toString());
    res.send('Hello World from POST');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});