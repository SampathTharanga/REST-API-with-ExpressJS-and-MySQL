const express = require('express')
const db = require('../models')
const router = express.Router()

//GET ALL STUDENTS
router.get('/', async (req, res, next) => {
    try{
        let results = await db.all()
        res.json(results)
    } catch(e) {
        console.log(e)
    }
})

//GET STUDENTS BY ID
router.get('/:id', async (req, res, next) => {
    try{
        let results = await db.one(req.params.id)
        res.json(results)
    } catch(e) {
        console.log(e)
    }
})


//ADD NEW STUDENT
router.post('/', async (req, res, next) => {
    let data =  {
        name: req.body.name,
        university: req.body.university,
        course: req.body.course,
        city: req.body.city,
        create_at = new Date(),
        update_at = new Date()
    }
    try{
        let results = await db.addNew(data)
        res.json(results)
    } catch(e) {
        console.log(e)
    }
})



router.put('/:id', async (req, res, next) => {
    try{
        let results = await db.update(req.body, req.params.id)
        res.json(results)
    } catch(e) {
        console.log(e)
    }
})

module.exports = router