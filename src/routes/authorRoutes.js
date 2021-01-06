var express = require('express');
var authorsRouter = express.Router();

function router(navb){

var authors = [
    {
        
        author: "Leo Tolstoy",
        img: "leo.jpg",
        para : " Leo Tolstoy, was a Russian writer who is regarded as one of the greatest authors of all time. He received nominations for the Nobel Prize in Literature"
       
    },

    {
        
        author: "Toni Morrison",
        img: "toni.jpeg",
        para : " Toni Morrison, was an American novelist, essayist, book editor, and college professor. "
       
    },

    {
        
        author: "James Joyce",
        img: "James Joyce.jpeg",
        para : "James Augustine Aloysius Joyce was an Irish novelist, short story writer, poet, teacher, and literary critic. He contributed to the modernist avant-garde movement and is regarded as one of the most influential and important writers of the 20th century."
       
    },    
];

authorsRouter.get('/', function(req,res){

    res.render("authors", {
        
        navb, 
        title : 'Library',
        authors

        
    });

});

authorsRouter.get('/:id', function(req,res){
    const id = req.params.id

    res.render("author", {
            
        navb,
        title : 'Library',
        author : authors[id]
    
            
    })
})

return authorsRouter;

}

module.exports = router;