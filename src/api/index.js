const express = require('express')
const db = require('../models')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try{
        let results = await db.all()
        res.json(results)
    } catch(e) {
        console.log(e)
    }
})


router.get('/:id', async (req, res, next) => {
    try{
        let results = await db.one(req.params.id)
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