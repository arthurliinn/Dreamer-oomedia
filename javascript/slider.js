	//slider
	var swiper = new Swiper('.swiper-container', {
		// cssMode: true,
		mousewheel: false,
		loop: true,
		slidesPerView: 1,
		spaceBetween: 30,
		simulateTouch: true,
		centeredSlides: true,
		speed: 1000,
		effect:'fade',
		autoplay: {
			delay: 5000,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		mousewheel: true,
		keyboard: true,
	});
	swiper.mousewheel.disable();