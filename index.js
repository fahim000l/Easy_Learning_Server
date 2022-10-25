const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;
app.use(cors());

const course_category = require('./Data/category.json');
conat courses = require('./Data/course.json');

app.get('/', (req, res) => {
    res.send('Self Learning');
});

app.get('/course_category', (req, res) => {
    res.send(course_category);
});

app.listen(port, () => {
    console.log('Self Learning is running on port :', port);
})