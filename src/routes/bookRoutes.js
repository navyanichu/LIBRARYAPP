var express = require('express');
var booksRouter = express.Router();

function router(navb){

var books = [
    {
        name: "War and Peace",
        author: "Leo Tolstoy",
        genre: "Novel",
        img: "war.jpeg",
        para : "A legendary masterpiece, this book is synonymous with difficult reading, so why not challenge yourshelf."

       
    },

    {
        name: "Song of Solomon",
        author: " Toni Morrison",
        genre: "Fiction",
        img: "solo.jpeg",
        para : "One must always read a novel by this Nobel Prize winning author."

    },

    {
        name: "Ulysses",
        author: "James Joyce",
        genre: "Fiction",
        img: "uls.jpeg",
        para : "“Joyce’s parallel use of The Odyssey…has the importance of a scientific discovery…” –T. S. Eliot"
    },

    
]

booksRouter.get('/', function(req,res){

    res.render("books", {
        
        navb, 
        title : 'Library',
        books

        
    });

});

booksRouter.get('/:id', function(req,res){
    const id = req.params.id

    res.render("book", {
            
        navb,
        title : 'Library',
        book : books[id]
    
            
    })
})

return booksRouter;

}

module.exports = router;