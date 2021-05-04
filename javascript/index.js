// fvのスライダー
$(".fv").slick({
  autoplay:true,
  arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1500,
    fade: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
});


// ハンバーガーメニューの動き
$(".burger").click(function(){
  $(".bar__mid").toggle();
  $(".bar__top").toggleClass("bar__top__rotate");
  $(".bar__bottom").toggleClass("bar__bottom__rotate");
  $(".nav__media").toggle();
});

$(".nav__media").click(function(){
  $(".nav__media").toggle();
});