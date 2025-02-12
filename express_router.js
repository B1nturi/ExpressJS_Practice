const express = require('express');
const app = express();

const router = express.Router(
    {caseSensitive: true}
);

app.use(router);

router.get('/about', (req, res) => {
    res.send('Hello World');
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('Hello World from POST');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});