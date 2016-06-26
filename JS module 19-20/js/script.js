$(function () {
	// section service
	$('.service-item__link, .service-item__img').hover(function (e) {
		if ( $(this).hasClass('service-item__img') ) {
			$(this).addClass('overlay');
		}
		if ( $(this).hasClass('service-item__link') ) {
			$(this).css({color: '#f4b60d'})
					 .siblings().addClass('overlay');
		}
	},function () {
		$('.service-item__img').removeClass('overlay');
		$('.service-item__link').css({color: ''});
	});


	$( "#accordion" ).accordion();


	$('.jcarousel').jcarousel()
						.jcarouselAutoscroll({
							interval: 3000,
							target: '+=1',
							autostart: true
						})
						.jcarousel({
							wrap: 'circular'
						});

	$('.jcarousel-control-prev')
			.on('jcarouselcontrol:active', function() {
				$(this).removeClass('inactive');
			})
			.on('jcarouselcontrol:inactive', function() {
				$(this).addClass('inactive');
			})
			.jcarouselControl({
				target: '-=1'
			});

	$('.jcarousel-control-next')
			.on('jcarouselcontrol:active', function() {
				$(this).removeClass('inactive');
			})
			.on('jcarouselcontrol:inactive', function() {
				$(this).addClass('inactive');
			})
			.jcarouselControl({
				target: '+=1'
			});

	$('.jcarousel-pagination')
			.on('jcarouselpagination:active', 'a', function() {
				$(this).addClass('active');
			})
			.on('jcarouselpagination:inactive', 'a', function() {
				$(this).removeClass('active');
			})
			.jcarouselPagination();

});//ready;
