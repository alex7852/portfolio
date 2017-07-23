$(function() {

  // variables

 var $isAnimatedSecond = $('.second .is-animated'),
      $isAnimatedSecondSingle = $('.second .is-animated__single'),
      $isAnimatedThird = $('.third .is-animated'),
      $isAnimatedThirdSingle = $('.third .is-animated__single'),
      $isAnimatedFourth = $('.fourth .is-animated'),
      $isAnimatedFourthSingle = $('.fourth .is-animated__single');
      $isAnimatedFive = $('.five .is-animated'),
      $isAnimatedFiveSingle = $('.five .is-animated__single');

var doFullpage = document.documentElement.clientWidth;
if (doFullpage > 1200) {

  $('#fullpage').fullpage({
fixedElements: '.menu,.stage',
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
  onLeave: function(index, nextIndex, direction) {

      // first animation
      if( index == 1 && nextIndex == 2 ) { 
        $isAnimatedSecond.addClass('animated fadeInUp'); 
        $isAnimatedSecond.eq(0).css('animation-delay', '1.2s');
        $isAnimatedSecond.eq(1).css('animation-delay', '1.4s');
        $isAnimatedSecond.eq(2).css('animation-delay', '1.5s');
        $isAnimatedSecondSingle.addClass('animated fadeInRight').css('animation-delay', '.3s');
      }

      // second animation
      else if( ( index == 1 || index == 2 ) && nextIndex == 3 ) {
      	$isAnimatedThird.addClass('animated fadeInUp'); 
        $isAnimatedThird.eq(0).addClass('animated fadeInUp').css('animation-delay', '1.1s'); 
        $isAnimatedThird.eq(1).addClass('animated fadeInUp').css('animation-delay', '1.2s');
        $isAnimatedThird.eq(2).addClass('animated fadeInUp').css('animation-delay', '1.3s');
        $isAnimatedThird.eq(3).addClass('animated fadeInUp').css('animation-delay', '1.4s');
        $isAnimatedThird.eq(4).addClass('animated fadeInUp').css('animation-delay', '1.5s');
        $isAnimatedThird.eq(5).addClass('animated fadeInUp').css('animation-delay', '1.6s');
        $isAnimatedThird.eq(6).addClass('animated fadeInUp').css('animation-delay', '1.7s');
        $isAnimatedThird.eq(7).addClass('animated fadeInUp').css('animation-delay', '1.8s');
        $isAnimatedThirdSingle.addClass('animated fadeInLeft').css('animation-delay', '.3s');
      }

      // third animation
      else if( ( index == 1 || index == 2 || index == 3 ) && nextIndex == 4 ) {
        $isAnimatedFourth.addClass('animated fadeInUp').css('animation-delay', '1.6s');
        $isAnimatedFourthSingle.addClass('animated fadeInRight').css('animation-delay', '1.2s');
        
      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 ) && nextIndex == 5 ) {
        $isAnimatedFive.addClass('animated fadeInUp').css('animation-delay', '1.6s');
        $isAnimatedFiveSingle.addClass('animated fadeInLeft').css('animation-delay', '1.2s');
        
      }
    },
	afterLoad: function(anchorLink, index){
		var loadedSection = $(this);
			if(index % 2 === 0){
				$('.bar').css('background','#000');
			}			
			else{ 
				$('.bar').css({'background':'#fff','transition': '.45s'});
				$('.line').each(function() {
					var $this = $(this),
					lines = $this.attr('data-count');
					$(this).css({ 'height' : lines + '%', 'transition': 'ease-in 1.7s','z-index': '20'
				});
			})
			$('.counter').each(function() {
				var $this = $(this),
				countTo = 0;
			$({ countNum: $this.text()}).animate({
				countNum: countTo},
				{
					duration: 2000,
					easing:'linear',
					step: function() {
						$this.text(Math.floor(this.countNum));
					},
					complete: function() {
						$this.text(this.countNum);
							//alert('finished');
					}
				});  
			});
			}
			if(index === 3 ){ 
				$('.counter').each(function() {
					var $this = $(this),
					countTo = $this.attr('data-count');
				$({ countNum: $this.text()}).animate({
					countNum: countTo},
					{
						duration: 2000,
						easing:'linear',
						step: function() {
							$this.text(Math.floor(this.countNum));
						},
						complete: function() {
							$this.text(this.countNum);
							//alert('finished');
						}
					});
				});
			}
		}
      })
    var tam = 300;

  var section =  $('.section');
  function img() {
    var c = document.createElement("canvas");
    c.width = tam;
    c.height = tam;
    var o = c.getContext("2d");
    //Change your pixel size and shape, tam should leave no remainder when divided by either
    var pixelWidth = 1;
    var pixelHeight = 1;

    // Draw rectangles is faster than modify ImageData
    for(var y = 0; y < tam; y+=pixelHeight) {
      for(var x = 0; x < tam; x+=pixelWidth) {
        o.fillStyle = Math.random() < .009 ? "#48b282" : "#0E7D4B";
        o.fillRect(x, y, pixelWidth, pixelHeight);
      }
    }
    
    var img = c.toDataURL();
    
    section.css('background-image', 'url(\'' + img + '\')'); 
    mexer();
    
  }

  function mexer() {
    section.css('background-position', Math.floor(Math.random() * tam) + "px " + Math.floor(Math.random() * tam) + "px"); 
    if(typeof webkitRequestAnimationFrame == 'function'){
      webkitRequestAnimationFrame(mexer);
    } else if (typeof mozRequestAnimationFrame == 'function') {
      mozRequestAnimationFrame(mexer);
    } else if (typeof requestAnimationFrame == 'function') {
      requestAnimationFrame(mexer);
    }
  }

  img();
}
if (doFullpage < 1200){
  $(".sidebar-list").on("click"," .firstPage",function(e){e.preventDefault();var t="#section0",o=$(t).offset().top+50;$("body,html").animate({scrollTop:o},1e3)}),
  $(".sidebar-list").on("click",".thirdPage",function(e){e.preventDefault();var t="#section2",o=$(t).offset().top+50;$("body,html").animate({scrollTop:o},1e3)}),
  $(".sidebar-list").on("click",".fivePage",function(e){e.preventDefault();var t="#section4",o=$(t).offset().top+50;$("body,html").animate({scrollTop:o},1e3)}),
  $(".sidebar-list").on("click",".ninethPage",function(e){e.preventDefault();var t="#section8",o=$(t).offset().top+50;$("body,html").animate({scrollTop:o},1e3)}),
  $(".sidebar-list").on("click"," .tenPage",function(e){e.preventDefault();var t="#section9",o=$(t).offset().top+50;$("body,html").animate({scrollTop:o},1e3)}),
  $("header").on("click"," .scroll",function(e){e.preventDefault();var t="#sec1",o=$(t).offset().top+50;$("body,html").animate({scrollTop:o},1e3)})
}

$('.owl-carousel').owlCarousel({
  		animateOut: 'fadeOut',
  		items:1,
  		loop:true,
  		autoplay:true,
  		autoplayTimeout: 4000,
  		autoplayHoverPause:true,
  		nav:true
});  	

///aнимация в форме
 $(".head-field").focus(function(){
  $(this).parent().addClass("is-active is-completed");
});

$(".head-field").focusout(function(){
  if($(this).val() === "")
    $(this).parent().removeClass("is-completed");
  	$(this).parent().removeClass("is-active");
})
setTimeout(function() {
	$('.wrapper').addClass('loaded');
	$(".letters").fadeOut("slow");
}, 3000)

 var modalSelectors = ['mainModal','disclaimer','tnx'];
  modalSelectors.forEach(function(item) {
    $('[data-href="' + item + '"]').animatedModal({
        modalTarget: item,
        animatedIn: 'fadeInUp',
        animatedOut: 'fadeOutDown',
        color: '#fff'
    })

    ;});

// Custom JS


function toggleSidebar() {
	$(".some_button").toggleClass("active");
	$(".sidebar").toggleClass("onSidebar");
	$(".noName").toggleClass("move-to-right");
	$(".sidebar-item").toggleClass("active");
}
$(".some_button").on("click tap", function() {
	    toggleSidebar();
});
  $(".sidebar-anchor").click(function(){
    toggleSidebar();
    
  })
$(document).keyup(function(e) {
	if (e.keyCode === 27) {
	    toggleSidebar();
	}
});


// import Chaffle from 'chaffle';

const elements = document.querySelectorAll('[data-chaffle]');
Array.prototype.forEach.call(elements, function (el) {
  const chaffle = new Chaffle(el, { 
   });
  el.addEventListener('mouseover', function () {
    chaffle.init();
  });});

  
});

  $('.share').mouseover(function(){
    $('.social').css({
        opacity:'1',
        display: 'block'});

    $('.social li').css({
        opacity:'1',
        display: 'inline-block',
        padding: '0px 10px 0px 10px',
        visibility: 'visible',
        animation: '1s fadeInRight'
      });
      
  })
  $('.share').mouseleave(function(){
      $('.social').css({
        opacity:'0',
        display: 'none'
        });
      $('.social li').css({
        opacity:'0',
        display: 'none',
        padding: '10px',
        visibility: 'hidden',
        animation: '1s fadeOutLeft',
        'transition': 'ease-in .45s',
        'animation-delay' :'.4'
        });
})



///preloader

var bounceIn = anime({
  targets: '.letter__part',
  translateY: {
				value: [-30, 0],
				duration: 900,
				elasticity: 600,
				easing: 'easeOutElastic'
			},
			opacity: {
				value: [0, 1],
				duration: 300,
				easing: 'linear'
			},
		delay: function(el, i) { return i * 40 }, 
  // delay increment per letter.
  });

var lineDrawing = anime({
  targets: '.color-2, .color-3',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeOutElastic',
  duration: 4000,
  delay: function(el, i) { return i * 60 },
  loop: true,
  direction: 'alternate',
});

////preloader
$(".prelodetTxt").lettering();
$(document).ready(function() {
  animation();
}, 1000);


function animation() {
  var title1 = new TimelineMax();
  title1.to(".button", 0, {visibility: 'hidden', opacity: 0})
  title1.staggerFromTo(".prelodetTxt span", 0.5, 
  {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
  {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
  title1.to(".button", 0.2, {visibility: 'visible' ,opacity: 1})
}
