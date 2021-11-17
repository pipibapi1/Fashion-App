const express = require('express');
// const ClerkRoutes = express.Router();
const router = express.Router();
const config = require('../configure.js');
const jwt = require('jsonwebtoken');

const detailController = require('../Controllers/detailController')

// let Clerk = require('../Models/Clerk.model');

router.get('/Clerk', detailController.showClerk);
router.get('/Customer', detailController.showCustomer);

module.exports = router;