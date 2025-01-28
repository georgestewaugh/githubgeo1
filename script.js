//selecting popupbox,popupoverley,button
var popupoverley=document.querySelector(".popup-overley")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton=addEventListener("click",function(){
    popupoverley.style.display="block"
    popupbox.style.display="block"
})

//select cancek button

 var cancelpopup=document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault(event)
    popupbox.style.display="block"
    popupbox.style.display="block"
 })

 //select container addbook,book-title-input,book-author-input,book-description-input
var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault(event)
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h1>${booktitleinput.value}</h1>`
    container.append(div)
        popupoverley.style.display="block"
    popupbox.style.display="block"
})
//
var popupoverley = document.querySelector(".popup-overley");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function() {
    popupoverley.style.display = "block";
    popupbox.style.display = "block";
});

// Select cancel button
var cancelpopup = document.getElementById("cancel-popup");

cancelpopup.addEventListener("click", function(event) {
    event.preventDefault();
    popupoverley.style.display = "none";
    popupbox.style.display = "none";
});

// Select container, addbook, and input fields
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

addbook.addEventListener("click", function(event) {
    event.preventDefault();

    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `
        <h1>${booktitleinput.value}</h1>
        <h2>${bookauthorinput.value}</h2>
        <p>${bookdescriptioninput.value}</p>
    `;
    container.append(div);

    popupoverley.style.display = "none";
    popupbox.style.display = "none";

    // Clear input fields
    booktitleinput.value = "";
    bookauthorinput.value = "";
    bookdescriptioninput.value = "";
});

