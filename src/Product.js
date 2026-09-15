import React from "react";
import "./Product.css";
import { useStateValue} from "./StateProvider";

function Product({id,title,image,price,rating}) {
//dispatch is alternative name for action. JS obj that has type feature
    const[state, dispatch] = useStateValue();

    const addToBasket = ()=>{
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id:id,
                image: image,
                price: price,
                rating: rating
            },
        });
    };

    return (
        <div>
            <div className="product">
                <div className="product__info">
                    <p>{title}</p>
                    <p className="product__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product__rating">
                        {Array(rating)
                        .fill()
                        .map((_,i)=>(
                            <p>⭐</p>
                        ))}
                    </div>
                </div>
                <img src={image} alt="Image of a bag" />

                <button onClick={addToBasket}> Add to Basket</button>
            </div>
        </div>
    )
}
export default Product