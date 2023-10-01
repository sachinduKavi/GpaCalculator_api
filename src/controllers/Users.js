const mongoose = require('../mongoGB_database');


const Users = mongoose.model('Users', {
    userName: String,
    email: String,
    password: String,
    university: String,
    degree: String,
    score: Object
    
}, "Users");

const addUserDetails = async (req, res) => {
    var status, code;
    console.log("Add new user...");
    await Users.insertMany(
        {
            userName: req.body['userName'],
            email: req.body['email'],
            password: req.body['password'],
            university: req.body['university'],
            degree: req.body['degree'],
        }
    ).then(success => {
        status = "Success";
        code = 201;
    }).catch(err => {
        status = 'Error';
        code = 409;
    });

    res.status(code).json({
        status: status,
        body: req.body
    });
    
};

const userAuthorization = async (req, res) => {
    const email = req.params.email;
    const pass = req.params.pass;

    const response = await Users.find({"email": email}, {email: 1, password:1});
    console.log("results:", response.length);
    if(response.length > 0){
        var authorized, statusCode, message;
        if(pass === response[0]['password']){
            console.log("Authorized success");
            authorized = true;
            message = "Account authorized";
        } else {
            authorized = false;
            message = "Password mismatched";
        }
        statusCode = 201;
    } else {
        authorized = false;
        message = "Account dose not exists"
        statusCode = 409;
    }
    res.status(statusCode).json({
        authorized: authorized,
        message: message,
        result: response
    })
}



module.exports = {
    addUserDetails,
    userAuthorization
};