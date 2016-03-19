// JavaScript Document
$(document).ready(function() {
	$('#filterOptions li a').click(function() {
		// fetch the class of the clicked item
		var ourClass = $(this).attr('class');
		
		
		// reset the active class on all the buttons
		$('#filterOptions li').removeClass('active');
		// update the active state on our clicked button
		$(this).parent().addClass('active');
		
			$('#filterbox').find('.item').hide();			
	
		if(ourClass == 'all') {
			// show all our items		
			$('#filterbox').find('.item').fadeIn("slow");
		}
		else {
			// hide all elements that don't share ourClass		
			$('#filterbox').find('.item:not(.' + ourClass + ')').fadeOut("slow");	
			
			// show all elements that do share ourClass		
			$('#filterbox').find('.item.' + ourClass).fadeIn("slow");
		}
		return false;
	});
});