
//https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=yourkey
var nytApi = 'https://api.nytimes.com';
var nytListData = '/lists/names.json'
var apiKey = 'Xnbc5raSBOZ8T953UYXEizN4qTN8wBDX';



/* 

fetch('https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=' + apiKey, {method:'get',})
.then(response => { return response.json(); }) 
.then(json => { console.log(json); 
    });



// nytimesBestSellers.results.forEach(function(book) {
//     var isbn = book.isbns[1].isbn10;  var bookInfo = book.book_details[0];
//     });

    
*/
        
$( document ).ready(function() {
    $("#format-datepicker").datepicker({ 
        format: 'yyyy-mm-dd'
    });
});
          
  
  $(document).ready(function(){
    $('select').formSelect();
  });