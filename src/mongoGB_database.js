const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://SachinduKavishka:Skavishka2001@cluster0.scfqaos.mongodb.net/GpaCal', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(success => {
    console.log("MongoDB is connected...");
})

module.exports = mongoose;