function doColor(){
  var can = document.getElementById('div1');
  can.style.backgroundColor = 'blue';
}
function dochange(){
  var can = document.getElementById('div1');
  var col = document.getElementById('crl');
  can.style.backgroundColor = col.value;
}