import { useParams } from "react-router-dom";
import Ratings from "../ui/Ratings";
import Pricing from "../ui/Pricing";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductsInfo({ datas, addToCart ,cart}) {
    const { id } = useParams()
    const data = datas.find((data) => +data.id === +id)

  function findItemsInCart(){
    return cart.find((item)=>item.id === +id)
  }



    // function updatePrice(){
    //     let SubTotal = data.map((data)=>)
    // }

    return (
        <>
            <div className="productsInfo-container">
                <div className="max-width">
                    <Link to="/products" className="link"><i className="fa-solid fa-arrow-left"></i></Link>
                    <div className="info-row">
                        <div className="cardInfo-image-container">
                            <img src={data.src} className="cardInfo-img"></img>
                        </div>

                        <div className="card-info-description">
                            <h1 className="card-title">{data.title}</h1>
                            <div className="card-rating">
                                < Ratings rating={data.rating} />
                            </div>

                            <div className="price-info-container">
                                <Pricing salePrice={data.salePrice} originalPrice={data.originalPrice} />
                            </div>
                            <div className="card-info">
                                <p className="summary">Summary</p>
                                <br />
                                <p className="cart-summary-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                                    esse itaque, doloribus sapiente quisquam iure voluptatum
                                    cupiditate eaque quod facere ducimus sequi?<br /> Numquam, enim earum
                                    dolores dolor quo voluptate vitae porro aliquid veniam corporis.</p>
                            </div>
                            { findItemsInCart() ?<Link to = "/cart" className="link"> <button className="btn">Checkout <i className="fa-solid fa-cart-shopping"></i></button></Link> :
                             <button className="btn btn-add-to-cart" onClick={
                                () => addToCart(data)}>Add To Cart
                                <i className="fa-solid fa-cart-shopping"></i></button>}

                        </div>
                    </div>

                    <div className="recommended-items">
                        <div className="max-width">
                            <h1 className="title center">Recommended</h1>
                            <div className="grid">
                                {datas.filter((data) => data.rating === 5 && +data.id !== +id).slice(0, 4)
                                    .map((data) => <Cards items={data} key={data.id} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
