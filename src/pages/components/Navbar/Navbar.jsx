import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import BrandLogo from "../../../assets/brand_logo.svg";
export default function Navbar() {
  const searchLabels = ["Apples", "Milk", "Butter"];
  const [dropdownlocation, setDropdownlocation] = useState(true);
  const [currentLabel, setCurrentLabel] = useState(searchLabels[0]);
  const [searchValue, setSearchValue] = useState();
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLabel((prevLabel) => {
        const currentIndex = searchLabels.indexOf(prevLabel);
        const nextIndex = (currentIndex + 1) % searchLabels.length;
        return searchLabels[nextIndex];
      });
    }, 2500);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [searchLabels]);

  const handleInput = (value) => {
    
    const labelTag = document.getElementById("searchLabel");
    if (labelTag && value.target.value != "") {
      labelTag.style.visibility = "hidden";
    } else {
      labelTag.style.visibility = "visible";
    }
    setSearchValue(value.target.value);
    // handleChange(value.target.value)
  };
  return (
    <>
      {dropdownlocation ? (
        <></>
      ) : (
        <div
          onClick={() => setDropdownlocation(!dropdownlocation)}
          className={styles.locationDetectionWrapper}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={styles.locationDetectionWrapperBody}
          >
            <div className={styles.Locationtitle}>
              <span
                onClick={() => setDropdownlocation(!dropdownlocation)}
                class="material-symbols-outlined"
              >
                close
              </span>
            </div>
            <div className="locationBody">
              <h3 style={{ color: "black" }} className="pt-serif-regular">
                Change / Select location
              </h3>
            </div>
          </div>
        </div>
      )}
      <div className={styles.navbarWrapper}>
        <div className={styles.brandingWrapper}>
          <div className={styles.brandingLogo}>
            <img src={BrandLogo} alt="logo" />
          </div>
          <div className={styles.brandName}>
            <h2 className="pt-serif-bold">TheWishWrap</h2>
          </div>
        </div>
        <div className={styles.locationWrapper}>
          <p style={{ fontSize: "4vh" }} className="pt-serif-bold">
            Delivering to
          </p>
          <div className={styles.locationSelection}>
            <div className="location">
              <p style={{ fontSize: "3vh" }}>400701</p>
            </div>
            <div className="dropdownicon">
              <span
                class="material-symbols-outlined"
                style={{ fontSize: "7dvh" }}
                onClick={() => setDropdownlocation(!dropdownlocation)}
              >
                {dropdownlocation ? "arrow_drop_down" : "arrow_drop_up"}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.searchBoxWrapper}>
          <div className={styles.searchDiv}>
            <input
              onChange={handleInput}
              value={searchValue}
              style={{ paddingLeft: "5vh" }}
              type="search"
              name="searchbox"
              id="searchbox"
            />
            <label style={{ display: "flex" }} htmlFor="searchbox">
              <span
                style={{ padding: "1.5vh" }}
                class="material-symbols-outlined"
              >
                search
              </span>
              <span className={styles.label} id="searchLabel">
                Search "{currentLabel}"
              </span>
            </label>
          </div>
        </div>
        <div>
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              height: "100%",
            }}
            className="pt-serif-bold"
          >
            Login
          </h1>
        </div>
        <div className={styles.cartWrapper}>
          <div className={styles.cartBody}>
          <span style={{fontSize:"6dvh"}} class="material-symbols-outlined">shopping_cart</span>
          <p className="pt-serif-regular">My cart</p>
            </div>
        </div>
      </div>
    </>
  );
}
