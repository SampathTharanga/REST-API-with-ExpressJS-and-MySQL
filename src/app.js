






























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
const app = express()