import React, { Component } from 'react'

//import 'bootstrap/dist/css/bootstrap.css'
//import 'mdbreact/dist/css/mdb.css'
import "../bluesky/styles/bootstrap4/bootstrap.min.css"
import "../bluesky/plugins/font-awesome-4.7.0/css/font-awesome.min.css"
import "../bluesky/plugins/OwlCarousel2-2.2.1/owl.carousel.css"
import "../bluesky/plugins/OwlCarousel2-2.2.1/owl.theme.default.css"
import "../bluesky/plugins/OwlCarousel2-2.2.1/animate.css"
import "../bluesky/styles/main_styles.css"
import "../bluesky/styles/responsive.css"

//import "../bluesky/js/custom.js"

//import "../bluesky/js/jquery-3.2.1.min.js"
//import "../bluesky/styles/bootstrap4/popper.js"
//import "../bluesky/styles/bootstrap4/bootstrap.min.js"
//import "../bluesky/plugins/OwlCarousel2-2.2.1/owl.carousel.js"
//import "../bluesky/plugins/easing/easing.js"
//import "../bluesky/plugins/parallax-js-master/parallax.min.js"


import "bootstrap"
import "carousel"
import "easing"

import Carousel1 from '../components/carousel'

class Home extends Component{
  constructor(props){
    super(props)

    this.state={
      collapse: false,
      isWideEnough: false
    }
    this.onClick = this.onClick.bind(this)

  }

  onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
      }


  render (){
    return(
      <html lang="en">
      <head>
      <title>Bluesky</title>
      <meta charset="utf-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="description" content="Bluesky template project"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>

      </head>
      <body>

      <div class="super_container">

      	//Header

      	<header class="header">
      		<div class="container">
      			<div class="row">
      				<div class="col">
      					<div class="header_content d-flex flex-row align-items-center justify-content-start">
      						<div class="logo">
      							<a href="#"><img src='/Img2' alt=""/></a>
      						</div>
      						<nav class="main_nav">
      							<ul>
      								<li class="active"><a href="/Home">Accueil</a></li>
      								<li><a href="news.html">Nos services</a></li>
      								<li><a href="/Properties">Propriétés</a></li>
      								<li><a href="/About">A propos</a></li>
      								<li><a href="/Contact">Contact</a></li>
      							</ul>
      						</nav>
      						<div class="phone_num ml-auto">
      							<div class="phone_num_inner">
      								<img src='/Img3' alt=""/><span>652-345 3222 11</span>
      							</div>
      						</div>
      						<div class="hamburger ml-auto"><i class="fa fa-bars" aria-hidden="true"></i></div>
      					</div>
      				</div>
      			</div>
      		</div>
      	</header>

      	//Menu

      	<div class="menu trans_500">
      		<div class="menu_content d-flex flex-column align-items-center justify-content-center text-center">
      			<div class="menu_close_container"><div class="menu_close"></div></div>
      			<div class="logo menu_logo">
      				<a href="#">
      					<div class="logo_container d-flex flex-row align-items-start justify-content-start">
      						<div class="logo_image"><div><img src='/Img4' alt=""/></div></div>
      					</div>
      				</a>
      			</div>
      			<ul>
      				<li class="menu_item"><a href="/Home">Accueil</a></li>
      				<li class="menu_item"><a href="news.html">Nos services</a></li>
      				<li class="menu_item"><a href="/Properties">Propriétés</a></li>
      				<li class="menu_item"><a href="#">Tickets</a></li>
      				<li class="menu_item"><a href="/About">A propos</a></li>
      				<li class="menu_item"><a href="/Contact">Contact</a></li>
      			</ul>
      		</div>
      		<div class="menu_phone"><span>call us: </span>652 345 3222 11</div>
      	</div>

      	//Home

      	<div class="home">

      		//Home Slider
      		<div class="home_slider_container">
      			<div class="owl-carousel owl-theme home_slider">

      				//Slide
      				<div class="owl-item">
      					<div class="home_slider_background" styles={{backgroundImage: 'url(http://www.coupdepouce-immobilier.com/biens/19345191.jpg)'}}></div>
      					<div class="slide_container">
      						<div class="container">
      							<div class="row">
      								<div class="col">
      									<div class="slide_content">
      										<div class="home_subtitle">super offer</div>
      										<div class="home_title">Villa with sea view</div>
      										<div class="home_details">
      											<ul class="home_details_list d-flex flex-row align-items-center justify-content-start">
      												<li>
      													<div class="home_details_image"><img src="../bluesky/images/icon_1.png" alt=""/></div>
      													<span> 650 Ftsq</span>
      												</li>
      												<li>
      													<div class="home_details_image"><img src="../bluesky/images/icon_2.png" alt=""/></div>
      													<span> 3 Bedrooms</span>
      												</li>
      												<li>
      													<div class="home_details_image"><img src="../bluesky/images/icon_3.png" alt=""/></div>
      													<span> 2 Bathrooms</span>
      												</li>
      											</ul>
      										</div>
      										<div class="home_price">$ 1. 245 999</div>
      									</div>
      								</div>
      							</div>
      						</div>
      					</div>
      				</div>

      				//Slide
      				<div class="owl-item">
      					<div class="home_slider_background"></div>
      					<div class="slide_container">
      						<div class="container">
      							<div class="row">
      								<div class="col">
      									<div class="slide_content">
      										<div class="home_subtitle">super offer</div>
      										<div class="home_title">Villa with sea view</div>
      										<div class="home_details">
      											<ul class="home_details_list d-flex flex-row align-items-center justify-content-start">
      												<li>
      													<div class="home_details_image"><img src="../bluesky/images/icon_1.png" alt=""/></div>
      													<span> 650 Ftsq</span>
      												</li>
      												<li>
      													<div class="home_details_image"><img src="../bluesky/images/icon_2.png" alt=""/></div>
      													<span> 3 Bedrooms</span>
      												</li>
      												<li>
      													<div class="home_details_image"><img src="../bluesky/images/icon_3.png" alt=""/></div>
      													<span> 2 Bathrooms</span>
      												</li>
      											</ul>
      										</div>
      										<div class="home_price">$ 1. 245 999</div>
      									</div>
      								</div>
      							</div>
      						</div>
      					</div>
      				</div>

      				//Slide -->
      				<div class="owl-item">
      					<div class="home_slider_background"></div>
      					<div class="slide_container">
      						<div class="container">
      							<div class="row">
      								<div class="col">
      									<div class="slide_content">
      										<div class="home_subtitle">super offer</div>
      										<div class="home_title">Villa with sea view</div>
      										<div class="home_details">
      											<ul class="home_details_list d-flex flex-row align-items-center justify-content-start">
      												<li>
      													<div class="home_details_image"><img src="../bluesky/images/icon_1.png" alt=""/></div>
      													<span> 650 Ftsq</span>
      												</li>
      												<li>
      													<div class="home_details_image"><img src="../bluesky/images/icon_2.png" alt=""/></div>
      													<span> 3 Bedrooms</span>
      												</li>
      												<li>
      													<div class="home_details_image"><img src="../bluesky/images/icon_3.png" alt=""/></div>
      													<span> 2 Bathrooms</span>
      												</li>
      											</ul>
      										</div>
      										<div class="home_price">$ 1. 245 999</div>
      									</div>
      								</div>
      							</div>
      						</div>
      					</div>
      				</div>

      			</div>
      		</div>
      	</div>

      	//Home Search -->
      	<div class="home_search">
      		<div class="container">
      			<div class="row">
      				<div class="col">
      					<div class="home_search_container">
      						<div class="home_search_content">
      							<form action="#" class="search_form d-flex flex-row align-items-start justfy-content-start">
      								<div class="search_form_content d-flex flex-row align-items-start justfy-content-start flex-wrap">
      									<div>
      										<select class="search_form_select">
      											<option disabled selected>For rent</option>
      											<option>Yes</option>
      											<option>No</option>
      										</select>
      									</div>
      									<div>
      										<select class="search_form_select">
      											<option disabled selected>All types</option>
      											<option>Type 1</option>
      											<option>Type 2</option>
      											<option>Type 3</option>
      											<option>Type 4</option>
      										</select>
      									</div>
      									<div>
      										<select class="search_form_select">
      											<option disabled selected>City</option>
      											<option>New York</option>
      											<option>Paris</option>
      											<option>Amsterdam</option>
      											<option>Rome</option>
      										</select>
      									</div>
      									<div>
      										<select class="search_form_select">
      											<option disabled selected>Bedrooms</option>
      											<option>1</option>
      											<option>2</option>
      											<option>3</option>
      											<option>4</option>
      										</select>
      									</div>
      									<div>
      										<select class="search_form_select">
      											<option disabled selected>Bathrooms</option>
      											<option>1</option>
      											<option>2</option>
      											<option>3</option>
      										</select>
      									</div>
      								</div>
      								<button class="search_form_button ml-auto">search</button>
      							</form>
      						</div>
      					</div>
      				</div>
      			</div>
      		</div>
      	</div>

      	//Recent -->

      	<div class="recent">
      		<div class="container">
      			<div class="row">
      				<div class="col">
      					<div class="section_title">Recent Properties</div>
      					<div class="section_subtitle">Search your dream home</div>
      				</div>
      			</div>
      			<div class="row recent_row">
      				<div class="col">
      					<div class="recent_slider_container">
      						<div class="owl-carousel owl-theme recent_slider">

      							//Slide -->
      							<div class="owl-item">
      								<div class="recent_item">
      									<div class="recent_item_inner">
      										<div class="recent_item_image">
      											<img src="../bluesky/images/property_1.jpg" alt=""/>
      											<div class="tag_featured property_tag"><a href="#">Featured</a></div>
      										</div>
      										<div class="recent_item_body text-center">
      											<div class="recent_item_location">Miami</div>
      											<div class="recent_item_title"><a href="property.html">Sea view property</a></div>
      											<div class="recent_item_price">$ 1. 234 981</div>
      										</div>
      										<div class="recent_item_footer d-flex flex-row align-items-center justify-content-start">
      											<div><div class="recent_icon"><img src="../bluesky/images/icon_1.png" alt=""/></div><span>650 Ftsq</span></div>
      											<div><div class="recent_icon"><img src="../bluesky/images/icon_2.png" alt=""/></div><span>3 Bedrooms</span></div>
      											<div><div class="recent_icon"><img src="../bluesky/images/icon_3.png" alt=""/></div><span>3 Bathrooms</span></div>
      										</div>
      									</div>
      								</div>
      							</div>

      							//Slide -->
      							<div class="owl-item">
      								<div class="recent_item">
      									<div class="recent_item_inner">
      										<div class="recent_item_image">
      											<img src="../bluesky/images/property_2.jpg" alt=""/>
      											<div class="tag_offer property_tag"><a href="#">Offer</a></div>
      										</div>
      										<div class="recent_item_body text-center">
      											<div class="recent_item_location">Los Angeles</div>
      											<div class="recent_item_title"><a href="property.html">2 Floor Town House</a></div>
      											<div class="recent_item_price">$ 1. 234 981</div>
      										</div>
      										<div class="recent_item_footer d-flex flex-row align-items-center justify-content-start">
      											<div><div class="recent_icon"><img src="../bluesky/images/icon_1.png" alt=""/></div><span>650 Ftsq</span></div>
      											<div><div class="recent_icon"><img src="../bluesky/images/icon_2.png" alt=""/></div><span>3 Bedrooms</span></div>
      											<div><div class="recent_icon"><img src="../bluesky/images/icon_3.png" alt=""/></div><span>3 Bathrooms</span></div>
      										</div>
      									</div>
      								</div>
      							</div>

      							//Slide -->
      							<div class="owl-item">
      								<div class="recent_item">
      									<div class="recent_item_inner">
      										<div class="recent_item_image">
      											<img src="../bluesky/images/property_3.jpg" alt=""/>
      											<div class="tag_featured property_tag"><a href="#">Featured</a></div>
      										</div>
      										<div class="recent_item_body text-center">
      											<div class="recent_item_location">Florida</div>
      											<div class="recent_item_title"><a href="property.html">Vacation Home</a></div>
      											<div class="recent_item_price">$ 1. 234 981</div>
      										</div>
      										<div class="recent_item_footer d-flex flex-row align-items-center justify-content-start">
      											<div><div class="recent_icon"><img src="../bluesky/images/icon_1.png" alt=""/></div><span>650 Ftsq</span></div>
      											<div><div class="recent_icon"><img src="../bluesky/images/icon_2.png" alt=""/></div><span>3 Bedrooms</span></div>
      											<div><div class="recent_icon"><img src="../bluesky/images/icon_3.png" alt=""/></div><span>3 Bathrooms</span></div>
      										</div>
      									</div>
      								</div>
      							</div>

      						</div>

      						<div class="recent_slider_nav_container d-flex flex-row align-items-start justify-content-start">
      							<div class="recent_slider_nav recent_slider_prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>
      							<div class="recent_slider_nav recent_slider_next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
      						</div>
      					</div>
      					<div class="button recent_button"><a href="#">see more</a></div>
      				</div>
      			</div>
      		</div>
      	</div>

      	//Cities -->

      	<div class="cities">
      		<div class="container">
      			<div class="row">
      				<div class="col">
      					<div class="section_title">Find properties in these cities</div>
      					<div class="section_subtitle">Search your dream home</div>
      				</div>
      			</div>
      		</div>

      		<div class="cities_container d-flex flex-row flex-wrap align-items-start justify-content-between">

      			//City -->
      			<div class="city">
      				<img src="../bluesky/images/city_1.jpg" alt="https://unsplash.com/@dnevozhai"/>
      				<div class="city_overlay">
      					<a href="#" class="d-flex flex-column align-items-center justify-content-center">
      						<div class="city_title">Ibiza Town</div>
      						<div class="city_subtitle">Rentals from $450/month</div>
      					</a>
      				</div>
      			</div>

      			//City -->
      			<div class="city">
      				<img src="../bluesky/images/city_2.jpg" alt="https://unsplash.com/@lachlanjdempsey"/>
      				<div class="city_overlay">
      					<a href="#" class="d-flex flex-column align-items-center justify-content-center">
      						<div class="city_title">Ibiza Town</div>
      						<div class="city_subtitle">Rentals from $450/month</div>
      					</a>
      				</div>
      			</div>

      			//City -->
      			<div class="city">
      				<img src="../bluesky/images/city_3.jpg" alt="https://unsplash.com/@hellolightbulb"/>
      				<div class="city_overlay">
      					<a href="#" class="d-flex flex-column align-items-center justify-content-center">
      						<div class="city_title">Ibiza Town</div>
      						<div class="city_subtitle">Rentals from $450/month</div>
      					</a>
      				</div>
      			</div>

      			//City -->
      			<div class="city">
      				<img src="../bluesky/images/city_4.jpg" alt="https://unsplash.com/@justinbissonbeck"/>
      				<div class="city_overlay">
      					<a href="#" class="d-flex flex-column align-items-center justify-content-center">
      						<div class="city_title">Ibiza Town</div>
      						<div class="city_subtitle">Rentals from $450/month</div>
      					</a>
      				</div>
      			</div>

      			//City -->
      			<div class="city">
      				<img src="../bluesky/images/city_5.jpg" alt="https://unsplash.com/@claudiotrigueros"/>
      				<div class="city_overlay">
      					<a href="#" class="d-flex flex-column align-items-center justify-content-center">
      						<div class="city_title">Ibiza Town</div>
      						<div class="city_subtitle">Rentals from $450/month</div>
      					</a>
      				</div>
      			</div>

      			//City -->
      			<div class="city">
      				<img src="../bluesky/images/city_6.jpg" alt="https://unsplash.com/@andersjilden"/>
      				<div class="city_overlay">
      					<a href="#" class="d-flex flex-column align-items-center justify-content-center">
      						<div class="city_title">Ibiza Town</div>
      						<div class="city_subtitle">Rentals from $450/month</div>
      					</a>
      				</div>
      			</div>

      			//City -->
      			<div class="city">
      				<img src="../bluesky/images/city_7.jpg" alt="https://unsplash.com/@sawyerbengtson"/>
      				<div class="city_overlay">
      					<a href="#" class="d-flex flex-column align-items-center justify-content-center">
      						<div class="city_title">Ibiza Town</div>
      						<div class="city_subtitle">Rentals from $450/month</div>
      					</a>
      				</div>
      			</div>

      			//City -->
      			<div class="city">
      				<img src="../bluesky/images/city_8.jpg" alt="https://unsplash.com/@mathewwaters"/>
      				<div class="city_overlay">
      					<a href="#" class="d-flex flex-column align-items-center justify-content-center">
      						<div class="city_title">Ibiza Town</div>
      						<div class="city_subtitle">Rentals from $450/month</div>
      					</a>
      				</div>
      			</div>
      		</div>
      	</div>

      	//Testimonials -->

      	<div class="testimonials">
      		<div class="container">
      			<div class="row">
      				<div class="col">
      					<div class="section_title">What our clients say</div>
      					<div class="section_subtitle">Search your dream home</div>
      				</div>
      			</div>
      			<div class="row testimonials_row">

      				//Testimonial Item -->
      				<div class="col-lg-4 testimonial_col">
      					<div class="testimonial">
      						<div class="testimonial_title">Amazing home for me</div>
      						<div class="testimonial_text">Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.</div>
      						<div class="testimonial_author_image"><img src="../bluesky/images/testimonial_1.jpg" alt=""/></div>
      						<div class="testimonial_author"><a href="#">Diane Smith</a><span>, Client</span></div>
      						<div class="rating_r rating_r_5 testimonial_rating"><i></i><i></i><i></i><i></i><i></i></div>
      					</div>
      				</div>

      				//Testimonial Item -->
      				<div class="col-lg-4 testimonial_col">
      					<div class="testimonial">
      						<div class="testimonial_title">Friendly Realtors</div>
      						<div class="testimonial_text">Nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna. Pellentesque sit amet tellus blandit.</div>
      						<div class="testimonial_author_image"><img src="../bluesky/images/testimonial_2.jpg" alt=""/></div>
      						<div class="testimonial_author"><a href="#">Michael Duncan</a><span>, Client</span></div>
      						<div class="rating_r rating_r_5 testimonial_rating"><i></i><i></i><i></i><i></i><i></i></div>
      					</div>
      				</div>

      				//Testimonial Item -->
      				<div class="col-lg-4 testimonial_col">
      					<div class="testimonial">
      						<div class="testimonial_title">Very good communication</div>
      						<div class="testimonial_text">Retiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.</div>
      						<div class="testimonial_author_image"><img src="../bluesky/images/testimonial_3.jpg" alt=""/></div>
      						<div class="testimonial_author"><a href="#">Shawn Gaines</a><span>, Client</span></div>
      						<div class="rating_r rating_r_5 testimonial_rating"><i></i><i></i><i></i><i></i><i></i></div>
      					</div>
      				</div>

      			</div>
      		</div>
      	</div>

      	//Newsletter -->

      	<div class="newsletter">
      		<div class="parallax_background parallax-window" data-parallax="scroll" data-image-src="images/newsletter.jpg" data-speed="0.8"></div>
      		<div class="container">
      			<div class="row">
      				<div class="col">
      					<div class="newsletter_content d-flex flex-lg-row flex-column align-items-start justify-content-start">
      						<div class="newsletter_title_container">
      							<div class="newsletter_title">Are you buying or selling?</div>
      							<div class="newsletter_subtitle">Search your dream home</div>
      						</div>
      						<div class="newsletter_form_container">
      							<form action="#" class="newsletter_form">
      								<input type="email" class="newsletter_input" placeholder="Your e-mail address" required="required"/>
      								<button class="newsletter_button">subscribe now</button>
      							</form>
      						</div>
      					</div>
      				</div>
      			</div>
      		</div>
      	</div>

      	//Footer -->

      	<footer class="footer">
      		<div class="footer_main">
      			<div class="container">
      				<div class="row">
      					<div class="col-lg-3">
      						<div class="footer_logo"><a href="#"><img src="../bluesky/images/logo_large.png" alt=""/></a></div>
      					</div>
      					<div class="col-lg-9 d-flex flex-column align-items-start justify-content-end">
      						<div class="footer_title">Latest Properties</div>
      					</div>
      				</div>
      				<div class="row">
      					<div class="col-lg-3 footer_col">
      						<div class="footer_about">
      							<div class="footer_about_text">Donec in tempus leo. Aenean ultricies mauris sed quam lacinia lobortis. Cras ut vestibulum enim, in gravida nulla. Curab itur ornare nisl at sagittis cursus.</div>
      						</div>
      					</div>
      					<div class="col-lg-3 footer_col">
      						<div class="footer_latest d-flex flex-row align-items-start justify-content-start">
      							<div><div class="footer_latest_image"><img src="../bluesky/images/footer_latest_1.jpg" alt=""/></div></div>
      							<div class="footer_latest_content">
      								<div class="footer_latest_location">Miami</div>
      								<div class="footer_latest_name"><a href="#">Sea view property</a></div>
      								<div class="footer_latest_price">$ 1. 234 981</div>
      							</div>
      						</div>
      					</div>
      					<div class="col-lg-3 footer_col">
      						<div class="footer_latest d-flex flex-row align-items-start justify-content-start">
      							<div><div class="footer_latest_image"><img src="../bluesky/images/footer_latest_2.jpg" alt=""/></div></div>
      							<div class="footer_latest_content">
      								<div class="footer_latest_location">Miami</div>
      								<div class="footer_latest_name"><a href="#">Town House</a></div>
      								<div class="footer_latest_price">$ 1. 234 981</div>
      							</div>
      						</div>
      					</div>
      					<div class="col-lg-3 footer_col">
      						<div class="footer_latest d-flex flex-row align-items-start justify-content-start">
      							<div><div class="footer_latest_image"><img src="../bluesky/images/footer_latest_3.jpg" alt=""/></div></div>
      							<div class="footer_latest_content">
      								<div class="footer_latest_location">Miami</div>
      								<div class="footer_latest_name"><a href="#">Modern House</a></div>
      								<div class="footer_latest_price">$ 1. 234 981</div>
      							</div>
      						</div>
      					</div>
      				</div>
      			</div>
      		</div>
      		<div class="footer_bar">
      			<div class="container">
      				<div class="row">
      					<div class="col">
      						<div class="footer_bar_content d-flex flex-row align-items-center justify-content-start">
      							<div class="cr">
      Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
      </div>
      							<div class="footer_nav">
      								<ul>
      									<li><a href="index.html">Home</a></li>
      									<li><a href="#">About us</a></li>
      									<li><a href="properties.html">Properties</a></li>
      									<li><a href="news.html">News</a></li>
      									<li><a href="contact.html">Contact</a></li>
      								</ul>
      							</div>
      							<div class="footer_phone ml-auto"><span>call us: </span>652 345 3222 11</div>
      						</div>
      					</div>
      				</div>
      			</div>
      		</div>
      	</footer>
      </div>


      </body>
      </html>
    )
  }
}


export default Home
