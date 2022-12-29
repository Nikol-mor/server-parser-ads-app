const express = require('express');
const { getAdsData } = require('./ads.controller');

const router = express.Router();

router.get('/', getAdsData);

module.exports = router;
