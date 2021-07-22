//https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=yourkey
var nytApi = 'https://api.nytimes.com';
var nytListData = '/lists/names.json'
var bookNamesColumn = document.querySelector('.book-names-column'); 
var bookUl = document.createElement('ul') // append to bookNamesColumn



bookNamesColumn.append(bookUl)

var datePickerDate = document.querySelector('.datepicker')
var inputEl = document.querySelector ('#type-selector');
var searchEl = document.querySelector ('#search-button');
var storedList = JSON.parse (localStorage.getItem ('search')) || [];



function getList (book, date) {
  var queryUrl = `https://api.nytimes.com/svc/books/v3/lists/${date}/${book}.json?api-key=Xnbc5raSBOZ8T953UYXEizN4qTN8wBDX`
  
  fetch(queryUrl , {method:'get',})
  .then(response => { return response.json(); }) 
  .then(json => { console.log(json); 
  
       json.results.books.forEach(function(book) {
        const listItem = document.createElement('li'); // append to bookUl
        const rowDiv = document.createElement('div'); // append to listItem
        rowDiv.setAttribute("class", "row");
        
        const colDiv = document.createElement('div'); // append to rowDiv
        colDiv.setAttribute("class", "col s12 m6");
        
        const cardDiv = document.createElement('div'); // append to colDiv
        cardDiv.setAttribute("class", "card blue-grey darken-1")
        
        const cardContentDiv = document.createElement('div'); // append to cardDiv
        cardContentDiv.setAttribute("class", "card-content white-text")
        
        const cardTitleSpan = document.createElement('span'); // append to cardContentDiv
        cardTitleSpan.setAttribute("class", "card-title")
        
        const titleLinkAnchor = document.createElement('a'); // append to cardTitleSpan
        function grabLink(link) {
            titleLinkAnchor.setAttribute('href', link)
        }
        
        const descP = document.createElement('p'); // append to cardContentDiv
        descP.setAttribute("class", "short description")
       var isbn = book.isbns[0].isbn10;  
       console.log(isbn);
  
  
       cardTitleSpan.textContent = book.rank+ ' ' + book.title;
  
  
       descP.textContent = book.description;
  
       bookUl.append(listItem);
       listItem.append(rowDiv);
       rowDiv.append(cardDiv);
       cardDiv.append(cardContentDiv);
       cardContentDiv.append(cardTitleSpan);
       cardTitleSpan.append(titleLinkAnchor);
       cardContentDiv.append(descP);
  
  
       });});
}




    

        
$( document ).ready(function() {
    $("#format-datepicker").datepicker({ 
        format: 'yyyy-mm-dd'
    });
});
          
  
  $(document).ready(function(){
    $('select').formSelect();
  });

  searchEl.addEventListener ('click', function () {
    var searchTerm = inputEl.value.trim();
    var dateSearch = datePickerDate.value;
    var apiKey = 'Xnbc5raSBOZ8T953UYXEizN4qTN8wBDX';
    console.log(searchTerm);
    console.log(dateSearch);
    getList(searchTerm, dateSearch);
    storedList.push (searchTerm);
    localStorage.setItem ('search', JSON.stringify (storedList));
    // displayStoredInfo();
  });