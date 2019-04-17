var inputValue = document.getElementById('search');
inputValue.addEventListener('keyup', function(e) {
  e.preventDefault();
  fetchData(inputValue.value);
})

function fetchData(e) {
  event.preventDefault();
}
