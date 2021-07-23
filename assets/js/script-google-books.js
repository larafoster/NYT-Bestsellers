var googleBooksApi = 'https://www.googleapis.com/books/v1/';
var googleApiKey = 'AIzaSyDBb6fNkW6mQhrOdRAMvFBkWXbPgt2S0ek';//before apikey  &key=
var googleVolumeExample = 'volumes?q=flowers+inauthor:keyes';

var mediaQuery = window.matchMedia('(max-width: 600px)');


// https://storage.googleapis.com/du-prd/books/images/9780593329825.jpg

function updateCover() {  
    var linkInformation = document.location.search;
    var searchParams = new URLSearchParams(linkInformation);
    var isbn10 = searchParams.get('q');
    var bookAuthor = searchParams.get('author'); 
    var buyLink = searchParams.get('link');
    var title = searchParams.get('title');
    var isbn13 = searchParams.get('isbn13')

    fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn10 + "&key=" + googleApiKey, {method: 'get'})
    .then(response => { return response.json(); }) 
    .then(data => {var img = data.items[0].volumeInfo.imageLinks.thumbnail; 


        let bookCover = document.getElementById("book-cover");
        let bookTitle = document.getElementById("title");
        let author = document.getElementById("author");
        let bookDate = document.getElementById("date");
        let bookDesc = document.getElementById("description")

        
            if (mediaQuery.matches) {
                bookCover.setAttribute("src", img)
            } else {
                bookCover.setAttribute("src", `https://storage.googleapis.com/du-prd/books/images/${isbn13}.jpg`)
            }
        
        bookTitle.innerHTML = title;
        author.innerHTML = bookAuthor;

    })
//     .catch(error =>(){       console.log(error);  

//     $('#' + book.rank).attr('nyt-rank', book.rank);
//     updateCover(book.rank, isbn);
// });}
}
    function displayStoredInfo() {
        if (storedList.length > 0) {
          getList(storedList[storedList.length - 1]);
        }
      }
//clear localstorage to enable new search
  var clearEl = document.querySelector ('#clear-history');

    clearEl.addEventListener ('click', function () {
    localStorage.clear();
  });

updateCover();