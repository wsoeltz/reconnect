/***********************

	Reconnect Campaign
	William Soeltz-Szoets
    UML Senior Studio Spring 2014
    How JS page

***********************/

var title = new Array();
var description = new Array();
var cost = new Array();
var time = new Array();
var learnability = new Array();
var intensity = new Array();

var i = 0;
var current = 9;
//initialization of all variables
{
    title[i]="archery";
    description[i]="Archery is the sport where one uses a bow and arrow to hit a target. It is typically done in more mild weather, such as the spring, summer and fall. While purchasing your own equipement can be costly, there are many beginner lessons offered for fairly cheap rates. While there can be a bit of a learning curve, people of all skills can stop by and take lessons.";
    cost[i]=3;
    time[i]=3;
    learnability[i]=6;
    intensity[i]=3;
    i++;

    title[i]="backpacking";
    description[i]="Backpacking is the next step up from hiking. When one refers to a backpacking trip versus a hiking trip, it is usually a multi-day expedition. The same knowledge base that applies to hiking still applies here, however additional understanding of the weather and terrain is needed. Backpacking also requires additional equipement, such as a tent, sleeping bag, and stove.";
    cost[i]=6;
    time[i]=8;
    learnability[i]=4;
    intensity[i]=5;
    i++;

    title[i]="backyard sports";
    description[i]="Backyard sports is an umbrella term for your standard 'sports,' such as basketball, soccer, and frisbee. These can be great activities to do with friends and don't require a large time commitment and the equipement is fairly cheap.";
    cost[i]=2;
    time[i]=2;
    learnability[i]=3;
    intensity[i]=3;
    i++;

    title[i]="biking";
    description[i]="From mountain biking to road biking, there are a lot of different ways to enjoy this sport. Biking requires mild or greater conditions, as most bikes cannot go through the snow. If you have never ridden a bike before it may be a little tricky to learn, but once you get the hang of it it is a skill you will have for life. The cost of a new bike is very expensive, but it is also possible to rent.";
    cost[i]=6;
    time[i]=3;
    learnability[i]=6;
    intensity[i]=3;
    i++;

    title[i]="cross-country skiing";
    description[i]="Also known as nordic skiing, cross-country skiing is an excellent way to get active in the winter. It is an excellent full-body workout as it engages muscles throughout your entire body as well as your cardio. Unlike its downhill equivalent, cross-country skiing is fairly affordable. The skis cost a tenth of the price, and trail access is also fairly cheap. More so, if you buy your own skis, you can take them anywhere you want.";
    cost[i]=4;
    time[i]=3;
    learnability[i]=6;
    intensity[i]=6;
    i++;

    title[i]="diving";
    description[i]="If you want an experience that gets your feet off the ground, scuba diving is one option. It is a great way to experience parts of the world you would normally never see. It is however pretty costly and requires some training. For a cheaper, faster alternative you could also try snorkeling.";
    cost[i]=9;
    time[i]=8;
    learnability[i]=8;
    intensity[i]=8;
    i++;

    title[i]="dog sledding";
    description[i]="Dog Sledding is an interesting way to tour the backcountry. Training your own dogs requires a huge amount of time, money and dedication. However there are places that offer beginner lessons as well as rides and tours, which would be more ideal for someone not necessarily looking to get into the sport.";
    cost[i]=4;
    time[i]=4;
    learnability[i]=1;
    intensity[i]=1;
    i++;

    title[i]="fishing";
    description[i]="Fishing is a relaxing way to spend some time outdoors. There are many places and ways to fish, and there is a bit of a learning curve, but it is possible to jump right in. The cost of basic fishing gear is not to expensive either.";
    cost[i]=2;
    time[i]=2;
    learnability[i]=3;
    intensity[i]=1;
    i++;

    title[i]="golf";
    description[i]="Golf is the expensive summer sport. It can be a great time to get out on the course, but it can certainly involve some cash and there is a bit of a learning curve.";
    cost[i]=7;
    time[i]=5;
    learnability[i]=6;
    intensity[i]=2;
    i++;

    title[i]="hiking";
    description[i]="Hiking is a great activity for all levels. It is a great way to get immersed into the world and can be a completely customizable experience. Trips can last a half hour up your local hill, or you can take day long expeditions across mountains. Equipment needed is relatively minimal, although essential. There is generally not much of learning curve, but some hikes can be more tricky then others.";
    cost[i]=2;
    time[i]=4;
    learnability[i]=2;
    intensity[i]=4;
    i++;

    title[i]="horseback riding";
    description[i]="Horseback riding can allow for a variety of experiences. You can find places that offer lessons, as well as places that offer horseback tours. For trips like this, the learning curve is relatively low as the horses are already well trained. They can be costly though.";
    cost[i]=5;
    time[i]=4;
    learnability[i]=2;
    intensity[i]=2;
    i++;

    title[i]="ice climbing";
    description[i]="Ice climbing can be an exhilirating experience in the winter. It offers a host of challenges, as every winter the terrain is going to be different. Guided tours are offered that include instruction and gear. They aren't to expensive but generally require good physical condition.";
    cost[i]=4;
    time[i]=4;
    learnability[i]=6;
    intensity[i]=6;
    i++;

    title[i]="ice skating";
    description[i]="Ice Skating is a great afternoon activity. Renting gear at an ice rink is very affordable, and can be done for as long or as short as you'd like. If you have never skated before, there can be a bit of a learning curve.";
    cost[i]=2;
    time[i]=2;
    learnability[i]=4;
    intensity[i]=3;
    i++;

    title[i]="paddling and rowing";
    description[i]="If you are looking for a good time on the water, paddling and rowing is a good bet. This includes everything from kayaking, to rowboats, to paddleboards. Renting the equipement is moderately expensive for a few hours, however the learning curve is generally not to high. The physical intensity comes down to how hard you want to push yourself.";
    cost[i]=5;
    time[i]=4;
    learnability[i]=3;
    intensity[i]=4;
    i++;

    title[i]="rock climbing";
    description[i]="Indoor or outdoor, rock climbing is both a mental and physical challenge. There can be a bit of learning curve, but most rock climbing gyms offer affordable lessons. Passes and rentals are generally not to expensive either.";
    cost[i]=3;
    time[i]=3;
    learnability[i]=5;
    intensity[i]=5;
    i++;

    title[i]="rollerblading";
    description[i]="If you are looking for an affordable activity that can be done around the year, rollerblading is a good bet. Rollerblade rinks are very affordable, and while there is a learning curve, if you are determined you will pick it up quickly.";
    cost[i]=2;
    time[i]=2;
    learnability[i]=4;
    intensity[i]=4;
    i++;

    title[i]="rope course";
    description[i]="Rope courses provide a fun adventure without to much risk. There are plenty of thrills and not much experience necessary. They do cost some money however.";
    cost[i]=5;
    time[i]=4;
    learnability[i]=2;
    intensity[i]=3;
    i++;

    title[i]="running";
    description[i]="If you are looking to get outside and get some excericse but don't have the time or ability to go to somewhere cool, running is a great way to satisfy that urge. You can run pretty much anywhere, for however long you want, and at what any intensity you want, and all you need is a pair of running shoes.";
    cost[i]=1;
    time[i]=1;
    learnability[i]=1;
    intensity[i]=2;
    i++;

    title[i]="skiing/ snowboarding";
    description[i]="Skiing and snowboarding are excellent ways to enjoy the winter. They offer thrills in the mountains while still getting to be physically active. They do cost a good amount of money, as well as having a strong learning curve and a large time commitment.";
    cost[i]=9;
    time[i]=7;
    learnability[i]=7;
    intensity[i]=6;
    i++;
    
    title[i]="snorkeling";
    description[i]="If you want to get underwater but don't have the time and money to devote to scuba diving, then snorkeling is a great alternative. It can cost a little bit of money for lessons and tours, but it is open to people of all levels.";
    cost[i]=5;
    time[i]=4;
    learnability[i]=3;
    intensity[i]=3;
    i++;
    
    title[i]="snowshoeing";
    description[i]="If you are looking for the hiking experience in the winter, snowshoeing is the way to go. Unlike summer hiking, winter hiking requires a great deal more equipement, knowledge, and physical ability. This is due to a much greater risk level that is brought about during winter hiking.";
    cost[i]=6;
    time[i]=4;
    learnability[i]=5;
    intensity[i]=5;
    i++;
    
    title[i]="surfing";
    description[i]="Surfing is a water sport, and unlike the other boat related sports, it has you using a board to ride the waves. Surfing can have strong learning curve, as well as fairly expensive equipement.";
    cost[i]=7;
    time[i]=5;
    learnability[i]=8;
    intensity[i]=5;
    i++;
    
    title[i]="swimming";
    description[i]="If you are just looking to get into the water, swimming is a great way to get out. There are many places to swim, from pools to lakes to oceans. If you don't know how to swim, you should take some lessons, as it is a great skill to have and can be a lot of fun.";
    cost[i]=2;
    time[i]=2;
    learnability[i]=3;
    intensity[i]=2;
    i++;
    
    title[i]="walking";
    description[i]="If you just need to get out, trying going for a walk. You don't need any special gear and you can go for as long as you want. Just get outside and go for a walk!";
    cost[i]=1;
    time[i]=1;
    learnability[i]=1;
    intensity[i]=1;
    i++;
    
    title[i]="white water rafting";
    description[i]="If you want some water based thrills, getting on the white water can be a great time. They offer guided tours for a decent amount of cash, however there is almost no learning or athletic ability needed for these tours.";
    cost[i]=7;
    time[i]=7;
    learnability[i]=2;
    intensity[i]=2;
    i++;
    
}


