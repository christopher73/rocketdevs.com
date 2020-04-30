import React from "react";
import "./style.css";
import img1 from "../../assets/img/portfolio/starkclass.svg";
import img2 from "../../assets/img/portfolio/noni.png";
import img3 from "../../assets/img/portfolio/fiat.png";
import img4 from "../../assets/img/portfolio/garagenet.png";
import imgLogo1 from "../../assets/img/portfolio/starkclass-logo.svg";
import imgLogo2 from "../../assets/img/portfolio/noni-logo.png";
import imgLogo3 from "../../assets/img/portfolio/fiat-logo.png";
import imgLogo4 from "../../assets/img/portfolio/sbs.png";

export default function ShowCase() {
  const images = [
    {
      projectName: "starkclass",
      color: "217, 210, 193",
      logoSrc: imgLogo1,
      imageSrc: img1,
      link: "https://starkclass.com",
    },
    {
      projectName: "nonis",
      color: "72, 83, 140",
      logoSrc: imgLogo2,
      imageSrc: img2,
      link: "",
    },
    {
      projectName: "fiatcafe",
      color: "227, 153, 138",
      logoSrc: imgLogo3,
      imageSrc: img3,
      link: "https://fiatcafenyc.com/",
    },
    {
      projectName: "nccg",
      color: "218, 233, 237",
      logoSrc: imgLogo4,
      imageSrc: img4,
      link: "https://garagenet.com/",
    },
  ];
  return (
    <div className="show-case-container">
      {images.map((image, i) => (
        <div
          key={i}
          className="show-case-child"
          style={{ backgroundImage: `url(${image.imageSrc})` }}
        >
          <div
            style={{ backgroundColor: `rgba(${image.color}, 0.7) ` }}
            className="show-case-inner-child"
          >
            <img className="logo" src={image.logoSrc} alt={image.name} />
          </div>
        </div>
      ))}
    </div>
  );
}
