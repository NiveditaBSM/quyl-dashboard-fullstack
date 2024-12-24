const express = require('express');
const studentController = require('../studentController');
const studentRouter = express.Router();

studentRouter.get('/', studentController.getStudents);
studentRouter.post('/', studentController.addStudent);
module.exports = studentRouter;