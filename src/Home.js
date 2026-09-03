import React from 'react';
import "./Home.css";
import Product from "./Product";


function Home() {
    return ( 
        <div className='home'>
            <div className="home__container">
                <img src="/Images/ecommerceImage.jpeg" alt="Ecommerce banner" className="home__image" />
               
                <div className="home__row">
                    <Product id="123143"
                    title="FUR JADEN Pro Series Smart Tech Anti-Theft Laptop Backpack With 
                        USB-A and USB-C Type Charging Port for Men & Women For Business 
                        Professionals & College Students"
                    price={11.96}
                    rating={5}
                    image = "/Images/bag.avif"/>
                    <Product
                    id="56765"
                    title="Milton Rapid Electric Kettle 1.8L | 1500 Watts | Stainless Steel 
                    Hot Water portable Electric Kettle for Home, Office | Auto Shut-Off with
                     Wide Mouth | Cool-touch Handle and Single-Touch Lid Lock "
                     price={15.6}
                     rating={3}
                     image="Images/Kette.jpg"/>
                    
                </div>
                 <div className="home__row">
                    <Product id="542342"
                    title="Cetaphil Gentle Skin Hydrating Face Wash 118ml, 
                    Paraben Free, Sulphate-Free Gentle Skin Hydrating Cleanser with Niacinamide
                    , Vitamin B5 for Dry to Normal, Sensitive Skin "
                    price={2.5}
                    rating={5}
                    image="/Images/cetaphil.jpg"/>
                   

                    <Product id="897387"
                    title="Men’s Premium Plain T-Shirt | Premium Cotton Half Sleeve Round Neck Casual Wear for Daily Use
                     - Pack of 1 "
                     price={3.6}
                     rating={4}
                     image="/Images/Tshirt.jpeg"/>
                    
                 </div>
                  <div className="home__row">
                    <Product id="123434"
                    title="NutriPro Juicer Mixer Grinder - Smoothie Maker - 500 Watts (2 Jars & 1 Blade, Silver) - 
                    2 Year Warranty"
                    price={4.4}
                    rating={5}
                    image="/Images/Blender.jpg"/>
                  </div>
           
            </div>

        </div>
    )
}

export default Home