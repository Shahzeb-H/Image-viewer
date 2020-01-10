var current = document.querySelector(".main-img img");
var images = document.querySelectorAll(".images img");
images[0].style.border = "2px solid black";
var images = document.querySelectorAll(".images img");
var next = document.querySelector(".next");
var previous = document.querySelector(".previous");
next.addEventListener("click", mynext);
previous.addEventListener("click", myprevious);
var imgarr = [];
imgarr[0] = "image/image 1.jpg";
imgarr[1] = "image/image 2.jpg";
imgarr[2] = "image/image 3.jpg";
imgarr[3] = "image/image 4.jpg";
imgarr[4] = "image/image 5.jpg";
imgarr[5] = "image/image 6.jpg";
imgarr[6] = "image/image 7.jpg";
imgarr[7] = "image/image 8.jpg";
imgarr[8] = "image/image 1.jpg";
const length = imgarr.length;
var i = 0;
function mynext() {
  images.forEach(change);
  function change(a){
    a.style.border = "";
  }
  if (i==7){
    i = -1;
  }
  i = i+1;
  images[i].style.border = "2px solid black";
  current.src = imgarr[i];
}
function myprevious() {
  images.forEach(change);
  function change(a){
    a.style.border = "";
  }
  if (i<1){
    i = 8;
  }
  i = i-1;
  images[i].style.border = "2px solid black";
  current.src = imgarr[i];
}
