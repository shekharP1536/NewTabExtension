
var main = document.getElementById('container');
function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  
  setTimeout(showTime, 1000);
  
}

showTime();

var input = document.getElementById("myInput");
input.addEventListener("focusin",()=>{
  document.getElementById("todoDIV").style.display = "none";
  document.getElementById("recentsearch").style.display = "block";
});
input.addEventListener("focusout",()=>{
  setTimeout(() => {
    document.getElementById("todoDIV").style.display = "block";
    document.getElementById("recentsearch").style.display = "none";
  }, 500);



})

window.addEventListener("load", SetEngine);
function SetEngine() {
  console.log("newEngine");
  var engine = localStorage.getItem("Engine")
  if (engine == null) {
    console.log("what is new man");
    localStorage.setItem("search-engine", "https://www.google.com/search");
    localStorage.setItem("Engine", "Google");
  }
  var Engine = document.getElementById("CurrentEngineText");
  var EngineValue = localStorage.getItem("Engine");
  console.log(EngineValue);
  console.log(Engine);
  Engine.innerHTML = EngineValue;
}

// Add an event listener for the change event of search Engine
var bing = document.getElementById("bing");
bing.addEventListener("click", function bing() {
  // Retrieve the stored value from local storage
  var searchEngine = localStorage.getItem("search-engine");
  localStorage.setItem("search-engine", "https://www.bing.com/search");
  localStorage.setItem("Engine", "Bing");
  SetEngine();
  showMessage("Bing is now your default search Engine")
});


// For Google 
var google = document.getElementById("google");
google.addEventListener("click", function google() {
  // Retrieve the stored value from local storage
  var searchEngine = localStorage.getItem("search-engine");
  localStorage.setItem("search-engine", "https://www.google.com/search");
  localStorage.setItem("Engine", "Google");
  SetEngine();
  showMessage("Google is now your default search Engine")
});

var duck = document.getElementById("duckDuckgo");
duck.addEventListener("click", function duck() {
  // Retrieve the stored value from local storage
  var searchEngine = localStorage.getItem("search-engine");
  localStorage.setItem("search-engine", "https://duckduckgo.com/");
  localStorage.setItem("Engine", "DuckDuckGo");
  SetEngine();
  showMessage("DuckDuckGo is now your default search Engine")
})



// Get the form element
var form = document.querySelector("form");

// Add an event listener for the submit event
form.addEventListener("submit", function (event) {
  // Prevent the default form action
  event.preventDefault();

  // Get the selected search engine URL from local storage
  var searchEngine = localStorage.getItem("search-engine");

  // Get the input value from the text box
  var input = document.getElementById("myInput").value;
  // Redirect to the selected URL with the query parameter
  window.location.href = searchEngine + "?q=" + input;
});

// document.getElementById("refresh_joke").addEventListener('click', joke);
// function joke() {
//   var jokeElement = document.getElementById("jokep");
//   fetch("https://icanhazdadjoke.com/slack")
//     .then(data => data.json())
//     .then(jokedata => {
//       var joketext = jokedata.attachments[0].text;

//       console.log(joketext);
//       console.log("jokefun");

//       jokeElement.innerHTML = joketext;
//     });

// }
// function openNav() {
//   document.getElementById("mySidenav").classList.toggle("sidenavv");
// }

// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
// }

// document.getElementById('closeNav').addEventListener("click", openNav);
