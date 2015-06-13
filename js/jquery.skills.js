//MUZZI HAHHAHAHAHAHAHAHA

$(function(){

	console.log("I am sentient!")

	//SETTING THEM VARIABLES
	var $wrapper = $(".about_slider");
	var $elements = $wrapper.children();
	var $pause = $("#slider_pause");
	var step = 1;
	var e = $elements.length;
	var index = 0;
	var $elementNumber = $elements.attr("data-slide");
	$elements.each(function(){
		index++;
		$(this).attr( "data-slide", ""+index+"");
	})
	var timer = null;
    var current = 0;


	function counter() {
        current = (current + 1) % 4;
        console.log(current);
        $selectedSlide = $('.slide[data-slide="'+(current+1)+'"]');
        $selectedSlide.addClass('slider_reveal');
        fadetimer = setTimeout(function(){
        	$selectedSlide.removeClass('slider_reveal');
        }, 3000);

    }


	function slide() {
    timer = setInterval(counter, 5000);
	}
	$pause.click(function(){
		$(this).find('i').toggleClass('fa-play').toggleClass('fa-pause');
		if ($(this).hasClass("clicked")){
    		timer = setInterval(counter, 5000);
    		fadetimer = setTimeout(function(){
        	$selectedSlide.removeClass('slider_reveal');
				}, 1500);
			$(this).removeClass("clicked");
			console.log("Resumed.")
		}
		else {
			console.log("Paused.");
			clearInterval(timer);
			clearInterval(fadetimer);
			$(this).addClass("clicked");
		}
	});
	slide();
})
