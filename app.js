'use strict';

window.onload = function() {
  
  let button = document.getElementById("button");
  button.addEventListener("click", myFunction);

  function myFunction() {
    
    let cors = 'https://cors-anywhere.herokuapp.com/';
    // let api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
    let api = 'https://en.wikipedia.org/w/api.php?';
    let cb = '&callback=JSON_CALLBACK';
    let page = 'https://en.wikipedia.org/?curid=';
    
    /* global fetch */
    // fetch(cors + api + cb)
    // .then(function(response) {
    //   return response.json();
    // }).then(function(json) {
    //   console.log('parsed json', json);
    // }).catch(function(ex) {
    //   console.log('parsing failed', ex);
    // });
    
    fetch(api + cb)
    .then(function(response) {
      alert(response.headers.get('Content-Type')); // application/json; charset=utf-8
      alert(response.status); // 200
  
      return response.json();
     })
    .then(function(user) {
      alert(user.name); // iliakan
    })
    .catch( alert );
    
  }


// Create the XHR object.
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
  return text.match('<title>(.*)?</title>')[1];
}

// Make the actual CORS request.
function makeCorsRequest() {
  // This is a sample server that supports CORS.
  
  let api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
  let cb = '&callback=JSON_CALLBACK';
  
  // var url = 'http://html5rocks-cors.s3-website-us-east-1.amazonaws.com/index.html';

  let url = api + cb;

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    var title = getTitle(text);
    alert('Response from CORS request to ' + url + ': ' + title);
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
}

};

// var app = angular.module('WikiApp', ['ngAnimate']);
// app.controller('MainCtrl', function($scope, $http, $timeout) {
//   var form = $('form');
//   var close = $('.eks');
//   var input = $('input');
//   var search = $("#search");
//   var help = $("#help");
  
//   $scope.results = [];

//   close.on('click', function() {
//     form.toggleClass('open');
    
//     if (!form.hasClass('open') && $scope.searchTxt !== '' && typeof $scope.searchTxt !== 'undefined') {
// 	    search.toggleClass('fullHeight')
//       help.toggleClass('hide');
//       $scope.searchTxt = '';
//     } 
//     $scope.results = [];
//     $scope.$apply();
//   })

//   input.on('transitionend webkitTransitionEnd oTransitionEnd', function() {
//     if (form.hasClass('open')) {
//       input.focus();
//     } else {
//       return;
//     }
//   })

//   $scope.search = function() {
//     $scope.results = [];
//     help.addClass('hide');
//     search.removeClass('fullHeight');
//     var title = input.val();
//     var api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
//     var cb = '&callback=JSON_CALLBACK';
//     var page = 'https://en.wikipedia.org/?curid=';
    
//     $http.jsonp(api + title + cb)
//     .success(function(data) {
//       var results = data.query.pages;
//       angular.forEach(results, function(v,k)  {
//         $scope.results.push({title: v.title, body: v.extract, page: page + v.pageid})
//       })
//     });
//   }
// });