function addTask () {
  var input = document.getElementById("input");
  var plinput = document.getElementById("placeholder");
  // get current text from input field
  var newTask = input.value;
  // only add new item to list if some text was entered
  if (newTask != "") {
    // create new HTML list item
    var item = document.createElement("li");
    // add HTML for buttons and new task text
    // Note, need to use '' because of "" in HTML
    item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" /> ' + 
    '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' + '<input type="button" ID="bot1" onclick="important()" value="&#33;" />'+
    newTask;
    // add new item as part of existing list
    document.getElementById("tasks").appendChild(item);  
    
     /* Step 4 below here */
     input.value="";
     plinput.value='add new task';
    
  }
}


// change styling used for given item
function markDone (item) { 
    item.className = 'finished';
    
}

/* Step 7 below here */
function remove (item ,) {
  // remove item completely from document
  // get current text from input field = 'finished')
    if (item.className == 'finished') {      
        item.remove();
    }
}

/* Step 11 below here */
function doAbout() {
  var items = document.getElementById("divabout");
  items.innerHTML = "Author - Vincent " ;
  items.className = "aboutcolor";

}

/* Step 14 below here */
function clearAbout(items) {
  var items = document.getElementById("divabout");
  items.innerHTML = "" ;
}

function important(items1){
  var items1 = document.getElementById("bot1");
  items1.className = "important";

}