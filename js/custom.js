$(document).ready(function(){
    
//Navbar Menu ---------------
$(".header-menu").click(function(){
  $("body").addClass("active-menu")
})
$(".overlay,.close-btn,.main-menu-wrp ul li").click(function(){
  $("body").removeClass("active-menu")
})


$(window).scroll(function() {
  if ($(this).scrollTop() >= 100) {
    $('header').addClass('header-sticky');
  } else {
    $('header').removeClass('header-sticky');
  }
});

// Wait for the DOM to be fully loaded

  // Select the element to animate
  const box = document.querySelector('.box .first-h2');
  const box2 = document.querySelector('.box .sec-h2');

  // Create a GSAP timeline
  const textLeft = gsap.timeline({
      scrollTrigger: {
          scrub: true, // Smoothly animates in relation to scroll position
          duration: 1,
        
      }
  });
  const textRight = gsap.timeline({
      scrollTrigger: {
          scrub: true, // Smoothly animates in relation to scroll position
          duration: 1,

      }
  });

  // Add animations to the timeline
  textLeft.to(box, { x: '100vw',fontSize:70,color:"#f3a20d",opacity:1 });
  textRight.to(box2, { x: '-100vw',fontSize:70 ,color:"#f3a20d",opacity:1});

 // Animation using GSAP on scroll
//  window.addEventListener("scroll", function() {
//   var scrollY = window.scrollY;
//   gsap.to("#heroRightImg", { top: -scrollY, duration: 0.5, ease: "power2.out" });
// });

});

