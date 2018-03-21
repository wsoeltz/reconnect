/***********************

	Reconnect Campaign
	William Soeltz-Szoets
    UML Senior Studio Spring 2014
    Main JS page

***********************/




$(document).ready(function(){

	var position = $(window).scrollTop(); //value used to determine current screen position, should start at 0
	var start = position;
    var direction;
    var clockSize;
    var clockCenter;
    var clockTime;

    $(window).scroll(function(){ //function performing actions on scroll

    	//checks if scrolling up or down
    	var scroll = $(window).scrollTop();
	    if(scroll > position) {
	         // scrolling downwards
             direction = 0;
	    } else {
	         // scrolling upwards
             direction = 1;
	    }
	    position = scroll; //changes position to current position on screen
        var windowwidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        console.log(windowwidth);

        $("body").css("background-position","center "+(-position/5.25)+"px");   //updates the css to allow for slow scrolling

        //$("#position").html( position + "/" + start );/* outputes current bgpoint value, remove from final */


        //"How much time is spent on screen?"
        elementPositioning("#question", 200, 800, 5500, 0.9, 100, 900);

        //Clock
        elementPositioning("#clock", 900, 1140, 8000, 1, 250, 1400);

        //Take the average life span of 79 years
        if (position < 1700) {
            elementPositioning("#basedAverage_holder", 1200, 1200, 5500, 1, 350, 1500);
            if (windowwidth > 990) {
                if ($("#basedAverage_holder").css('position') == 'fixed') {
                    $("#basedAverage_holder").css({
                        'padding-left': 200,
                        'left': 0
                        });
                } else {
                    $("#basedAverage_holder").css({
                        'padding-left': 0,
                        'left': -12
                        });
                }
            }
        }
        else {
            elementPositioning("#basedAverage_holder", 1200, 1880, 5500, 1, 168, 2050);
            if (windowwidth > 990) {
                if ($("#basedAverage_holder").css('position') == 'fixed') {
                    $("#basedAverage_holder").css({
                        'padding-left':200,
                        'left': 0
                    });
                } else {
                    $("#basedAverage_holder").css({
                        'padding-left':0,
                        'left': -12
                    });
                }
            }
        }

        //and subtract
        if (position < 2200) {
            elementPositioning("#subtract_holder", 1650, 1650, 5500, 1, 350, 1500);
            if (windowwidth > 990) {
                if ($("#subtract_holder").css('position') == 'fixed') {
                    $("#subtract_holder").css({
                        'padding-left':200,
                        'left': 0
                    });
                } else {
                    $("#subtract_holder").css({
                        'padding-left':0,
                        'left': -12
                    });
                }
            }
        }
        else {
            elementPositioning("#subtract_holder", 1650, 2325, 5500, 1, 226, 2550);
            if (windowwidth > 990) {
                if ($("#subtract_holder").css('position') == 'fixed') {
                    $("#subtract_holder").css({
                        'padding-left':200,
                        'left': 0
                    });
                } else {
                    $("#subtract_holder").css({
                        'padding-left':0,
                        'left': -12
                    });
                }
            }
        }

        //show necessities list
        elementPositioning("#necessities", 2150, 2450, 5500, 1, 284, 4550);
        showListItem("li#sleeping", 2700)
        showListItem("li#eating", 2950)
        showListItem("li#cleaning", 3300)
        showListItem("li#school", 3550)
        showListItem("li#driving", 3700)
        showListItem("li#working", 3950)

        //You are left with only 33 years
        elementPositioning("#only33", 5800, 5800, 8000, 1, 275, 6200);

        //60% will be spent in front of a screen
        elementPositioning("#sixtyPercent", 6500, 6500, 8000, 1, 325, 6200);

        //You are left with only 9 years to live
        elementPositioning("#timeRemains", 8500, 8500, 11000, 0.8, 325, 6200);









        //adjusts clock colors & text inside
        {
            if (position > 2800 && position < 4500){

                clockSize = (((4500-position)/1700)*100)+185;
                clockCenter = 142-(clockSize/2);
                clockTime = Math.round(79*clockSize/285*.65);

                $("#clockWhite").css({
                        "width": clockSize+"px",
                        "height": clockSize+"px",
                        "top":clockCenter+"px",
                        "left":clockCenter+"px"
                    });
                $("#clockText").html(clockTime+"<span class='clockSub'>years</span>");
            }
            else if (position < 2800){
                $("#clockWhite").css({
                    "width": "285px",
                    "height": "285px",
                    "top": "0px",
                    "left": "0px"
                });
                clockTime = 79;
                $("#clockText").html(clockTime+"<span class='clockSub'>years</span>");

            }
            else if (position > 4500){
                $("#clockWhite").css({
                    "width": "185px",
                    "height": "185px",
                    "top": "49px",
                    "left": "49px"
                });
                clockTime = 33;
                $("#clockText").html(clockTime+"<span class='clockSub'>years</span>");

                if (position > 6550 && position < 6900){

                    clockSize = (((6900-position)/400)*100)+100;
                    clockCenter = 142-(clockSize/2);
                    clockTime = Math.round(79*clockSize/285*.6);

                    $("#clockWhite").css({
                        "width": clockSize+"px",
                        "height": clockSize+"px",
                        "top":clockCenter+"px",
                        "left":clockCenter+"px"
                    });
                    $("#clockText").html(clockTime+"<span class='clockSub'>years</span>");
                }

            }
            if (position >= 6900){
                $("#clockWhite").css({
                    "width": "100px",
                    "height": "100px",
                    "top": "92px",
                    "left": "92px"
                });
                $("#clockText").html("9<span class='clockSub'>years</span>");
            }
        }

    })



function elementPositioning(divname, startposition, minposition, maxposition, maxopacity, fixedposition, absoluteposition){
            if (position > startposition && position < maxposition){//hides and shows
                $(divname).css({
                    "display": "block"
                });

                //fade in element
                if (position < startposition+100)
                    $(divname).css({
                        "opacity":"0.2",
                        "filter":"alpha(opacity=20)"
                    });
                else if (position < startposition+200)
                    $(divname).css({
                        "opacity":"0.4",
                        "filter":"alpha(opacity=40)"
                    });
                else if (position < startposition+300)
                    $(divname).css({
                        "opacity":"0.7",
                        "filter":"alpha(opacity=70)"
                    });


                //fade out element
                else if (position > maxposition-100)
                    $(divname).css({
                        "opacity":"0.2",
                        "filter":"alpha(opacity=20)"
                    });
                else if (position > maxposition-200)
                    $(divname).css({
                        "opacity":"0.4",
                        "filter":"alpha(opacity=40)"
                    });
                else if (position > maxposition-300)
                    $(divname).css({
                        "opacity":"0.7",
                        "filter":"alpha(opacity=70)"
                    });

                //set the maxopacity of the element
                else
                    $(divname).css("opacity",maxopacity);
                    $(divname).css("filter","alpha(opacity="+maxopacity*100+")");
            }
            else
                $(divname).css({
                    "display": "none"
                });

            //sets between what range the element is static to static at set position
            if (position > minposition && position < maxposition){
                $(divname).css({
                    "position": "fixed",
                    "top": fixedposition+"px"
                });
            }
            //sets the otherwise position of the element on the page
            else{
                $(divname).css({
                    "position": "absolute",
                    "top": (absoluteposition-150)+"px"
                });
            }
        }

function showListItem(itemname, startposition){
    var endposition = 5800;
    if (position > startposition && position < endposition)
        $(itemname).css({
            "display": "block"
        });
    else
        $(itemname).css({
            "display": "none"
        });
    //fade in element
    if (position < startposition+100)
        $(itemname).css({
            "opacity":"0.2",
            "filter":"alpha(opacity=20)"
        });
    else if (position < startposition+200)
        $(itemname).css({
            "opacity":"0.4",
            "filter":"alpha(opacity=40)"
        });
    else if (position < startposition+300)
        $(itemname).css({
            "opacity":"0.7",
            "filter":"alpha(opacity=70)"
        });


    //fade out element
    else if (position > endposition-100)
        $(itemname).css({
            "opacity":"0.2",
            "filter":"alpha(opacity=20)"
        });
    else if (position > endposition-200)
        $(itemname).css({
            "opacity":"0.4",
            "filter":"alpha(opacity=40)"
        });
    else if (position > endposition-300)
        $(itemname).css({
            "opacity":"0.7",
            "filter":"alpha(opacity=70)"
        });

    //set the maxopacity of the element
    else
        $(itemname).css("opacity","1");
        $(itemname).css("filter","alpha(opacity=100)");
}


})

$('div#topLogo').on('click', function(){
    var body = $("html, body");
    body.stop().animate({scrollTop:$(window).height()*.75}, 800, 'swing', function() {});
});