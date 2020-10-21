var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
// var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

renderTodos();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  // todoCountSpan.textContent = todos.length;

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

$.getJSON("http://api.openweathermap.org/data/2.5/forecast?q=5128581&APPID=411910c4c4abb733221242b4d25a13f1&units=imperial", function(data){

console.log(data);

// var icon ="http://openweathermap.org/img/wn/10d@2x.png";
var icon ="http://api.openweathermap.org/data/2.5/forecast?q=5128581&APPID=411910c4c4abb733221242b4d25a13f1&units=imperial";




var dt = newDate();
  document.getElementById("datetime").innerHtml = date.toLocaleString();

});
// const response = await fetch(
//   `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&appid=${myKey}`
// );

const key = '';
if(key == '') document.getElementById('temp').innerHTML = ('411910c4c4abb733221242b4d25a13f1');

function weatherBallon( cityID ) {
	fetch('https://api.openweathermap.org/data/2.5/weather?id=' + 5128581 + '&appid=' + '411910c4c4abb733221242b4d25a13f1')  
	.then(function(resp) { return resp.json() }) // Convert data to json
	.then(function(data) {
		drawWeather(data);
	})
	.catch(function() {
		// catch any errors
	});
}
function drawWeather( d ) {
  // var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
  var description = d.weather[0].description; 
	
	document.getElementById('description').innerHTML = description;
	document.getElementById('temp').innerHTML = fahrenheit + '&deg;';
	document.getElementById('location').innerHTML = d.name;
  
  
  document.getElementById('description2').innerHTML = description;
	document.getElementById('temp2').innerHTML = fahrenheit + '&deg;';
	document.getElementById('location2').innerHTML = d.name;
  
  
  document.getElementById('description3').innerHTML = description;
	document.getElementById('temp3').innerHTML = fahrenheit+ '&deg;';
	document.getElementById('location3').innerHTML = d.name;
  
  
  document.getElementById('description4').innerHTML = description;
	document.getElementById('temp4').innerHTML = fahrenheit + '&deg;';
	document.getElementById('location4').innerHTML = d.name;
  
  
  
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

