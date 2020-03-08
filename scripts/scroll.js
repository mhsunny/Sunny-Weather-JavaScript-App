const moveMeDOwn = (moveDistance) =>{
  var scrollY = 0;
   const moveDOwn = setInterval(() => {
      scrollY += 1;
      window.scroll(0, scrollY);
      if(scrollY == moveDistance){
          clearInterval(moveDOwn);
      }
  }, 1);

}


// var scrollY = 0;
// var distance = 200;
// var speed = 24;

// function autoScrollTo(el) {
//   var currentY = window.pageYOffset;
//   var targetY = document.getElementById(el).offsetTop;
//   var bodyHeight = document.body.offsetHeight;
//   var yPos = currentY + window.innerHeight;
//   var animator = setTimeout('autoScrollTo(\'' + el + '\')', 24);
//   if (yPos > bodyHeight) {
//     clearTimeout(animator);
//   } else {
//     if (currentY < targetY - distance) {
//       scrollY = currentY + distance;
//       window.scroll(0, scrollY);
//     } else {
//       clearTimeout(animator);
//     }
//   }
// }

// function resetScroller(el) {
//   var currentY = window.pageYOffset;
//   var targetY = document.getElementById(el).offsetTop;
//   var animator = setTimeout('resetScroller(\'' + el + '\')', speed);
//   if (currentY > targetY) {
//     scrollY = currentY - distance;
//     window.scroll(0, scrollY);
//   } else {
//     clearTimeout(animator);
//   }
// }