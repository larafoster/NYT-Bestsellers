
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

const titleLinkAnchor = document.createElement('a'); // append to cardContentDiv
function grabLink(link) {
    titleLinkAnchor.setAttribute('href', link)
}

const cardTitleSpan = document.createElement('span'); // append titleLinkAnchor
cardTitleSpan.setAttribute("class", "card-title")

const descP = document.createElement('p'); // append to cardTitleSpan
descP.setAttribute("class", "short description")

const cardActionDiv = document.createElement('div'); // append to cardDiv
cardActionDiv.setAttribute("class", "card-action")


// cover var

let bookCover = document.getElementById("book-cover");
let bookTitle = document.getElementById("title");
let bookDate = document.getElementById("date");
let bookDesc = document.getElementById("description")