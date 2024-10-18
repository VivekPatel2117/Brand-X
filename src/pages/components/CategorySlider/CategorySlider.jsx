import React, { useState, useRef } from "react";
import styles from "./CategorySlider.module.css";
import crochet from '../../../assets/crochet.png';
export default function CategorySlider({ title, data }) {
  const [nBox, setNBox] = useState(10);
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
    <div className={styles.CategorySliderWrapper}>
      <div className={styles.titleWrapper}>
        <h1>
          {title} <a href="#">Explore more</a>
        </h1>
      </div>
      <div className={styles.sliderWrapper}>
        <div className={styles.leftArrow} onClick={scrollToLeft}>
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </div>
        <div style={{gridTemplateColumns:`repeat(${nBox},1fr)`}} ref={slider} className={styles.SliderBoxWrapper}>
          {Array.from({ length: nBox }, (_, index) => (
            <div key={index} className={styles.sliderBoxConatianer}>
            <div key={index} className={styles.sliderBox}>
             <img className={styles.catgoeryImg} src={crochet} alt="cateory" />
            </div>
            <div className={styles.rectOverlay}>
              <p>200+ fine Jewellery</p>
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
