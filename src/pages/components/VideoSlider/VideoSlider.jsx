import React,{useRef} from 'react'
import styles from './VideoSlider.module.css'
export default function VideoSlider({title}) {
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
    <div className={styles.VideoSliderWrapper}>
        <div className={styles.titleWrapper}>
            <h1>{title}</h1>
        </div>
        <div className={styles.videoSliderConatiner}>
        <div className={styles.leftArrow} onClick={scrollToLeft}>
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </div>
        <div style={{gridTemplateColumns:`repeat(10,1fr)`}} ref={slider} className={styles.videoBoxWrapper}>
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index} className={styles.sliderBoxConatianer}>
            <div key={index} className={styles.sliderBox}>
             <video className={styles.catgoeryImg} src={""} alt="cateory" />
            </div>
            </div>
          ))}
        </div>
        <div className={styles.rightArrow} onClick={scrollToRight}>
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </div>
        </div>
    </div>
  )
}
