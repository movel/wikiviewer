'use strict';

  function PressEnter(your_text, your_event) {
	  if(your_text != "" && your_event.keyCode == 13)
	   getWiki();
	}
  
  let searchBtn = document.getElementById("button");
  searchBtn.addEventListener("click", getWiki);
  
  let textSearch = document.getElementById("text");

  function getWiki() {
    
    event.preventDefault();
    let rdyString = "";
    let len = textSearch.value.length;
    let queryString = textSearch.value;
    for (var i = 0; i < len; i++) {
      if (queryString[i] === " ") {
        rdyString += "%20";
      } else {
        rdyString += queryString[i];
      }
    }
    
    let api = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='
               + rdyString
               + '&format=json&origin=*';
    
    let myList = document.querySelector('ul');
    while (myList.firstChild) {
        myList.removeChild(myList.firstChild);
    }
    
    /* global fetch */
    fetch(api)
    .then(function(response) { return response.json(); })
    .then(function(data) {
      for (let i = 0; i < 10; i++) {
        let listItem = document.createElement('li');
        listItem.innerHTML = "<blockquote class='bg-info'><a href="
                  + data[3][i] + "><p>" 
                  + data[1][i] + "</p><footer>" 
                  + data[2][i] + "</footer></a></blockquote>";
        myList.appendChild(listItem);
      }
    });
  }
