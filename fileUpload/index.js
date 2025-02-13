const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// file upload folder
const uploadFolder = 'uploads/';

// define storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadFolder);
    },
    filename: (req, file, cb) => {
        // Important file.pdf => file-1234567890.pdf
        const fileExt = path.extname(file.originalname);
        const fileName = file.originalname.replace(fileExt, '').toLowerCase().split(' ').join('-');
        cb(null, `${fileName}-${Date.now()}${fileExt}`);
    },
});

// prepare the final multer upload object
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000 // 1MB
    },
    fileFilter(req, file, cb) {
        if (
            file.mimetype === 'image/jpg' ||
            file.mimetype === 'image/jpeg' ||
            file.mimetype === 'image/png'
        ) {
            cb(null, true);
        } else {
            cb(new Error('Please upload an image. Supported formats: JPG, JPEG, PNG'));
        }
    },
});

// application route
app.post('/', upload.fields('file'), (req, res) => {
    res.send('Hello World');
});

// application route
// app.post("/", upload.fields([
//     { name: "file", maxcount: 1 }]
// ), (req, res) => {
//     res.send("Hello World");
// });

// error handling
app.use((error, req, res, next) => {
    if (error) {
        if (error instanceof multer.MulterError) {
            res.send('A Multer error occurred when uploading.');
        } else {
            res.send(error.message);
        }
    } else {
        res.send('Success');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});