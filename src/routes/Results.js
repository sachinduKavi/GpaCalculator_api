const express = require('express');
const router = express.Router();

const { uploadResults, downloadResults } = require("../controllers/Results");



router.put('/uploadResults', uploadResults);

router.post('/downloadResults', downloadResults);


module.exports = router;
