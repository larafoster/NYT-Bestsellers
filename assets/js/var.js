
// index var
var href;





var bookNamesColumn = document.querySelector('.book-names-column'); 
var bookUl = document.createElement('ul') // append to bookNamesColumn

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



// cover var

let bookCover = document.getElementById("book-cover");
let bookTitle = document.getElementById("title");
let bookDate = document.getElementById("date");
let bookDesc = document.getElementById("description")

var datePickerDate = document.querySelector('.datepicker')
var inputEl = document.querySelector ('#type-selector');
var searchEl = document.querySelector ('#search-button');
var storedList = JSON.parse (localStorage.getItem ('search')) || [];


searchEl.addEventListener ('click', function () {
  var searchTerm = inputEl.value;
  var dateSearch = datePickerDate.value;
  console.log(searchTerm)
  console.log(dateSearch);
  getList (searchTerm);
  storedList.push (searchTerm);
  localStorage.setItem ('search', JSON.stringify (storedList));
  displayStoredInfo ();
});

displayStoredInfo ();
  if (storedList.length > 0) {
    getList (storedList[storedList.length - 1]);
  }