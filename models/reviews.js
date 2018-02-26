var mongoose = require('mongoose');

var reviewSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
});

var Review = module.exports = mongoose.model('Review',reviewSchema);


// Get Reviews for a Book
module.exports.getReviewsForBook = function(id,callback){
    Review.findOne(id,'title review rating',callback);
}