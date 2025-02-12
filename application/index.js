const express = require('express');
const handle = require('../handle');

const app = express();

app.locals.title = 'My App';

app.get('/', handle);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});