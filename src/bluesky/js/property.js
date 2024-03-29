/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Intro Slider
5. Init Price Slider
6. Init Google Map


******************************/

$_(document).ready(function()
{
	"use strict";

	/*

	1. Vars and Inits

	*/

	var header = $_('.header');
	var menu = $_('.menu');
	var menuActive = false;
	var ctrl = new ScrollMagic.Controller();
	var map;

	setHeader();

	$_(window).on('resize', function()
	{
		setHeader();

		setTimeout(function()
		{
			$_(window).trigger('resize.px.parallax');
		}, 375);
	});

	$_(document).on('scroll', function()
	{
		setHeader();
	});

	initMenu();
	initIntroSlider();
	initPriceSlider();
	initGoogleMap();

	/*

	2. Set Header

	*/

	function setHeader()
	{
		if($_(window).scrollTop() > 127)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/*

	3. Init Menu

	*/

	function initMenu()
	{
		if($_('.hamburger').length && $_('.menu').length)
		{
			var hamb = $_('.hamburger');
			var close = $_('.menu_close_container');

			hamb.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
				else
				{
					closeMenu();
				}
			});

			close.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
				else
				{
					closeMenu();
				}
			});


		}
	}

	function openMenu()
	{
		menu.addClass('active');
		menuActive = true;
	}

	function closeMenu()
	{
		menu.removeClass('active');
		menuActive = false;
	}

	/*

	4. Init Intro Slider

	*/

	function initIntroSlider()
	{
		if($_('.intro_slider').length)
		{
			var introSlider = $_('.intro_slider');
			introSlider.owlCarousel(
			{
				items:1,
				loop:true,
				autoplay:false,
				smartSpeed:1200,
				dots:false,
				nav:false
			});

			if($_('.intro_slider_prev').length)
			{
				var prev = $_('.intro_slider_prev');
				prev.on('click', function()
				{
					introSlider.trigger('prev.owl.carousel');
				});
			}

			if($_('.intro_slider_next').length)
			{
				var next = $_('.intro_slider_next');
				next.on('click', function()
				{
					introSlider.trigger('next.owl.carousel');
				});
			}
		}
	}

	/*

	5. Init Price Slider

	*/

    function initPriceSlider()
    {
		$_('input[type="range"]').rangeslider(
		{
			// Feature detection the default is `true`.
			// Set this to `false` if you want to use
			// the polyfill also in Browsers which support
			// the native <input type="range"> element.
			polyfill: false,

			// Default CSS classes
			rangeClass: 'rangeslider',
			disabledClass: 'rangeslider--disabled',
			horizontalClass: 'rangeslider--horizontal',
			verticalClass: 'rangeslider--vertical',
			fillClass: 'rangeslider__fill',
			handleClass: 'rangeslider__handle',

			// Callback function
			onInit: function() {},

			// Callback function
			onSlide: function(position, value) {},

			// Callback function
			onSlideEnd: function(position, value) {}
		});
    }

    /*

	6. Init Google Map

	*/

	function initGoogleMap()
	{
		var myLatlng = new google.maps.LatLng(36.286728,-5.278741);
    	var mapOptions =
    	{
    		center: myLatlng,
	       	zoom: 17,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			draggable: true,
			scrollwheel: false,
			zoomControl: true,
			zoomControlOptions:
			{
				position: google.maps.ControlPosition.RIGHT_CENTER
			},
			mapTypeControl: false,
			scaleControl: false,
			streetViewControl: false,
			rotateControl: false,
			fullscreenControl: true,
			styles:
			[

			]
    	}

    	// Initialize a map with options
    	map = new google.maps.Map(document.getElementById('map'), mapOptions);

		// Re-center map after window resize
		google.maps.event.addDomListener(window, 'resize', function()
		{
			setTimeout(function()
			{
				google.maps.event.trigger(map, "resize");
				map.setCenter(myLatlng);
			}, 1400);
		});
	}

});
