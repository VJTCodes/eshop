import  React from 'react';
import "./CheckoutProduct.css";

function CheckoutProduct() {
    return(
        
            <div className="checkoutProduct">
             <img src="/Images/bag.avif" alt="Ecommerce banner" className="checkoutProduct__image" />

             <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    FUR JADEN Pro Series Smart Tech Anti-Theft Laptop Backpack With 
                        USB-A and USB-C Type Charging Port for Men & Women For Business 
                        Professionals & College Students
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>20</strong>

                </p>
                <div className="checkoutProduct__rating">
                    ⭐⭐⭐⭐
                </div>
                <button>Remove from Basket</button>
             </div>
            </div>
        
    )
}

export default CheckoutProduct;