//Import router from express
const router = require('express').Router();
//Import thoughts routes
const thoughtRoutes = require('./thoughtRoutes');
//Import users routes
const userRoutes = require('./userRoutes');

//Use the routes with their corresponding endpoints
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router; //Export router