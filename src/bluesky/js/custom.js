/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Home Slider
5. Init Recent Slider

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
	initHomeSlider();
	initRecentSlider();

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

	4. Init Home Slider

	*/

	function initHomeSlider()
	{
		if($_('.home_slider').length)
		{
			var homeSlider = $_('.home_slider');
			homeSlider.owlCarousel(
			{
				items:1,
				autoplay:false,
				loop:true,
				smartSpeed:1200,
				nav:false,
				dots:false,
				mouseDrag:false
			});
		}
	}

	/*

	5. Init Recent Slider

	*/

	function initRecentSlider()
	{
		if($_('.recent_slider').length)
		{
			var recentSlider = $_('.recent_slider');
			recentSlider.owlCarousel(
			{
				items:3,
				autoplay:false,
				loop:true,
				smartSpeed:1200,
				nav:false,
				dots:false,
				responsive:
				{
					0:
					{
						items:1
					},
					991:
					{
						items:2
					},
					1199:
					{
						items:3
					}
				}
			});

			if($_('.recent_slider_prev').length)
			{
				var prev = $_('.recent_slider_prev');
				prev.on('click', function()
				{
					recentSlider.trigger('prev.owl.carousel');
				});
			}

			if($_('.recent_slider_next').length)
			{
				var next = $_('.recent_slider_next');
				next.on('click', function()
				{
					recentSlider.trigger('next.owl.carousel');
				});
			}
		}
	}

});
