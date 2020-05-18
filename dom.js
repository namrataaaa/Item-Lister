var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 2px #000';
var input = document.querySelector('input');
var select = document.querySelector('input[type="submit"]');
var even = document.querySelectorAll('li:nth-child(even)');
var itemList = document.querySelector('#items');

//Changing the background color
var box = document.getElementById('box');
box.addEventListener('mousemove', runEvent);
function runEvent(e){
    e.preventDefault();
    document.body.style.backgroundColor = 'rgb('+e.offsetX+', '+e.offsetY+', 100)';
}

var form = document.querySelector('form');
// var select = document.querySelector('select');
var filter = document.getElementById('filter');
var inputItem = document.getElementById('item');

//Main Functioning of application
form.addEventListener('submit', addItem);
itemList.addEventListener('click', deleteItems);
filter.addEventListener('keyup', filterItems);

function addItem(e){
    e.preventDefault();
    document.getElementById('p').style.display = 'none';
    var newItem = document.getElementById('item').value;
    if(newItem === '')
        alert('Please submit a valid item.');
    else{
        var li = document.createElement('li');
        li.className = "list-group-item";
        li.appendChild(document.createTextNode(newItem));

        var btn = document.createElement('btn');
        btn.className = "btn btn-danger btn-sm float-right delete";
        btn.appendChild(document.createTextNode('X'));
        li.appendChild(btn);

        itemList.appendChild(li);
        inputItem.value = '';
    }
}

function deleteItems(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure you want to remove ' + e.target.parentElement.textContent + '?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li); 
        }
    }
}

function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            document.getElementById('p').style.display = 'none';
            item.style.display = 'block';
        }
        else{
            document.getElementById('p').textContent = 'Sorry! No items found related to your search.';
            document.getElementById('p').style.display = 'block';
            document.getElementById('p').style.color = 'orange';
            item.style.display = 'none';
        }
    })
}
