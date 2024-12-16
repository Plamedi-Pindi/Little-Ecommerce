require('dotenv').config(); // Load variable from .env file
const express = require('express');
const cors = express('cors');
const morgan = require('morgan');
const routes = require('./routers');

require('./config/sequelize');

const app = express();

// GLOBAL MIDDLEWARES
app.use(express.json()); // parse use json
// app.use(cors());
app.use(morgan('dev'));

// ROUTES
app.use('/api', routes);

// ERROR HANDDLE
app.use((err, req, res, next)=> {
    res.status(500).json({ error: 'Internal server error! '})
})

// SERVER INITIALIZATION
const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Server working on ${PORT}`);
    
});

