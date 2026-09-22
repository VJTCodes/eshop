import React from 'react';
import "./Subtotal.css";
import Currencyformat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from './reducer';

function Subtotal() {
      const [{ basket }] = useStateValue();
    return(
      
        <div className="subtotal">
            <Currencyformat renderText={(value) => (
                <>
                    <p>
                        subtotal ({basket.length} items): <strong>${value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <label>
                            <input type="checkbox" /> This order contains a gift
                        </label>
                         <button>Proceed to Checkout</button>
                    </small>
                   
                </>
            )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
            />

        </div>
    )
}
export default Subtotal