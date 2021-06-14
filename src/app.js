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


/**
 * =================================================================
 
src
 │ app.js # App Entry
 └───api # Express route controllers for all the endpoints of the app
 └───config # Environment variables are configuration related
 └───jobs # Task Scheduling Definition for agenda.js
 └───loaders # Split the startup process into modules
 └───models # database model
 └───services # All business logic should be here
 └───subscribers # Event handler for asynchronous tasks
 └───types # Type declaration file for Typescript (d.ts)
 
 * =================================================================
 */

const express = require('express')
const apiRouter = require('./api')
const bodyParser = require('body-parser')

require('dotenv').config()


const app = express()
const port = process.env.DB_PORT || 3306

//app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.use('/api/students', apiRouter)


//DEFINE ROOT ROUTE
app.get('/', (req, res) => {
    console.log("It's working correctly.")
})

//LISTEN TO THE PORT
app.listen(port, () => { console.log(`Server is running on port ${port}.`)})
