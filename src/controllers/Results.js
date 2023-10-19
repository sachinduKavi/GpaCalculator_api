const mongoose = require('../mongoGB_database');

const { Users } = require('../model');



const uploadResults = async (req, res) => {
    console.log('Results values: ', req.body);

    const userEmail = req.body['user_email'];
    const results = req.body['results_data'];

    // console.log("Incoming results: ", results);

    const allData = await Users.findOne({email: userEmail});
    console.log("all data : ", allData);

    allData.result = results;
    await allData.save().then(result => {
        res.status(200).json({
            status: "Success",
            result: result
        });
    }).catch(e => {
        console.log("Error ", e);
        res.status(404).json({
            status: e
        });
    });

    

    
};



module.exports ={
    uploadResults
}
