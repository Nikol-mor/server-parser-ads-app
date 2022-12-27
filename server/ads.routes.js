const express = require('express');
const { getAdsData } = require('./ads.controller');

const router = express.Router();
module.exports = router;

router.get('/', getAdsData);
