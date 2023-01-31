//Import router from express
const router = require('express').Router();
//Import api routes
const apiRoutes = require('./api');
//Use api routes with /api
router.use('/api', apiRoutes);

router.use((req, res) => {
  return res.send('Wrong route!'); //Send messaege if the route is wrong
});

//Export router
module.exports = router;
