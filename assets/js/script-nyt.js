
//https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=yourkey
var nytApi = 'https://api.nytimes.com';
var nytListData = '/lists/names.json'
var apiKey = 'Xnbc5raSBOZ8T953UYXEizN4qTN8wBDX';

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, options);
  });