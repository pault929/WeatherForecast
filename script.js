var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

renderTodos();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
  }
}

// When form is submitted...
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  todoInput.value = "";

  // Re-render the list
  renderTodos();
});

// var todo = "Orlando";

$.getJSON("http://api.openweathermap.org/data/2.5/forecast?q=orlando&units=imperial&APPID=411910c4c4abb733221242b4d25a13f1&units=imperial", function(data){

console.log(data);

var icon ="http://openweathermap.org/img/wn/10d@2x.png";


// var temperature = Math.floor(data.main.temperature);
// var weather = data.weather[0].main;

// $(".icon").attr("src", icon);
// $(".weather").append(weather);
// $(".temp").append(temperature);


// 

// var temp = data.main.temp;
// var weather = data.weather[0].main;

// console.log(icon);

// $('.icon').atrr('src', icon);
// $(".temp").append(temp);
// $(".weather").append(weather);

var dt = newDate();
  document.getElementById("datetime").innerHtml = dt.toLocaleString();

});


const key = '';
if(key=='') document.getElementById('temp').innerHTML = ('411910c4c4abb733221242b4d25a13f1');

function weatherBallon( cityID ) {
	fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + '411910c4c4abb733221242b4d25a13f1')  
	.then(function(resp) { return resp.json() }) // Convert data to json
	.then(function(data) {
		drawWeather(data);
	})
	.catch(function() {
		// catch any errors
	});
}
function drawWeather( d ) {
  var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
  var description = d.weather[0].description; 
	
	document.getElementById('description').innerHTML = description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = d.name;
  
  if( description.indexOf('rain') > 0 ) {
  	document.body.className = 'rainy';
  } else if( description.indexOf('cloud') > 0 ) {
  	document.body.className = 'cloudy';
  } else if( description.indexOf('sunny') > 0 ) {
  	document.body.className = 'sunny';
  } else {
  	document.body.className = 'clear';
  }
}
window.onload = function() {
	weatherBallon( 6167865 );
}