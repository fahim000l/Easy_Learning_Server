const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;
app.use(cors());

const course_category = require('./Data/category.json');
const courses = require('./Data/course.json');

app.get('/', (req, res) => {
    res.send('Self Learning');
});

app.get('/course_category', (req, res) => {
    res.send(course_category);
});
app.get('/courses', (req, res) => {
    res.send(courses);
});
app.get('/course_category/:id', (req, res) => {
    const id = req.params.id;
    if (id == 7) {
        res.send(courses)
    }
    else {

        const selectedCategory = courses.filter(course => course.category_id == id);
        res.send(selectedCategory);
    }
});
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(course => course._id == id);
    res.send(selectedCourse);
})

app.listen(port, () => {
    console.log('Self Learning is running on port :', port);
})