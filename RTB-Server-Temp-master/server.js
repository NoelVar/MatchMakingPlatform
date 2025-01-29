import express from 'express';
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from 'url';
//NOTE: ADDED CORS FOR FRONTEND
import cors from 'cors';

import { logger } from './middleware/midwAppLogger.js';
import { errorHandler } from './middleware/midwAppErrorHandler.js';
import { notFound } from './middleware/midwAppNotFound.js';

import { routerIndex } from './routes/routerIndex.js';


// Get the directory name----------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// NOTE: ADDED CORS FOR FRONTEND
app.use(cors({
    origin: 'http://localhost:3000',  // SET ORIGIN TO FRONTEND URL ROOT
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
    exposedHeaders: ['Content-Range', 'X-Content-Range'],
    credentials: false 
}));

// Body parser middleware-----------
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Configure session middleware-----
app.use(
    session({
        secret: process.env.SESSION_SECRET_KEY294, // Replace with a secure secret key
        resave: false, // Prevent session from being saved back to the store if unmodified
        saveUninitialized: true, // Save uninitialized sessions
        cookie: { secure: false, maxAge: 60000 }, // For HTTPS, set secure: true
    })
);

//SESSIONS LIST---------------
//req.session.uid = uid;
//req.session.uname = un;
//req.session.uType = uType;



// Logger middleware---------
app.use(logger);


// setup static folder-------
//app.use(express.static(path.join(__dirname, 'public')));


// Router index-------------
app.use('/api', routerIndex);


// Error handler------------
app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
