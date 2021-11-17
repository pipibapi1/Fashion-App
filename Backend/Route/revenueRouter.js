const express = require('express');
// const ClerkRoutes = express.Router();
const router = express.Router();
const config = require('../configure.js');
const jwt = require('jsonwebtoken');

const revenueController = require('../Controllers/revenueController')


router.get('/order', revenueController.showOrder);
router.post('/searchAccount', revenueController.searchAccountId);
router.post('/searchItem', revenueController.searchItemId);
router.post('/searchProduct', revenueController.searchProductId);


module.exports = router;