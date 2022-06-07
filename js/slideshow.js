let images = [
  "D:/JS_NodeJS/Lab6/images/hinh1.jpg",
  "D:/JS_NodeJS/Lab6/images/hinh2.jpg",
  "D:/JS_NodeJS/Lab6/images/hinh3.jpg",
];

let position = 0;

function showFirst() {
  position = 0;
  const image = document.getElementById("image");
  image.src = images[position];
}

function showLast() {
  position = images.length - 1;
  const image = document.getElementById("image");
  image.src = images[position];
}

function showNext() {
  if (position < images.length - 1) {
    position++;
  }
  const image = document.getElementById("image");
  image.src = images[position];
}

function showPrevious() {
  if (position > 0) {
    position--;
  }
  const image = document.getElementById("image");
  image.src = images[position];
}