$(document).ready(function(){


    var position = $(window).scrollTop(); //value used to determine current screen position, should start at 0
    
    $(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});//load reconnect video in footer

    $(window).scroll(function(){ //function performing actions on scroll
        position = $(window).scrollTop();
        $("#introWrapper").css("background-position","center "+((-position/3)-320)+"px");   //updates the css to allow for slow scrolling
    });

    $(function(){
        $('#options').jScrollPane();
    });



    //.click functions for changing content
    {
        $( "#list00" ).click(function() {
            updateContent(0);
        });
        $( "#list01" ).click(function() {
            updateContent(1);
        });
        $( "#list02" ).click(function() {
            updateContent(2);
        });
        $( "#list03" ).click(function() {
            updateContent(3);
        });
        $( "#list04" ).click(function() {
            updateContent(4);
        });
        $( "#list05" ).click(function() {
            updateContent(5);
        });
        $( "#list06" ).click(function() {
            updateContent(6);
        });
        $( "#list07" ).click(function() {
            updateContent(7);
        });
        $( "#list08" ).click(function() {
            updateContent(8);
        });
        $( "#list09" ).click(function() {
            updateContent(9);
        });
        $( "#list10" ).click(function() {
            updateContent(10);
        });
        $( "#list11" ).click(function() {
            updateContent(11);
        });
        $( "#list12" ).click(function() {
            updateContent(12);
        });
        $( "#list13" ).click(function() {
            updateContent(13);
        });
        $( "#list14" ).click(function() {
            updateContent(14);
        });
        $( "#list15" ).click(function() {
            updateContent(15);
        });
        $( "#list16" ).click(function() {
            updateContent(16);
        });
        $( "#list17" ).click(function() {
            updateContent(17);
        });
        $( "#list18" ).click(function() {
            updateContent(18);
        });
        $( "#list19" ).click(function() {
            updateContent(19);
        });
        $( "#list20" ).click(function() {
            updateContent(20);
        });
        $( "#list21" ).click(function() {
            updateContent(21);
        });
        $( "#list22" ).click(function() {
            updateContent(22);
        });
        $( "#list23" ).click(function() {
            updateContent(23);
        });
        $( "#list24" ).click(function() {
            updateContent(24);
        });
    }

     draw();
});

function updateContent(count){
    $("#activityname").html(title[count]);
    $("#activitydescription").html(description[count]);
    current = count;
    draw();
};

function draw(){
    //find and define canvas
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    //draw circle
    ctx.beginPath();
    ctx.arc(160,160,160,0,2*Math.PI);
    ctx.fillStyle = '#64948c';
    ctx.fill();

    //draw grid
    ctx.beginPath();
    ctx.moveTo(160,0);
    ctx.lineTo(160,320);
    ctx.moveTo(0,160);
    ctx.lineTo(320,160);
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#e5e0de';
    ctx.stroke();


    //draw shape
    ctx.beginPath();
    ctx.moveTo(160-(cost[current]*16),160);
    ctx.lineTo(160,160-(learnability[current]*16));
    ctx.lineTo(160+(intensity[current]*16),160);
    ctx.lineTo(160,160+(time[current]*16));
    ctx.lineTo(160-(cost[current]*16),160);
    ctx.fillStyle = '#e5e0de';
    ctx.fill();
    
};