$(document).ready(function(){

  /* what happens when the resume request button is clicked*/
  $("#cv-download-text").click(function(){
      alert("something");
  });



  /* narrow screen menu open animation*/
  $(".toggler").click(function(){
    $("nav ul").toggleClass("visible")
  })



  /* testimony section arrow controls*/
  $(".testimony-content").first().addClass("testimony-visible");
  $(".testimonial-star").first().addClass("testimonial-star-active");

  $(".testimonial-right").click(function(){
    var $this = $(this);
    var curActiveClient = $(".testimonial-wrap").find(".testimony-visible");
    var position = $('.testimonial-wrap').children().index(curActiveClient);
    var clientNum = $('.testimony-content').length;

    if (position < clientNum - 1) {
      $(".testimony-visible").removeClass("testimony-visible").next().addClass("testimony-visible");
      $(".testimonial-star-active").removeClass("testimonial-star-active").next().addClass("testimonial-star-active");
    } else {
      $('.testimony-content').removeClass("testimony-visible").first().addClass("testimony-visible");
      $(".testimonial-star").removeClass("testimonial-star-active").first().addClass("testimonial-star-active");
    }
  })

  $(".testimonial-left").click(function(){
    var $this = $(this);
    var curActiveClient = $(".testimonial-wrap").find(".testimony-visible");
    var position = $('.testimonial-wrap').children().index(curActiveClient);
    var clientNum = $('.testimony-content').length;

    if (position === 0) {
      $('.testimony-content').removeClass("testimony-visible").last().addClass("testimony-visible");
      $(".testimonial-star").removeClass("testimonial-star-active").last().addClass("testimonial-star-active");
    } else {
      $(".testimony-visible").removeClass("testimony-visible").prev().addClass("testimony-visible");
      $(".testimonial-star-active").removeClass("testimonial-star-active").prev().addClass("testimonial-star-active");
    }
  })



  /* wide screen nav bar appears when out of header section*/
  $('.header').on('inview', function(event, isInView){
    if (isInView == true) {
      $('.navigation').removeClass('navigation-invisible');
    } else {
      $('.navigation').addClass('navigation-invisible');
    }
  })



  /* portfolio section animations*/
  $(".project").hover(function(){
    $(this).find(".project-silde").css("top", "0%");
    $(this).find("span").css("opacity", "1");
  }, function(){
    $(this).find(".project-silde").css("top", "75%");
    $(this).find("span").css("opacity", "0");
  })

  $(".program").hover(function(){
    $(this).find(".program-silde").css("top", "0%");
    $(this).find("span").css("opacity", "1");
  }, function(){
    $(this).find(".program-silde").css("top", "75%");
    $(this).find("span").css("opacity", "0");
  })

    /* end*/
})
