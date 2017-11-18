/***********************

	Reconnect Campaign
	William Soeltz-Szoets
    UML Senior Studio Spring 2014
    How JS page

***********************/

$(document).ready(function(){


    var position = $(window).scrollTop(); //value used to determine current screen position, should start at 0
    
    $(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});//load reconnect video in footer

    $(window).scroll(function(){ //function performing actions on scroll
        position = $(window).scrollTop();
        $("#introWrapper").css("background-position","center "+((-position/3)-120)+"px");   //updates the css to allow for slow scrolling
    });

   
});

