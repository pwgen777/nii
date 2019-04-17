'use strict'


// горизонтальный скролл
function replaceVerticalScrollByHorizontal(event) {
    	if (event.deltaY != 0) {
        window.scroll(window.scrollX + event.deltaY * 1, window.scrollY);
        }
      return;
}
 window.addEventListener('wheel', replaceVerticalScrollByHorizontal);
 

// размеры области 

var width , height;
var getSize = document.getElementById('photo');
var changeSize = document.getElementById("body"); 
var chack = document.getElementById('contain');

getSize.onload = function() {
    width = this.offsetWidth;
    height = this.offsetHeight; 
   
        changeSize.style.width = (width+("px"));
        changeSize.style.height = (height+("px"));

   
        chack.style.width = (width+("px"));
        chack.style.height = (height+("px"));

        

}

// скрол при зажатой ЛКМ

document.getElementById('photo').ondragstart = function() { return false; };
var x , y;
document.onmousemove = mousemove;


document.onmousedown = function(e) {

  e = e || window.event;
   x = e.clientX;
   y = e.clientY;
}

function mousemove(e) {

 if (event.which == 1) 
 {
     if (x && y) {
    window.scrollBy(x - e.clientX, y + e.clientY);
  }
  x = e.clientX;
  y = e.clientY;
 }

 }

 //создание flexbox ячеек 

  var dridEx = document.getElementById("flexEx");

for (var i = 1; i < 22; i++) {
 var newDiv = document.createElement('div');
    newDiv.id=('div'+i);
    newDiv.className=("flexCell");
    flexEx.appendChild(newDiv);
};

for (var i = 1; i < 22; i++) {
  var txt = document.getElementById('div'+i);
  txt.innerText = ('Персональный id = '+i);
 
 };

// RESIZE WINDOW 

 window.addEventListener('resize', function(event){

  var offsetWidth = getSize.offsetWidth;
  var offsetHeight = getSize.offsetHeight;

  changeSize.style.width = (offsetWidth+("px"));
  changeSize.style.height = (offsetHeight+("px"));

  chack.style.width = (offsetWidth+("px"));
  chack.style.height = (offsetHeight+("px"));
  
  
   
});




 //наведение на flexbox

//  var mouse = document.getElementById(div3);
//  mouse.mouseover = function() {
//    alert('dsd')
//  }
 


