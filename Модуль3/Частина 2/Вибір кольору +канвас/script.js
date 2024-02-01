function doColor(){
  var can = document.getElementById('div1');
  can.style.backgroundColor = 'blue';
}
function dochange(){
  var can = document.getElementById('div1');
  var col = document.getElementById('crl');
  can.style.backgroundColor = col.value;
}
function dosquare(){
  var sizeinput =  document.getElementById('sldr');
  var size = sizeinput.value
  var can2 = document.getElementById('div1');
  
  var ctx = can2.getContext('2d');
  ctx.clearRect(0,0,can2.width,can2.height);
  ctx.fillStyle = 'black';
  ctx.fillRect(10,10,size,size);
  ctx.fillRect(parseInt(size)+20,10,size,size);
  ctx.fillRect(size*3,10,size,size);
}