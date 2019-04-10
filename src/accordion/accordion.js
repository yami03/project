var classes = {
  add: function (el, className) {
    if (el.classList) {
      el.classList.add(className);
    } else {
      el.className += ' ' + className;
    }
  },
  remove: function (el, className) {
    if (el.classList) {
      el.classList.remove(className);
    } else {
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }
}

var defaultHeaderID = null;
var defaultIdx = 0;
var headers ={}; 
var old = null;

function init() {
  initVars();
  // initEvents();
  // show(headers[defaultHeaderID]);
}

function initVars() {
  var elements = document.querySelectorAll(".panel-heading a");
  
  [].forEach.call(elements, function (el, i) {
    var accContentID = el.getAttribute("href");
    var accContentEl = document.querySelector(accContentID);
    
    headers[accContentID] = {
      header: el,
      content: accContentEl,
      index: i
    }
    console.log(headers[accContentID])
  })
}
init();