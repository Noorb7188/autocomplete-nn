var input = document.getElementById("search");
var inputVal = input.value;

// somehow the value of my input is kept undefined :(
input.addEventListener('keyup', function(e) {
  console.log('my val from e.listener' , inputVal);
  e.preventDefault();
  fetchData(inputVal);
});

function fetchData(inputVal) {
  console.log('may value from fetch is ', inputVal);
fetch('/search?q='+inputVal)
.then(function(response) {
  console.log('my response is:', JSON.stringify(response));
  return response.json();
})
.then(function(data) {
  console.log("my data is ", data);
})
.catch(function(error) {
  console.log(error);
})
};
