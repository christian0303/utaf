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
import "../bluesky/styles/about_responsive.css"
import "../bluesky/styles/about.css"

import "jquery"
import "bootstrap"
import "scrollmagic"
import "greensock"
import "easing"

class AboutUs extends Component{
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
      <title>About us</title>
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
      							<a href="#"><img src="../bluesky/images/logo.png" alt=""/></a>
      						</div>
      						<nav class="main_nav">
      							<ul>
                      <li><a href="/Home">Accueil</a></li>
                      <li><a href="news.html">Nos services</a></li>
                      <li><a href="/Properties">Propriétés</a></li>
                      <li class="active"><a href="/About">A propos</a></li>
                      <li><a href="/Contact">Contact</a></li>
      							</ul>
      						</nav>
      						<div class="phone_num ml-auto">
      							<div class="phone_num_inner">
      								<img src="../bluesky/images/phone.png" alt=""/><span>652-345 3222 11</span>
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
      						<div class="logo_image"><div><img src="../bluesky/images/logo.png" alt=""/></div></div>
      					</div>
      				</a>
      			</div>
      			<ul>
              <li class="menu_item"><a href="/Home">Accueil</a></li>
      				<li class="menu_item"><a href="news.html">Nos services</a></li>
      				<li class="menu_item"><a href="/Properties">Propriétés</a></li>
      				<li class="menu_item"><a href="/About">A propos</a></li>
      				<li class="menu_item"><a href="/Contact">Contact</a></li>
        			<li class="menu_item"><a href="#">Speakers</a></li>
        			<li class="menu_item"><a href="#">Tickets</a></li>
      			</ul>
      		</div>
      		<div class="menu_phone"><span>call us: </span>652 345 3222 11</div>
      	</div>

      	//Home

      	<div class="home">
      		<div class="parallax_background parallax-window" data-parallax="scroll" data-image-src="../bluesky/images/about.jpg" data-speed="0.8"></div>
      		<div class="home_container">
      			<div class="container">
      				<div class="row">
      					<div class="col">
      						<div class="home_content d-flex flex-row align-items-end justify-content-start">
      							<div class="home_title">About</div>
      							<div class="breadcrumbs ml-auto">
      								<ul>
      									<li><a href="index.htmo">Home</a></li>
      									<li>About us</li>
      								</ul>
      							</div>
      						</div>
      					</div>
      				</div>
      			</div>
      		</div>
      	</div>

      	//Home Search
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

      	//About

      	<div class="about">
      		<div class="container">
      			<div class="row">

      				//About Content
      				<div class="col-lg-6">
      					<div class="about_content">
      						<div class="section_title">A few words about us</div>
      						<div class="section_subtitle">Search your dream home</div>
      						<div class="about_text">
      							<p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Donec in tempus leo. Aenean ultricies mauris sed quam lacinia lobortis. Cras ut vestibulum enim, in gravida nulla. Curabitur ornare nisl at sagittis cursus. Sed mattis, eros non vulputate luctus, erat dui dapibus augue, eu fringilla tortor ante id mi. Sed a enim libero. Vestibulum pharetra aliquam convallis. </p>
      						</div>
      					</div>
      				</div>

      				//About Image
      				<div class="col-lg-6">
      					<div class="about_image"><img src="../bluesky/images/about_image.jpg" alt=""/></div>
      				</div>
      			</div>
      			<div class="row milestones_row">

      				//Milestone
      				<div class="col-lg-3 milestone_col">
      					<div class="milestone d-flex flex-row align-items-center justify-content-start">
      						<div class="milestone_icon d-flex flex-column align-items-center justify-content-center"><img src="../bluesky/images/milestones_1.png" alt=""/></div>
      						<div class="milestone_content">
      							<div class="milestone_counter" data-end-value="651">0</div>
      							<div class="milestone_text">Properties Sold</div>
      						</div>
      					</div>
      				</div>

      				//Milestone
      				<div class="col-lg-3 milestone_col">
      					<div class="milestone d-flex flex-row align-items-center justify-content-start">
      						<div class="milestone_icon d-flex flex-column align-items-center justify-content-center"><img src="../bluesky/images/milestones_2.png" alt=""/></div>
      						<div class="milestone_content">
      							<div class="milestone_counter" data-end-value="1256">0</div>
      							<div class="milestone_text">Happy Clients</div>
      						</div>
      					</div>
      				</div>

