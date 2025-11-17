$(document).ready(function () {
	$('#nav button').on('click', function () {
		const scrollAnchor = $(this).attr('data-scroll'),
			scrollPoint =
				$('[data-anchor="' + scrollAnchor + '"]').offset().top -
				$('#stickyNav').outerHeight();
		$('body,html').animate(
			{
				scrollTop: scrollPoint,
			},
			'linear'
		);
		return false;
	});

	$(window)
		.scroll(function () {
			let windscroll = $(window).scrollTop();
			if (windscroll >= 0) {
				$('.anchor').each(function (i) {
					if (
						$(this).offset().top <=
						windscroll + $('#stickyNav').height() + 90
					) {
						$('#nav li.active').removeClass('active');
						$('#nav li').eq(i).addClass('active');
					}
				});
			} else {
				$('#nav li.active').removeClass('active');
				$('#nav li:first').addClass('active');
			}
		})
		.scroll();
});
