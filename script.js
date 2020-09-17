// $.getJSON(
//     "http://api.openweathermap.org/data/2.5/weather?q=Orlando&APPID=411910c4c4abb733221242b4d25a13f1",
// function(data) { 
//     console.log(data);

//     var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

//     var temp = Math.floor(data.main.temp);
//     var weather = data.weather[0].main;



//     $(".icon").attr("src", icon);
//     $(".weather").append(weather);
//     $(".temp").append(temp);
//     }
// );
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
