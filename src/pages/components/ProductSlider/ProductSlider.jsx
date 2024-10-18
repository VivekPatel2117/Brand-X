import React, { useRef } from "react";
import styles from "./ProductSlider.module.css";
import Product from "../../../assets/product.png";
export default function ProductSlider({ title }) {
  const slider = useRef(null);

  const scrollToLeft = () => {
    if (!slider.current) return;
    slider.current.scrollLeft -= 200;
  };

  const scrollToRight = () => {
    if (!slider.current) return;
    slider.current.scrollLeft += 200;
  };
  return (
    <div className={styles.ProductSliderWrapper}>
      <div className={styles.titleWrapper}>
        <h1>{title}</h1>
      </div>
      <div className={styles.productSliderConatiner}>
        <div className={styles.leftArrow} onClick={scrollToLeft}>
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </div>
        <div
          style={{ gridTemplateColumns: `repeat(10,1fr)` }}
          ref={slider}
          className={styles.productBoxWrapper}
        >
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index} className={styles.sliderBoxConatianer}>
              <div key={index} className={styles.productImg}>
                <img
                  className={styles.catgoeryImg}
                  src={Product}
                  alt="cateory"
                />
              </div>
              <div className={styles.productDescription}>
                <div className={styles.description}>
                  <p>
                    Personalized gift for her | Cuddle and roses Deluxe hamper
                    785.00
                  </p>
                </div>
                <a href="#">See more</a>
              </div>
              <div className={styles.productActions}>
                <div className={styles.cartActionButtonWrapper}>
                  <button>
                    <span className="material-symbols-outlined">
                      shopping_cart
                    </span>{" "}
                    Add to cart
                  </button>
                </div>
                <div className={styles.wishlistActionWrapper}>
                  <p>
                    {" "}
                    <span className="material-symbols-outlined favorite-icon">
                      favorite
                    </span>
                    Add to Wishlist
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.rightArrow} onClick={scrollToRight}>
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </div>
      </div>
    </div>
  );
}
