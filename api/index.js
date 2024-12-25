require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const studentRouter = require('../../routes/studentRouter');

const app = express();

app.use(cors())
// app.use(
//     helmet.contentSecurityPolicy({
//         directives: {
//             defaultSrc: ["'self'"],
//             scriptSrc: ["'self'"], // Add more sources as needed
//             connectSrc: ["'self'", "http://localhost:5000", "https://quyl-dashboard-fullstack.onrender.com"], // Allow API requests to the same origin
//         },
//     })
// );
// app.use(express.static('dist'))

app.use(express.json());

app.get('/api', (request, response) => {
    response.send('Dashboard API is up and running');
});

app.use('/api/students', studentRouter);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, async () => {
//     console.log(`Server is running on the port ${PORT}`)
// })

module.exports = app;