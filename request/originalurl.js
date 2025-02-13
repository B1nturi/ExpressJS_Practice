const express = require('express');

const app = express();

const adminRoute = express.Router();

adminRoute.get('/dashboard', (req, res) => {
    console.log(req.originalUrl);
    console.log(req.url);
    res.send('Welcome to Admin Dashboard');
});

app.use('/admin', adminRoute);

app.get('/', (req, res) => {
    console.log(req.originalUrl);
    console.log(req.url);
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});