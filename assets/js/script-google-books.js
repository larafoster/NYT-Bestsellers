var googleBooksApi = 'https://www.googleapis.com/books/v1/';
var googleApiKey = 'AIzaSyDBb6fNkW6mQhrOdRAMvFBkWXbPgt2S0ek';//before apikey  &key=
var googleVolumeExample = 'volumes?q=flowers+inauthor:keyes';

function updateCover(id, isbn) {  
    fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn + "&key=" + apiKey, {method: 'get'})
    .then(response => { return response.json(); }) 
    .then(data => {var img = data.items[0].volumeInfo.imageLinks.thumbnail;
    img = img.replace(/^http:\/\//i, 'https://');    
    $('#cover-' + id).attr('src', img);  })   
    .catch(error=> {       console.log(error);  });}


    function displayStoredInfo() {
        if (storedList.length > 0) {
          getList(storedList[storedList.length - 1]);
        }
      }
