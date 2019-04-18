var inputValue = document.getElementById('search').value;

inputValue.addEventListener('keyup', function(e) {
  e.preventDefault();
  fetchData(inputValue);
})
//function that added the value of the input in to the url
var searchEndpoint = function (inputValue) {
return '/search?+q='+inputValue;
}

function fetchData(e) {
event.preventDefault();
var input = document.getElementById('search');
fetch('/search')
.then(function(response) {
  return response.json();
})
.then(function(data) {
console.log(data);
})
.catch(function(error) {
  console.log(error);
})
};
