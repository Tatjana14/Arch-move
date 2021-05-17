$(document).ready(function() {
	$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
});


new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    keyboard : {
        enabled: true, 
        onlyInViewport: true,
        pageUpDown: true
    },
    autoHeight: true,
    /* autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnIteraction: false
    }, */
    speed: 500
});

let burger_Menu = document.querySelector('.header__navigation')

function burgerMenu(){
    let burger_Icon = document.getElementById('open-btn')
    let close_Icon = document.getElementById('close-btn')
    burger_Icon.addEventListener('click', toggleBurgerMenu)
    close_Icon.addEventListener('click', toggleBurgerMenu)
}

function toggleBurgerMenu(){
    burger_Menu.classList.toggle('header__navigation-active')
}
burgerMenu()