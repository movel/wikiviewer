'use strict';

  function PressEnter(your_text, your_event) {
		  if(your_text != "" && your_event.keyCode == 13)
		   getWiki();
		}


  
  let searchBtn = document.getElementById("button");
  searchBtn.addEventListener("click", getWiki);
  
  let textSearch = document.getElementById("text");
  let searchTitle = document.getElementById("title");
  let container = document.getElementById("container");
  //let aLinks = document.getElementsByTagName("a");
  let titleDivs = document.getElementsByClassName("block");
  let scrollBtn = document.getElementById("scroll");
  
  

  function getWiki() {
    
    // var page = 'https://en.wikipedia.org/?curid=';
    
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
    // textSearchCheck(rdyString, queryString);
    // styleContainer();
              
    let api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch='
                + textSearch
                + '&gsrlimit=10&prop=extracts&exintro&explaintext&exchars=140&exlimit=max&origin=*';
    
    let xhr = new XMLHttpRequest();
    
    // xhr.open('GET', api, true);
    // xhr.send();
    // xhr.onreadystatechange = function() {
    //   if (xhr.readyState === 4 && xhr.status === 200) {
    //     let data = xhr.responseText;
    //     let json = JSON.parse(data);
    //     let keys = Object.keys(json.query.pages);
    //     for (let i = 0; i < keys.length; i++) {
    //       let data = xhr.responseText;
    //       let json = JSON.parse(data);
    //       let keys = Object.keys(json.query.pages);
    //       for (let i = 0; i < keys.length; i++) {
    //         // titleDivs[i].childNodes[1].innerHTML = (json.query.pages[keys[i]].title.search("(disambiguation)") ? json.query.pages[keys[i]].title.replace("(disambiguation)", ""):json.query.pages[keys[i]].title) + "<br>" + json.query.pages[keys[i]].extract;
    //         // titleDivs[i].childNodes[1].href = "https://en.wikipedia.org/wiki/" + json.query.pages[keys[i]].title;
    //         // titleDivs[i].childNodes[1].setAttribute("class", "links");
    //         // checkBlankDescrip(i, json.query.pages[keys[i]].extract, json.query.pages[keys[i]].title);
            
    //         // let div = document.createElement('div');
    //         // div.className = "wiki_extract";
    //         // div.innerHTML = (json.query.pages[keys[i]].title.search("(disambiguation)") ? json.query.pages[keys[i]].title.replace("(disambiguation)", ""):json.query.pages[keys[i]].title) + "<br>" + json.query.pages[keys[i]].extract;
    //         // div.href = "https://en.wikipedia.org/wiki/" + json.query.pages[keys[i]].title;
    //         // div.setAttribute("class", "links");
    //         console.log(json());
    //       }
    //     }
    //   }
    // };
    
    
    
    
  }
  
function checkBlankDescrip(i, extract, title) {
  if (extract.length < 4) {
    return titleDivs[i].childNodes[1].innerHTML = title + "<br>" + "Click here for more information on " + title + ".";
  } 
}  
  
function textSearchCheck(rdyString, queryString) {
  textSearch.value = "";
  queryString === "" ? searchTitle.innerHTML = "Please enter a new search": searchTitle.innerHTML = "You searched for: " + queryString;
  searchTitle.href = "https://en.wikipedia.org/wiki/" + rdyString;
}

function styleContainer() {
  container.style.backgroundColor = "rgb(93, 51, 110)";
  container.style.border = "2px solid white";
}

function addScrollBtn() {
  scrollBtn.innerHTML = "<a href='#text'><i class='fa fa-arrow-circle-up fa-1' aria-hidden='true'></i></a>";
}