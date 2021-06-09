/*

+++ FOLDER STRUCTURE +++

src
│   app.js          
└───api             
└───config          
└───jobs            
└───loaders         
└───models          
└───services        
└───subscribers     
└───types      


app.js      => is the app’s entry point.

api         => has the controllers for the endpoints.

config      => has the environment variables and configuration related stuff.

jobs        => have scheduled jobs.

loaders     => have the code that runs when the app starts.

models      => have the database models.

services    => has business logic.

subscribers => have the event handlers for queues, etc.

types       => are type definitions for TypeScript projects.
*/

const express = require('express')
const apiRouter = require('./api')
const app = express()
require('dotenv').config()
const port = process.env.DB_PORT || 3306

app.use(express.json())

app.use('/api/students', apiRouter)


app.get('/', (req, res) => {
    console.log("It's working correctly.")
})

app.put('/api/students', apiRouter)

app.listen(port, () => { console.log(`Server is running on port ${port}.`)})
