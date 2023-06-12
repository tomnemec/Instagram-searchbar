var list = ["Banana", "Apple", "Orange", "Blueberry"];
var myList = document.getElementById('myList');

function filterList(searchTerm) {
  myList.innerHTML = '';

  var filteredList = list.filter(function(item) {
    return item.toLowerCase().includes(searchTerm.toLowerCase());
  });

 
  filteredList.forEach(function(item) {
    var li = document.createElement('li');
    li.textContent = item;
    myList.appendChild(li);
  });
}

var searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keyup', function(event) {  
    var searchTerm = event.target.value;
    filterList(searchTerm);  
});

list.forEach(function(item) {
  var li = document.createElement('li');
  li.textContent = item;
  myList.appendChild(li);
});