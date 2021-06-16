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
    try{
        let values = [
            req.body.name,
            req.body.university,
            req.body.course,
            req.body.city,
            new Date(),
            new Date()
        ]
        let results = await db.addNew([values])
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