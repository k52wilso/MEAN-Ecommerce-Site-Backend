const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



app.use(bodyParser.json());

// Serve react app
app.use(express.static(path.join(__dirname, 'client/build')));

 //Models
 Books = require('./models/books');
 Reviews = require('./models/reviews');


// Connect to specified database
mongoose.connect('mongodb://kylwil29:wilson20@ds247648.mlab.com:47648/ecommerce');
const db = mongoose.connection;



 
// Routes

//Get list of books
app.get('/books',(req,res) => {    
    Books.getBooks(function(err,books){
        if(err){
            throw err;
        }
        res.json(books);
    },6);
});

//Get Reviews for specific book
app.get('/reviews/:id',(req,res) => {    
    Reviews.getReviewsForBook({book_id:req.params.id},function(err,reviews){
        if(err){
            throw err;
        }
        res.json(reviews);
    });
});





const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));