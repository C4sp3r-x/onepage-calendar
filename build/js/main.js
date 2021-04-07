
jQuery(function($){

var $window = $(window);
var ww = $window.width();
var wh = $window.height();

/*$.ajax({
	  url: "calendar.html",
	  //context: document.body
}).done(function(data) {

	$(data).appendTo($('.js-calendar-block'));
	init();
});*/

init();

function init(){


	$('.is-clone').remove();
	$(".js-lesson").each(function(){
		var id = $(this).data('id');

		var posStart = $('#'+id).position();
		var posEnd = $('#'+id).nextAll('.js-lesson-end:first').position();

		var endWidth = $('#'+id).nextAll('.js-lesson-end:first').width();
		var parentWidth = $('#'+id).nextAll('.js-lesson-end:first').parent().width();

		//console.log(posStart);
		if( posEnd == undefined){
			$('.'+id).css('left', posStart.left);
			var cloneLesson = $(this).clone();
			var $nextParent = $('#'+id).parent().next();
			var parentWidth2 = $nextParent.width();
			

			//var lessonСontin = $nextParent.find('.js-lesson:first');
			var posStart2 = $nextParent.find('.js-lesson-start:first').position();
			var posEnd2 = $nextParent.find('.js-lesson-end:first').position();
			var endWidth2 = $nextParent.find('.js-lesson-end:first').width();
	//console.log( endWidth2 );
	//console.log( posEnd2.left );
			
			cloneLesson
				.addClass('is-clone')
				.removeClass('calendar-block__lesson--no-end')
				.addClass('calendar-block__lesson--no-start')
				.css('left', posStart2.left)
				.css('right', parentWidth2 - posEnd2.left - endWidth2)
				.appendTo( $nextParent );
			//lessonСontin.css('left', posStart2.left).css('right', parentWidth - posEnd2.left - endWidth);

			
		}else{
			//console.log(parentWidth - posEnd.left - endWidth);
			$('.'+id).css('left', posStart.left).css('right', parentWidth - posEnd.left  - endWidth);
		}

		
	});
}



$window.load(function(){
	
});

$window.resize(function(){
	if($window.width() != ww){
		ww = $window.width();
		wh = $window.height();
	
		init();
	}	
});


});	



