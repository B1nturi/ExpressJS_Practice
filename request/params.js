const express = require('express');

const app = express();

const adminRoute = express.Router();

adminRoute.get('/dashboard', (req, res) => {
    console.log(req.hostname);
    res.send('Welcome to Admin Dashboard');
});

app.use('/admin', adminRoute);

app.get('/user/:id', (req, res) => { // This route will match /user/123, /user/456, etc. 
    console.log(req.params);
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});