var googleBooksApi = 'https://www.googleapis.com/books/v1/';
var googleApiKey = 'AIzaSyDBb6fNkW6mQhrOdRAMvFBkWXbPgt2S0ek';//before apikey  &key=
var googleVolumeExample = 'volumes?q=flowers+inauthor:keyes';

function updateCover(id, isbn) {  
    fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn + "&key=" + googleApiKey, {method: 'get'})
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
//maybe add this to the back button to clear out any stored data - not sure if this is overstepping our bounds by clearing out localstorage?? Would it also clear out the users shopping cart on another site?
  var clearEl = document.querySelector ('#clear-history');

    clearEl.addEventListener ('click', function () {
    localStorage.clear();
  });
