var text = ['Kenyan.','Aspiring Developer.'];
var counter = 0;
var elem = document.getElementById("list");
var inst = setInterval(change, 10000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}