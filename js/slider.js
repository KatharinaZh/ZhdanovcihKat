var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function() {
    var switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('.slide-nav-btn').click(function() {

        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });

    $('.slide-nav-btn:first-child').click(function() {
		$('li.slide-nav-btn:first-child').css('borderColor', '#1abb9c');
		$('li.slide-nav-btn:nth-child(3)').css('borderColor', 'white');
		$('li.slide-nav-btn:nth-child(2)').css('borderColor', 'white');
		$('li.slide-nav-btn:nth-child(4)').css('borderColor', 'white');
	 });
    $('.slide-nav-btn:nth-child(2)').click(function() {
		$('li.slide-nav-btn:nth-child(2)').css('borderColor', '#1abb9c');
		$('li.slide-nav-btn:first-child').css('borderColor', 'white');
		$('li.slide-nav-btn:nth-child(3)').css('borderColor', 'white');
		$('li.slide-nav-btn:nth-child(4)').css('borderColor', 'white');
	 });
    $('.slide-nav-btn:nth-child(3)').click(function() {
    	$('li.slide-nav-btn:nth-child(3)').css('borderColor', '#1abb9c');
		$('li.slide-nav-btn:nth-child(2)').css('borderColor', 'white');
		$('li.slide-nav-btn:nth-child(4)').css('borderColor', 'white');
		$('li.slide-nav-btn:first-child').css('borderColor', 'white');
	 });
    $('.slide-nav-btn:nth-child(4)').click(function() {
    	$('li.slide-nav-btn:nth-child(3)').css('borderColor', 'white');
		$('li.slide-nav-btn:nth-child(2)').css('borderColor', 'white');
		$('li.slide-nav-btn:nth-child(4)').css('borderColor', '#1abb9c');
		$('li.slide-nav-btn:first-child').css('borderColor', 'white');
	 });

function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}
});
