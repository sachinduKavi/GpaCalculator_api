const express = require('express');
const router = express.Router();

const { addUserDetails, userAuthorization, getUserDetails } = require('../controllers/Users');



router.post('/addUserDetails', addUserDetails);

router.get('/userAuthorization/:email/:pass', userAuthorization);

router.post('/getUserDetails', getUserDetails);


// Some changes is happened here 
module.exports = router;