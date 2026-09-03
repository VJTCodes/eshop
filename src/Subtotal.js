import React from 'react';
import "./Subtotal.css";
import Currencyformat from "react-currency-format";

function Subtotal() {
    return(
        <div className="subtotal">
            <Currencyformat renderText={(value) => (
                <>
                    <p>
                        subtotal (0 items): <strong>${value}</strong>
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
                value={0}
                displayType={'text'}
                thousandSeparator={true}
            />

        </div>
    )
}
export default Subtotal