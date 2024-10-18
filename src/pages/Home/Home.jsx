import React from 'react'
import styles from './Home.module.css'
import Navbar from '../components/Navbar/Navbar'
import Ballon from '../../assets/ballon.png'
import Family from '../../assets/family.png'
import Couple from '../../assets/couple.png';
import Freind from '../../assets/freind.png';
import CategorySlider from '../components/CategorySlider/CategorySlider'
import RandomImgaesPostions from '../components/RandomImgaesPostions/RandomImgaesPostions'
import VideoSlider from '../components/VideoSlider/VideoSlider'
import ProductGrid from '../components/4in1Grid/ProductGrid'
import ProductSlider from '../components/ProductSlider/ProductSlider'
export default function Home() {
  return (
    <>
    <Navbar/>
    <div className={styles.containerWrapper}>
      <div className={styles.firstHeaderBoxWrapper}>
          <div className={styles.firstHeaderBoxBody}>
              <div className={styles.firstHeaderBoxBodyText}>
              <h1 className='pt-serif-bold '>
              Find the perfect gift  for every <br />
              Occasion.
              </h1>
              <p className='pt-serif-regular'>Discover unique and thoughtful gifts from various sellers all in one place</p>
              <button className={styles.firstHeaderBoxBodyTextButton}>Shop now</button>
              </div>
              <div className={styles.imgWrapper}>
                <img src={Ballon} alt="ballon" />
              </div>
          </div>
      </div>
      <div className={styles.secondHeaderBoxWrapper}>
        <div className={styles.secondHeaderBoxWrapperInternalBox}>
          <div className={styles.textWrapper}>
            <h3>Meeting the family after long time?</h3>
            <p>See some amazing handpicked gifts for your family</p>
            <button className={styles.internalBoxButtons}>Gifts for family</button>
          </div>
          <div className={styles.imgWrapper}>
            <img src={Family} alt="family gifts" />
          </div>
        </div>
        <div className={styles.secondHeaderBoxWrapperInternalBox}>
          <div className={styles.textWrapper}>
            <h3>Want to gift your friend a memorable gift?</h3>
            <p>Explore our latest collection of #friendForever</p>
            <button className={styles.internalBoxButtons}>Gifts for Friend</button>
          </div>
          <div className={styles.imgWrapper}>
            <img src={Freind} alt="freind gifts" />
          </div>
        </div>
        <div className={styles.secondHeaderBoxWrapperInternalBox}>
          <div className={styles.textWrapper}>
            <h3>Anniversary or special occasion coming up?</h3>
            <p>Get hands on a premium couple gift hamper </p>
            <button className={styles.internalBoxButtons}>Gifts for partner</button>
          </div>
          <div className={styles.imgWrapper}>
            <img src={Couple} alt="couple gifts" />
          </div>
        </div>
      </div>
      <div className={styles.componentCategoryWrapper}>
        <CategorySlider data={[]} title={"Shop by top categories"}/>
      </div>
      <div className={styles.randomImgDivWrapper}>
        <RandomImgaesPostions/>
      </div>
      <div className={styles.componentCategoryWrapper}>
        <VideoSlider title={"Shop by videos"}/>
      </div>
      <div style={{height:'90dvh'}} className={styles.randomImgDivWrapper}>
        <ProductGrid/>
      </div>
      <div className={styles.componentCategoryWrapper}>
        <ProductSlider title={"Best selling in hampers"}/>
      </div>
    </div>
    
    </>
  )
}
