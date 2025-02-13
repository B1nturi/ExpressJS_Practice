const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views')); // Ensure views are in the 'views' folder

app.get('/', (req, res) => {
    res.render('index', { title: 'Express HTML Page', message: 'This page is rendered using EJS' });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
