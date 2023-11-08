const mongoose = require('mongoose')
const {Schema} = mongoose

const bookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type:Number,
        required: true
    },
    available: {
        type: Boolean,
    },
    image:{
        type:String,
        required:true,
    }
})
const Booksmodel = mongoose.model('Books',bookSchema);
module.exports=Booksmodel;