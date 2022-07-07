import React from "react";
import "./Products.css";

const Products = () => {
  return (
    <>
      <h1 style={{ fontFamily: "helvetica-neue", textAlign: 'center'}}>Top Product Categories</h1>
      <div className="productsList">
        <div className="product">
          <img
            src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_US-Site/-/Sowa/en_US/category/Drilling-L1.jpg"
            width={150}
            alt=""
             className="productImage"
          />
          <p className="name">Drilling & Holemaking</p>
        </div>
        <div className="product">
          <img
            src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_US-Site/-/Sowa/en_US/category/Indexable-L1.jpg"
            width={150}
            alt="" 
            className="productImage"
          />
          <p className="name">Drilling & Holemaking</p>
        </div>
        <div className="product">
          <img
            src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_US-Site/-/Sowa/en_US/category/Measuring-L1.jpg"
            width={150}
            alt="" 
            className="productImage"
          />
          <p className="name">Drilling & Holemaking</p>
        </div>
        <div className="product">
          <img
            src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_US-Site/-/Sowa/en_US/category/Milling-L1.jpg"
            width={150}
            alt="" 
            className="productImage"
          />
          <p className="name">Drilling & Holemaking</p>
        </div>
        <div className="product">
          <img
            src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_US-Site/-/Sowa/en_US/category/ToolHolding-L1.jpg"
            width={150}
            alt="" 
            className="productImage"
          />
          <p className="name">Drilling & Holemaking</p>
        </div>
        <div className="product">
          <img
            src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_US-Site/-/Sowa/en_US/category/Threading-L1.jpg"
            width={150}
            alt="" 
            className="productImage"
          />
          <p className="name">Drilling & Holemaking</p>
        </div>
      </div>

      <div className="cards">
        <div className="card">
          <img
            src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_US-Site/-/Sowa/en_US/homepage/Website-Launch-Post.jpg"
            alt="image 1"
          />
          <div style={{textAlign: 'start'}}>
            <h4 style={{color: '#428BCA'}}>Welcome to the New SowaTool.com!</h4>
            <p>
              Before you can get online there are a couple of steps you need to
              take.
            </p>
            <p>Click on the link below to setup your account now.</p>
          </div>
          <button className="button">Setup Account</button>
        </div>
        <div className="card">
          <img
            src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_US-Site/-/Sowa/en_US/homepage/Website-Launch-Post.jpg"
            alt="image 1"
          />
          <div style={{textAlign: 'start'}}>
            <h4 style={{color: '#428BCA'}}>Welcome to the New SowaTool.com!</h4>
            <p>
              Before you can get online there are a couple of steps you need to
              take.
            </p>
            <p>Click on the link below to setup your account now.</p>
          </div>
          <button className="button">Setup Account</button>
        </div>
      </div>
    </>
  );
};

export default Products;
