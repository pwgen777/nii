'use strict'

function replaceVerticalScrollByHorizontal(event) {
    	if (event.deltaY != 0) {
        window.scroll(window.scrollX + event.deltaY * 1, window.scrollY);
      	event.preventDefault();
        }
      return;
}
 window.addEventListener('wheel', replaceVerticalScrollByHorizontal);





    