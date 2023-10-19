const express = require('express');
const router = express.Router();

const { uploadResults } = require("../controllers/Results");


router.put('/uploadResults', uploadResults);


module.exports = router;
