var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
});

var Book = module.exports = mongoose.model('Book',bookSchema);


// Get Books
module.exports.getBooks = function(callback,limit){
    Book.find(callback).limit(limit);
}