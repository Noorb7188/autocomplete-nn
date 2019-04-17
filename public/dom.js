var inputValue = document.getElementById('search').value;

inputValue.addEventListener('keyup', function(e) {
  e.preventDefault();
  fetchData(inputValue);
})

function fetchData(e) {
  event.preventDefault();
var input = document.getElementById('search');

fetch('/search')
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log("my data is ", data);
})
.catch(function(error) {
  console.log(error);
})
};
