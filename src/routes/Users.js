const express = require('express');
const router = express.Router();

const { addUserDetails, userAuthorization, getUserDetails, editUser } = require('../controllers/Users');



router.post('/addUserDetails', addUserDetails);

router.get('/userAuthorization/:email/:pass', userAuthorization);

router.post('/getUserDetails', getUserDetails);

router.put('/editUser', editUser);


// Some changes is happened here 
module.exports = router;