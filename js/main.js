// Testimonial 
var test_s = $("#test-slider");
    test_s.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: false,
        autoplay: true,
        onInitialized: function() {
        	var a = this.items().length;
        	if(a < 10){
            	$("#sn-2").html("<span>01" + "/ </span>0" + a);
       		} else{
       			$("#sn-2").html("<span>01" + "/ </span>" + a);
       		}
        }
    }).on("changed.owl.carousel", function(a) {
        var b = --a.item.index, a = a.item.count;
        if(a < 10){
        	$("#sn-2").html("<span>0" + ( 1 > b ? b + a : b > a ? b - a : b) + "/ </span>0" + a);
    	} else{
    		$("#sn-2").html("<span> "+ (1 > b ? b + a : b > a ? b - a : b) + "/ </span>" + a);
    	}
    });

// Video Pop-up 
$('.video-popup').magnificPopup({
    type: 'iframe'
});

// Gallery 
$('#client-carousel').owlCarousel({
    nav: false,
    loop: true,
    margin:20,
    autoplay: true,
    responsive:{
        0:{
            items:1,
            margin: 0
        },
        600:{
            items:3
        },
        800:{
            items:4
        },
        992:{
            items:4
        },
        1200:{
            items:5
        },
    }
});


// Service 
$('.service-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
    dots: true,
    autoplay: true,
});

// Cursor 
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

// Service 
$('.service-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
    dots: true,
    autoplay: true,
});


