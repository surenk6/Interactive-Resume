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
  $('.header-navigation').on('inview', function(event, isInView){
    if (isInView == true) {
      $('.navigation').removeClass('navigation-visible');
    } else {
      $('.navigation').addClass('navigation-visible');
    }
  })

  /* highlights the navigation bar item
  // on the section ofwhich you are on now*/

  var sections = $("body").find('section')
  var sectionIDs = [];
  for (var i = 0; i < sections.length; i++) {
    sectionIDs.push(sections[i].id);
  }
  console.log(sectionIDs)
  var index = sectionIDs.indexOf('skills');
        $(sections[index]).on('inview', function(event, isInView){
          if (isInView == true) {
            console.log('skills');
            $('#nav-skills').css("color", "orange");
          } else {
            $('#nav-skills').css("color", "inherit");
            console.log('no skills');
        }})



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
