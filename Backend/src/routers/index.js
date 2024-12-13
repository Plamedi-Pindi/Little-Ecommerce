const express = require('express');
const userRouters = require('./userRouters'); // User routers

const router = express.Router();

// Add diferents routes groupes
router.use('/user', userRouters);
module.exports = router;
