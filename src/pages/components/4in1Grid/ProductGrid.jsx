import React from "react";
import styles from "./ProductGrid.module.css";
import hamper from '../../../assets/hamper.png'
export default function ProductGrid() {
  return (
    <div className={styles.ProductGridWrapper}>
      <div className={styles.productGridConatiner}>
        <div className={styles.productGridBox}>
          <div className={styles.productGridBoxTitle}>
            <p>Revamp your Gifting journey with finely picked gits </p>
          </div>
          <div className={styles.productGridBoxBody}>
            <div className={styles.productBox}>
                <div className={styles.imgWrapper}>
                <img src={hamper} alt="img" />
                </div>
                <p>Personalised hampers</p>
            </div>
            <div className={styles.productBox}>
                <div className={styles.imgWrapper}>
                <img src={hamper} alt="img" />
                </div>
                <p>Personalised hampers</p>
            </div>
            <div className={styles.productBox}>
                <div className={styles.imgWrapper}>
                <img src={hamper} alt="img" />
                </div>
                <p>Personalised hampers</p>
            </div>
            <div className={styles.productBox}>
                <div className={styles.imgWrapper}>
                <img src={hamper} alt="img" />
                </div>
                <p>Personalised hampers</p>
            </div>
          </div>
          <div className={styles.productGridBoxFooting}>
          <a href="#">Explore all</a>
          </div>
        </div>
        <div className={styles.productGridBox}>
          <div className={styles.productGridBoxTitle}>
            <p>Gifts starting at ₹149</p>
          </div>
          <div className={styles.productGridBoxBody}>
            <div className={styles.productBox}>
                <div className={styles.imgWrapper}>
                <img src={hamper} alt="img" />
                </div>
                <p>Personalised hampers</p>
            </div>
            <div className={styles.productBox}>
                <div className={styles.imgWrapper}>
                <img src={hamper} alt="img" />
                </div>
                <p>Personalised hampers</p>
            </div>
            <div className={styles.productBox}>
                <div className={styles.imgWrapper}>
                <img src={hamper} alt="img" />
                </div>
                <p>Personalised hampers</p>
            </div>
            <div className={styles.productBox}>
                <div className={styles.imgWrapper}>
                <img src={hamper} alt="img" />
                </div>
                <p>Personalised hampers</p>
            </div>
          </div>
          <div className={styles.productGridBoxFooting}>
          <a href="#">Explore all</a>
          </div>
        </div>
        <div className={styles.productGridBox}>
          <div className={styles.productGridBoxTitle}>
            <p>Customer’s most loved gifts </p>
          </div>
          <div className={styles.productGridBoxBody}>
            <div className={styles.productBox}>
                <div className={styles.imgWrapper}>
                <img src={hamper} alt="img" />
                </div>
                <p>Personalised hampers</p>
            </div>
            <div className={styles.productBox}>
                <div className={styles.imgWrapper}>
                <img src={hamper} alt="img" />
                </div>
                <p>Personalised hampers</p>
            </div>
            <div className={styles.productBox}>
                <div className={styles.imgWrapper}>
                <img src={hamper} alt="img" />
                </div>
                <p>Personalised hampers</p>
            </div>
            <div className={styles.productBox}>
                <div className={styles.imgWrapper}>
                <img src={hamper} alt="img" />
                </div>
                <p>Personalised hampers</p>
            </div>
          </div>
          <div className={styles.productGridBoxFooting}>
          <a href="#">Explore all</a>
          </div>
        </div>
      </div>
    </div>
  );
}
