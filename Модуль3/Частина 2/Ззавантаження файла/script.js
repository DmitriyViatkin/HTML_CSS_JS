function upload(){
  var fileinput= document.getElementById('finput');
  
  var image= new SimpleImage(fileinput);
  var img = document.getElementById("can");
  image.drawTo(img);
}