import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="" />
        <div className="home__row">
          <Product 
          id="12312312" 
          title="The lean startup"
          price={29.99}
          image="https://m.media-amazon.com/images/I/51WIKlio9qL.jpg"
          rating={5}
           />
          <Product 
          id="12312313" 
          title="AmazonBasics 48 Pack AA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
          price={49.99}
          image="https://m.media-amazon.com/images/I/71UyNLSv2mL._AC_UL640_FMwebp_QL65_.jpg"
          rating={4}
          />
        </div>
        <div className="home__row">
          <Product 
          id="12312314" 
          title="AmazonBasics Electric Glass and Steel Kettle - 1.7-Liter"
          price={27.99}
          image="https://m.media-amazon.com/images/I/812C5q3i5+L._AC_UL640_FMwebp_QL65_.jpg"
          rating={5}
          />
          <Product 
          id="12312314" 
          title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black"
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US320_FMwebp_QL65_.jpg"
          rating={5}
          />
          <Product 
          id="12312315" 
          title="Apple EarPods with Lightning Connector - White"
          price={17.99}
          image="https://images-na.ssl-images-amazon.com/images/I/21zodo7QkUL._AC_US320_FMwebp_QL65_.jpg"
          rating={5}
          />
        </div>
        <div className="home__row">
          <Product 
          id="12312312" 
          title="TP-Link AC750 WiFi Extender | Covers Up to 1200 Sq.ft and 20 Devices Up to 750Mbps| Dual Band WiFi Range Extender | WiFi Booster to Extend Range of WiFi Internet Connection (RE220)"
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/311BvbMe2dL._AC_US320_FMwebp_QL65_.jpg"
          rating={5}
          />
        </div>
      </div>

    </div>
  )
}

export default Home
