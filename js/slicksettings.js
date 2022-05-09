$('.brand-slick').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4
            }
        }
    ]
  });