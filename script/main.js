// dpormenu-header
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

$(window).on('load', function(){
// header-slider
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    variableWidth: true,
  });
// sell-slider
  $('.sell').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: false,
    initialSlide: 1,
    variableWidth: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  });
// review-slider
  $('.review__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: false,
    dotsClass: 'slick-dots',
    initialSlide: 1,
    variableWidth: true,
    centerMode: true, 
    focusOnSelect: true,
  });
});

$(document).ready(function() {
  const sliderHouse = $('.recommendation__content-house');
  const sliderVilla = $('.recommendation__content-villa');
  const sliderApartman = $('.recommendation__content-apartman');

  sliderHouse.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1000, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          dotsClass: 'dots-recommendation'
        }
      },
      {
        breakpoint: 426, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        }
      },
    ]
  });

  sliderVilla.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1000, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          dotsClass: 'dots-recommendation'
        }
      },
      {
        breakpoint: 426, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        }
      },
    ]
  });

  sliderApartman.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1000, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          dotsClass: 'dots-recommendation'
        }
      },
      {
        breakpoint: 426, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        }
      },
    ]
  });

  $('#btn-house').on('mousedown', function() {
    $('.btn').removeClass('active');
    $(this).addClass('active');
    sliderHouse.show();
    sliderVilla.hide();
    sliderApartman.hide();
    sliderHouse.slick('slickGoTo', 0, true); // Переключити на перший слайд у sliderHouse
  });

  $('#btn-villa').on('mousedown', function() {
    $('.btn').removeClass('active');
    $(this).addClass('active');
    sliderVilla.show();
    sliderHouse.hide();
    sliderApartman.hide();
    sliderVilla.slick('slickGoTo', 0, true); // Переключити на перший слайд у sliderVilla
  });

  $('#btn-apartman').on('mousedown', function() {
    $('.btn').removeClass('active');
    $(this).addClass('active');
    sliderApartman.show();
    sliderHouse.hide();
    sliderVilla.hide();
    sliderApartman.slick('slickGoTo', 0, true); // Переключити на перший слайд у sliderApartman
  });

  $('.prev-arrow').click(function() {
    if (sliderHouse.is(':visible')) {
      sliderHouse.slick('slickPrev');
    } else if (sliderVilla.is(':visible')) {
      sliderVilla.slick('slickPrev');
    } else if (sliderApartman.is(':visible')) {
      sliderApartman.slick('slickPrev');
    }
  });

  $('.next-arrow').click(function() {
    if (sliderHouse.is(':visible')) {
      sliderHouse.slick('slickNext');
    } else if (sliderVilla.is(':visible')) {
      sliderVilla.slick('slickNext');
    } else if (sliderApartman.is(':visible')) {
      sliderApartman.slick('slickNext');
    }
  });
});

document.querySelector('.header__burger').addEventListener('click', function(){
  this.classList.toggle('active');
  document.querySelector('.header__nav-nav').classList.toggle('open');
})


