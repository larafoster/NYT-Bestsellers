
//https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=yourkey
var nytApi = 'https://api.nytimes.com';
var nytListData = '/lists/names.json'
var apiKey = 'Xnbc5raSBOZ8T953UYXEizN4qTN8wBDX';

class Fetch {
    async getCurrent(input) {
      var myKey = 'AIzaSyDBb6fNkW6mQhrOdRAMvFBkWXbPgt2S0ek';
  
  
      var response = await fetch(
        `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=[myKey]`
      );
  
      var data = await response.json();
  
      console.log(data);
  
      return data;
    }
  }