var image;
var s;
function upload() {
  var fileinput = document.getElementById("finput");

  image = new SimpleImage(fileinput);
  var img = document.getElementById("can");
  image.drawTo(img);
}

function color_gray(gimg) {
  for (var pixel of image.values()) {
    var r = pixel.getRed();

    var g = pixel.getGreen();

    var b = pixel.getBlue();
    s = (r + g + b) / 3;
    pixel.setGreen(s);
    pixel.setBlue(s);
    pixel.setRed(s);
  }
  var img = document.getElementById("can1");
  image.drawTo(img);
}