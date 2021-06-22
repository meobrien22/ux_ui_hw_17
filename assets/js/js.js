var h;
$(document).ready(function() {
// get nav height
	h = $('.dropdown-nav').height();
	h = h + 'px';
	console.log(h);
	$('.dropdown-nav').css('height', '0');
});

$('#nav').click(function() {
	if ($(this).hasClass('show')) {
		$('.dropdown-nav').css('height', '0');
		$(this).removeClass('show');
	} else {
		$('.dropdown-nav').css('height', h);
		$(this).addClass('show');
	}
});

window.sr = ScrollReveal({
	reset: false,
	origin: 'right',
	distance: '80px',
	duration: 800,
	delay: 10,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
});
sr.reveal('.block1', {distance: '0px'});
sr.reveal('.block2', { delay: 200, origin: 'right'});
sr.reveal('.img1', { delay: 100, origin: 'left'});
sr.reveal('.img2', { delay: 400, origin: 'top'});