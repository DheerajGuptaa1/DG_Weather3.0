$(function ()
{
    $(document).tooltip();
});

/*1st Menu in Mobile media screen*/
$(function()
{
    $(".mob").click(function()
    {
        $(".collapseMob").slideToggle();
        $(this).toggleClass("active");
    })
});

/* Navigating to Particular Section*/
$("nav ul li a").click(function(e)
{
  e.preventDefault();

//   $("nav ul li a").removeClass("active");
//   $(this).addClass("active");

  var id=$(this).attr("href");
  var top=$(id).offset().top;
  $("body,html").animate
  ({
        scrollTop:top-100
  });
});

/* Scroll to Top*/
$(".top").click(function()
{
    $("body,html").animate(
    {
        scrollTop:0,
    },1500)
});

$(window).scroll(function()
{
    var y=$(this).scrollTop();
    var vh=$(window).height();

    if(y>=500){
        $(".top").fadeIn()
    }
    else{
        $(".top").fadeOut()
    }       
});