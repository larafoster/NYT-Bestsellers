
// index var
var href;

var bookNamesColumn = document.querySelector('.book-names-column'); // append rowDiv to to this var. 

const rowDiv = document.createElement('div'); // append to bookNamesColumn
rowDiv.setAttribute("class", "row");

const colDiv = document.createElement('div'); // append to rowDiv
colDiv.setAttribute("class", "col s12 m6");

const cardDiv = document.createElement('div'); // append to colDiv
cardDiv.setAttribute("class", "card blue-grey darken-1")

const cardContentDiv = document.createElement('div'); // append to cardDiv
cardContentDiv.setAttribute("class", "card-content white-text")

const cardTitleSpan = document.createElement('span'); // append to cardContentDiv
cardTitleSpan.setAttribute("class", "card-title")

const descP = document.createElement('p'); // append to cardTitleSpan
descP.setAttribute("class", "short description")

const cardActionDiv = document.createElement('div'); // append to cardDiv
cardActionDiv.setAttribute("class", "card-action")

const bookLinkButton = document.createElement('a'); // append to cardActionDiv
bookLinkButton.setAttribute("class", "btn-floating halfway-fab waves-effect waves-light red");

const iconI = document.createElement('i'); // append to bookLinkButton
iconI.setAttribute("class", "material-icons");

iconI.textContent = '+'; 

// cover var

let bookCover = document.getElementById("book-cover");
let bookTitle = document.getElementById("title");
let bookDate = document.getElementById("date");
let bookDesc = document.getElementById("description")