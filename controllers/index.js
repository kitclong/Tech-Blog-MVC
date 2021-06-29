const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/api', apiRoutes); // Api
router.use('/', homeRoutes); // Homepage
router.use('/dashboard', dashboardRoutes); // Dashboard

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;