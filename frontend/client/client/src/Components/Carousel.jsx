import React from "react";
import Podcast from "../Images/Podcast.gif";
import MenuButton from "./MenuButton";

function Carousel({ setMain }) {
  const styles = {
    bgColor: {
      backgroundColor: "rgb(247, 35, 35)",
      backgroundImage: "linear-gradient(rgb(247, 35, 35), rgb(238, 46, 46))",
    },
    con: {
      margin: "2rem",
      marginTop: "0.2rem",
      display: "flex",
      alignItems: "center",
    },
    textCon: {
      marginTop: "4rem",
    },
    textCon2: {
      marginTop: "4rem",
      marginBottom: "4rem",
      margin: "1rem",
    },
  };

  const desc =
    "Welcome, \nIntroducing Swift Bond Invest, the foremost hub for effective investment bond management. Our platform is meticulously crafted to equip individuals and businesses with the essential tools and knowledge required to make well-informed choices, thereby optimizing their investment opportunities within the ever-evolving realm of bonds.";

  return (
    <div className="row purple-text" style={styles.con}>
      <div
        className="col l6 s12 hide-on-med-and-down left-align"
        style={styles.textCon}
      >
        <h2 className="">Swift Bond Invest</h2>
        <h5 className="">Building Financial Futures, Swiftly and Securely</h5>
        <p className="">{desc}</p>
        <div className="d-flex align-items-center justify-content-center ">
          <MenuButton />
        </div>
      </div>
      <div className="col l6 m0 s0 hide-on-med-and-down">
        <img src={Podcast} alt="" />
      </div>
    </div>
  );
}

export default Carousel;
