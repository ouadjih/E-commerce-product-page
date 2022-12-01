import React, { useState } from "react";
import "./Main.css";
import product_thumbnail from "../asset/images/image-product-1-thumbnail.jpg";
import mainImg from "../asset/images/image-product-1.jpg";
import close from "../asset/images/icon-close.svg";
import cardImg from "../asset/images/icon-cart.svg";
import right from "../asset/images/icon-next.svg";
import left from "../asset/images/icon-previous.svg";
import { Lightbox } from "./Lightbox";
export const Main = (props) => {
  const [lightbox, setLightBox] = useState(false);
  const [quantity, setQuantity] = useState(0);
  function addQuantity() {
    setQuantity((quantity) => quantity + 1);
  }
  function reduceQuantity() {
    quantity < 1 ? setQuantity(0) : setQuantity((quantity) => quantity - 1);
  }
  return (
    <>
      <main className="container">
        {lightbox ? (
          <div className="renderlightbox">
            <img
              id="main"
              className="btn-close"
              onClick={() => setLightBox(!lightbox)}
              src={close}
              alt="close"
            />
            <Lightbox />
          </div>
        ) : (
          ""
        )}
        <img src={right} alt="right" className="arrow-left" />
        <img src={left} alt="left" className="arrow-right" />
        <div className="container-left">
          <img
            className="container-left-image"
            src={mainImg}
            alt="main"
            onClick={() => setLightBox(!lightbox)}
          />
          <img
            className="container-left-image-mobile"
            src={mainImg}
            alt="main"
          />
          <div className="container-left-images">
            <img className="thumb-image" src={product_thumbnail} alt="img1" />
            <img className="thumb-image" src={product_thumbnail} alt="img1" />
            <img className="thumb-image" src={product_thumbnail} alt="img1" />
            <img className="thumb-image" src={product_thumbnail} alt="img1" />
          </div>
        </div>
        <div className="container-right">
          <h3 className="title">Sneaker Company</h3>
          <h1 className="subtitle">Fall Limited Edition Sneakers</h1>
          <p className="description">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="price">
            <div className="price-top">
              <div className="new-price">$125.00</div>
              <div className="discount">50%</div>
            </div>
            <div className="old-price">$250.00</div>
          </div>
          <div className="container-buttons">
            <div className="btn-quantity">
              <button className="btn" onClick={reduceQuantity}>
                -
              </button>
              <p className="quantity">{quantity}</p>
              <button className="btn" onClick={addQuantity}>
                +
              </button>
            </div>
            <a className="btn-addtocard" href="/">
              <img class="cardImage" src={cardImg} alt="card" /> Add to cart
            </a>
          </div>
        </div>
      </main>
    </>
  );
};
