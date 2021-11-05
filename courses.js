const express = require('express')
const router = express.Router()
const db = require("../createDb")
const coursedata = require('../controller/courseControl.js')

router.get('/',coursedata.getCourses)
router.get('/:id',coursedata.getCourseById)
router.post('/',coursedata.createCourse)
router.delete('/:id',coursedata.deleteCourse)
router.put('/:id',coursedata.updateCourse)
module.exports = router 