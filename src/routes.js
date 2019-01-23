import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import AboutUs from './pages/aboutUs.js'
import Contact from './pages/contact.js'
//import Elements from './bluesky/elements.html'
import Home from './pages/home.js'
//import News from './bluesky/news.html'
import Properties from './pages/proprietes.js'
import Property from './pages/property.js'
import App from './App'
import Image1 from './bluesky/images/home_slider_1.png'
import Img2 from './bluesky/images/logo.png'
import Img3 from './bluesky/images/phone.png'
import Img4 from './bluesky/images/logo.png'

export default function MainRouter() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/Home" component={Home}/>
        <Route path="/About" component={AboutUs}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/Properties" component={Properties}/>
        <Route path="/Property" component={Property}/>
        <Route path="/Img1" component={Image1}/>
        <Route path="/Img2" component={Img2}/>
        <Route path="/Img3" component={Img3}/>
        <Route path="/Img4" component={Img4}/>
      </div>
    </Router>
  )
}
