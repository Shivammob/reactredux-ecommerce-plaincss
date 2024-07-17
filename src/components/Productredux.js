import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import watchBanner from "./assets/images/watch_banner.jpg";
import { useSelector, useDispatch } from "react-redux";

function Productredux({ sizeFilter, setSizeFilter, data, keyName }) {
  // console.log(sizeFilter)
  const myState = useSelector((state) => state.changeTheNumber);

  const { products, filter_products } = myState;

  const dispatch = useDispatch();

  const likes = (key) => {
    if (!products.filter((v) => v.id === key)[0]?.isIncrement) {
    //console.log(products.filter(v => v.id === key)[0])
      dispatch({
        type: "INCREMENT",
        key: key,
      });
    } else {
      dispatch({
        type: "DECREMENT",
        key: key,
      });
    }
  };

  return (
    <div className="product d-flex flex-wrap">
      {sizeFilter.length
        ? filter_products
            .filter((v) => sizeFilter.includes(v.size))
            .map((data, key) => {
              var price = data.price.toLocaleString();
              return (
                <div className="product-card me-2 mb-3" key={key}>
                  <div className="product-card-top d-flex justify-content-between align-items-center mb-5">
                    <h6 className="tag text-orange font-12 font-500">
                      Pre-Owned
                    </h6>
                    <ul className="product-card-top-action d-flex align-items-center mb-0">
                      <li>
                        <a href="/" className="text-reset me-2 new">
                          NEW
                        </a>
                      </li>
                      <li>
                        <a href="/" className="text-reset me-2 font-16">
                          <i className="fa-solid fa-medal"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/" className="text-reset me-2 font-16">
                          <i className="fa fa-users"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-card-mid text-center border-bottom mb-3">
                    <a href="/" className="product-card-cta">
                      <img
                        src={data.img1}
                        alt={data.desc}
                        className="img-fluid mb-3 img1"
                        loading="lazy"
                      />
                      <img
                        src={data.img2}
                        alt={data.desc}
                        className="img-fluid mb-3 img2"
                        loading="lazy"
                      />
                    </a>
                    <div className="product-card-desc">
                      <div className="product-card-desc-desc1">
                        <h4 className="text-orange text-uppercase font-500 font-16 lh-1 mb-2">
                          {data.name}
                        </h4>
                        <p className="text-capitalize text-reset mb-2 font-14">
                          {data.desc}
                        </p>
                        <h5 className="text-reset d-flex align-items-center justify-content-center font-600 mb-1">
                          ₹{price}
                          <span className="font-12 text-orange font-500 ms-2">
                            {data.off}%
                          </span>
                        </h5>
                        <h6 className="text-black-50 font-500 text-line-through mb-2">
                          {data.oldprice}
                        </h6>
                      </div>
                      <div className="product-card-desc-desc2">
                        <h4 className="text-uppercase font-600 font-16 lh-1 mb-2">
                          Available in
                        </h4>
                        <p className="text-capitalize text-reset mb-2 font-14">
                          One size
                        </p>
                      </div>
                    </div>
                    <span className="d-block font-14 mb-2">EMI Available</span>
                  </div>
                  <ul className="product-card-footer d-flex justify-content-between mb-0">
                    <li>
                      <Tippy content="Share">
                        <a href="/" className="text-reset">
                          <i
                            className="fa-solid fa-rocket"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </Tippy>
                    </li>
                    <li>
                      <Tippy content="Likes">
                        <div className="d-flex align-items-center">
                          <button
                            href="/"
                            className="text-reset d-flex align-items-start bg-unset heart"
                            onClick={(key) => likes}
                            style={{ cursor: "pointer" }}
                          >
                            <i className="fa-solid fa-heart"></i>
                          </button>
                          <span className="text-black-50 font-12 ms-2">
                            21 likes
                          </span>
                        </div>
                      </Tippy>
                    </li>
                  </ul>
                </div>
              );
            })
        : filter_products.map((data, key) => {
            var price = data.price.toLocaleString();
            {
              /* console.log(price, "price") */
            }
            return (
              <div className="product-card me-2 mb-3" key={key}>
                <div className="product-card-top d-flex justify-content-between align-items-center mb-5">
                  <h6 className="tag text-orange font-12 font-500">
                    Pre-Owned
                  </h6>
                  <ul className="product-card-top-action d-flex align-items-center mb-0">
                    <li>
                      <a href="/" className="text-reset me-2 new">
                        NEW
                      </a>
                    </li>
                    <li>
                      <a href="/" className="text-reset me-2 font-16">
                        <i className="fa-solid fa-medal"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="text-reset me-2 font-16">
                        <i className="fa fa-users"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product-card-mid text-center border-bottom mb-3">
                  <a href="/" className="product-card-cta">
                    <img
                      src={data.img1}
                      alt={data.desc}
                      className="img-fluid mb-3 img1"
                      loading="lazy"
                    />
                    <img
                      src={data.img2}
                      alt={data.desc}
                      className="img-fluid mb-3 img2"
                      loading="lazy"
                    />
                  </a>
                  <div className="product-card-desc">
                    <div className="product-card-desc-desc1">
                      <h4 className="text-orange text-uppercase font-500 font-16 lh-1 mb-2">
                        {data.name}
                      </h4>
                      <p className="text-capitalize text-reset mb-2 font-14">
                        {data.desc}
                      </p>
                      <h5 className="text-reset d-flex align-items-center justify-content-center font-600 mb-1">
                        ₹{price}
                        <span className="font-12 text-orange font-500 ms-2">
                          {data.off}%
                        </span>
                      </h5>
                      <h6 className="text-black-50 font-500 text-line-through mb-2">
                        {data.oldprice}
                      </h6>
                    </div>
                    <div className="product-card-desc-desc2">
                      <h4 className="text-uppercase font-600 font-16 lh-1 mb-2">
                        Available in
                      </h4>
                      <p className="text-capitalize text-reset mb-2 font-14">
                        One size
                      </p>
                    </div>
                  </div>
                  <span className="d-block font-14 mb-2">EMI Available</span>
                </div>
                <ul className="product-card-footer d-flex justify-content-between mb-0">
                  <li>
                    <Tippy content="Share">
                      <a href="/" className="text-reset">
                        <i
                          className="fa-solid fa-rocket"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </Tippy>
                  </li>
                  <li>
                    <Tippy content="Likes">
                      <div className="d-flex align-items-center">
                        <button
                          href="/"
                          className={
                            products.filter((v) => v.id === key)[0]?.isIncrement
                              ? "text-reset d-flex align-items-start bg-unset heart active"
                              : "text-reset d-flex align-items-start bg-unset heart "
                          }
                          onClick={() => likes(key)}
                          style={{ cursor: "pointer" }}
                        >
                          <i className="fa-solid fa-heart"></i>
                        </button>
                        <span className="text-black-50 font-12 ms-2">
                          {/* {isIncrement ?  dispatch({ type: "INCREMENT"}) : dispatch({ type: "DECREMENT"})} likes */}
                          {
                            products.filter((v) => v.id === key)[0]?.likes
                          }
                           likes
                        </span>
                      </div>
                    </Tippy>
                  </li>
                </ul>
              </div>
            );
          })}
      <div className="product-card me-2 mb-3 border-none p-0">
        <img
          src={watchBanner}
          alt="watch"
          className="img-fluid h-100 object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Productredux;
