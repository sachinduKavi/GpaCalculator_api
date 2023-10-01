const express = require('express');
const router = express.Router();

const { addUserDetails, userAuthorization } = require('../controllers/Users');



router.post('/addUserDetails', addUserDetails);

router.get('/userAuthorization/:email/:pass', userAuthorization);



module.exports = router;