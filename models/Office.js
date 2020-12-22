const mongoose = require('mongoose');


// Create Schema

const officeSchema = mongoose.Schema({
// fields

opening_hour:{
    // from 1 - 23   i.e   Open 9 (9AM) close 17 (5PM)
    type: Number,
    required: true ,
    
} ,
closing_hour:{
    type: Number ,
    required: true,
}


})


// Create model
const officeModel = mongoose.model('officeSchema',officeModel);


// export model

module.exports = officeModel;