      				//Milestone
      				<div class="col-lg-3 milestone_col">
      					<div class="milestone d-flex flex-row align-items-center justify-content-start">
      						<div class="milestone_icon d-flex flex-column align-items-center justify-content-center"><img src="../bluesky/images/milestones_3.png" alt=""/></div>
      						<div class="milestone_content">
      							<div class="milestone_counter" data-end-value="124">0</div>
      							<div class="milestone_text">Buildings Sold</div>
      						</div>

      					</div>
      				</div>

      				//Milestone
      				<div class="col-lg-3 milestone_col">
      					<div class="milestone d-flex flex-row align-items-center justify-content-start">
      						<div class="milestone_icon d-flex flex-column align-items-center justify-content-center"><img src="../bluesky/images/milestones_4.png" alt=""/></div>
      						<div class="milestone_content">
      							<div class="milestone_counter" data-end-value="25">0</div>
      							<div class="milestone_text">Awards Won</div>
      						</div>
      					</div>
      				</div>

      			</div>
      		</div>
      	</div>

      	//Realtors

      	<div class="realtors">
      		<div class="container">
      			<div class="row">
      				<div class="col">
      					<div class="section_title">The Realtors</div>
      					<div class="section_subtitle">Search your dream home</div>
      				</div>
      			</div>
      			<div class="row realtors_row">

      				//Realtor
      				<div class="col-lg-3 col-md-6">
      					<div class="realtor_outer">
      						<div class="realtor">
      							<div class="realtor_image"><img src="../bluesky/images/realtor_1.jpg" alt=""/></div>
      							<div class="realtor_body">
      								<div class="realtor_title">Maria Williams</div>
      								<div class="realtor_subtitle">Senior Realtor</div>
      							</div>
      							<div class="realtor_link"><a href="#">+</a></div>
      						</div>
      						<div class="realtor_link_background_container">
      							<div><div class="realtor_link_background"></div></div>
      						</div>
      					</div>
      				</div>

      				//Realtor
      				<div class="col-lg-3 col-md-6">
      					<div class="realtor_outer">
      						<div class="realtor">
      							<div class="realtor_image"><img src="../bluesky/images/realtor_2.jpg" alt=""/></div>
      							<div class="realtor_body">
      								<div class="realtor_title">Christian Smith</div>
      								<div class="realtor_subtitle">Senior Realtor</div>
      							</div>
      							<div class="realtor_link"><a href="#">+</a></div>
      						</div>
      						<div class="realtor_link_background_container">
      							<div><div class="realtor_link_background"></div></div>
      						</div>
      					</div>
      				</div>

      				//Realtor
      				<div class="col-lg-3 col-md-6">
      					<div class="realtor_outer">
      						<div class="realtor">
      							<div class="realtor_image"><img src="../bluesky/images/realtor_3.jpg" alt=""/></div>
      							<div class="realtor_body">
      								<div class="realtor_title">Steve G. Brown</div>
      								<div class="realtor_subtitle">Senior Realtor</div>
      							</div>
      							<div class="realtor_link"><a href="#">+</a></div>
      						</div>
      						<div class="realtor_link_background_container">
      							<div><div class="realtor_link_background"></div></div>
      						</div>
      					</div>
      				</div>

      				//Realtor
      				<div class="col-lg-3 col-md-6">
      					<div class="realtor_outer">
      						<div class="realtor">
      							<div class="realtor_image"><img src="../bluesky/images/realtor_4.jpg" alt=""/></div>
      							<div class="realtor_body">
      								<div class="realtor_title">Jessica Walsh</div>
      								<div class="realtor_subtitle">Senior Realtor</div>
      							</div>
      							<div class="realtor_link"><a href="#">+</a></div>
      						</div>
      						<div class="realtor_link_background_container">
      							<div><div class="realtor_link_background"></div></div>
      						</div>
      					</div>
      				</div>

      			</div>
      		</div>
      	</div>

      	//Newsletter

      	<div class="newsletter">
      		<div class="parallax_background parallax-window" data-parallax="scroll" data-image-src="../bluesky/images/newsletter.jpg" data-speed="0.8"/></div>
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

      	//Footer

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
      							<div><div class="footer_latest_image"><img src="images/footer_latest_2.jpg" alt=""/></div></div>
      							<div class="footer_latest_content">
      								<div class="footer_latest_location">Miami</div>
      								<div class="footer_latest_name"><a href="#">Town House</a></div>
      								<div class="footer_latest_price">$ 1. 234 981</div>
      							</div>
      						</div>
      					</div>
      					<div class="col-lg-3 footer_col">
      						<div class="footer_latest d-flex flex-row align-items-start justify-content-start">
      							<div><div class="footer_latest_image"><img src="images/footer_latest_3.jpg" alt=""/></div></div>
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



      </body>
      </html>
    )
  }
}


export default AboutUs
