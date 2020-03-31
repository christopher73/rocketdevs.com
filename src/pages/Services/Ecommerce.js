import React from "react";
import PageContainer from "../../components/PageContainer/PageContainer";
import { data } from "../../components/Services/servicesData";
import Forms from "../../components/Forms/Forms";
import "./styles.css";
import webDesign from "../../assets/webDesign.jpg";
import serviceDivChildren from "../../components/Services/servicceDivChildren";
import ScrollUp from "../../components/ScrollUp/ScrollUp";
export default function Ecommerce() {
  const resultsData = [
    {
      title: "+20%",
      svg: (
        <div className="web-design-div">
          <div className="web-design-div-svg">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="magic"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="svg-inline--fa fa-magic fa-w-16 fa-2x"
            >
              <path
                fill="currentColor"
                d="M224 96l16-32 32-16-32-16-16-32-16 32-32 16 32 16 16 32zM80 160l26.66-53.33L160 80l-53.34-26.67L80 0 53.34 53.33 0 80l53.34 26.67L80 160zm352 128l-26.66 53.33L352 368l53.34 26.67L432 448l26.66-53.33L512 368l-53.34-26.67L432 288zm70.62-193.77L417.77 9.38C411.53 3.12 403.34 0 395.15 0c-8.19 0-16.38 3.12-22.63 9.38L9.38 372.52c-12.5 12.5-12.5 32.76 0 45.25l84.85 84.85c6.25 6.25 14.44 9.37 22.62 9.37 8.19 0 16.38-3.12 22.63-9.37l363.14-363.15c12.5-12.48 12.5-32.75 0-45.24zM359.45 203.46l-50.91-50.91 86.6-86.6 50.91 50.91-86.6 86.6z"
                className="web-design-svg"
              ></path>
            </svg>
          </div>
        </div>
      ),
      description: "Conversion Rates"
    },
    {
      title: "+3.6%",
      svg: (
        <div className="web-design-div">
          <div className="web-design-div-svg">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="cart-plus"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="svg-inline--fa fa-cart-plus fa-w-18 fa-2x"
            >
              <path
                fill="currentColor"
                d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z"
                className="web-design-svg"
              ></path>
            </svg>
          </div>
        </div>
      ),
      description: "Average Order Value"
    },
    {
      title: "+33%",
      svg: (
        <div className="web-design-div">
          <div className="web-design-div-svg">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="mobile-alt"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="svg-inline--fa fa-mobile-alt fa-w-10 fa-2x"
            >
              <path
                fill="currentColor"
                d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"
                className="web-design-svg"
              ></path>
            </svg>
          </div>
        </div>
      ),
      description: "Mobile Revenue"
    },
    {
      title: "-6%",
      svg: (
        <div className="web-design-div">
          <div className="web-design-div-svg">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="cart-arrow-down"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="svg-inline--fa fa-cart-arrow-down fa-w-18 fa-2x"
            >
              <path
                fill="currentColor"
                d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM403.029 192H360v-60c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v60h-43.029c-10.691 0-16.045 12.926-8.485 20.485l67.029 67.029c4.686 4.686 12.284 4.686 16.971 0l67.029-67.029c7.559-7.559 2.205-20.485-8.486-20.485z"
                className="web-design-svg"
              ></path>
            </svg>
          </div>
        </div>
      ),
      description: "Shopping Rate Abandonment Rate"
    },
    {
      title: "-62%",
      svg: (
        <div className="web-design-div">
          <div className="web-design-div-svg">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="money-check-alt"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="svg-inline--fa fa-money-check-alt fa-w-20 fa-2x"
            >
              <path
                fill="currentColor"
                d="M608 32H32C14.33 32 0 46.33 0 64v384c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM176 327.88V344c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-16.29c-11.29-.58-22.27-4.52-31.37-11.35-3.9-2.93-4.1-8.77-.57-12.14l11.75-11.21c2.77-2.64 6.89-2.76 10.13-.73 3.87 2.42 8.26 3.72 12.82 3.72h28.11c6.5 0 11.8-5.92 11.8-13.19 0-5.95-3.61-11.19-8.77-12.73l-45-13.5c-18.59-5.58-31.58-23.42-31.58-43.39 0-24.52 19.05-44.44 42.67-45.07V152c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v16.29c11.29.58 22.27 4.51 31.37 11.35 3.9 2.93 4.1 8.77.57 12.14l-11.75 11.21c-2.77 2.64-6.89 2.76-10.13.73-3.87-2.43-8.26-3.72-12.82-3.72h-28.11c-6.5 0-11.8 5.92-11.8 13.19 0 5.95 3.61 11.19 8.77 12.73l45 13.5c18.59 5.58 31.58 23.42 31.58 43.39 0 24.53-19.05 44.44-42.67 45.07zM416 312c0 4.42-3.58 8-8 8H296c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h112c4.42 0 8 3.58 8 8v16zm160 0c0 4.42-3.58 8-8 8h-80c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16zm0-96c0 4.42-3.58 8-8 8H296c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h272c4.42 0 8 3.58 8 8v16z"
                className="web-design-svg"
              ></path>
            </svg>
          </div>
        </div>
      ),
      description: "New Content Creation Cost"
    },
    {
      title: "-93%",
      svg: (
        <div className="web-design-div">
          <div className="web-design-div-svg">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="download"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="svg-inline--fa fa-download fa-w-16 fa-2x"
            >
              <path
                fill="currentColor"
                d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                className="web-design-svg"
              ></path>
            </svg>
          </div>
        </div>
      ),
      description: "Downtime"
    }
  ];
  return (
    <PageContainer>
      <ScrollUp />
      <div
        style={{ backgroundImage: `url(${webDesign})` }}
        className="container-header"
      >
        <h1 className="title">{data[0].title}</h1>{" "}
      </div>
      <div className="whoweare-div">
        <p style={{ textAlign: "center", paddingTop: 40 }}>
          {data[0].description}
        </p>
      </div>
      <div className="services-main-div">
        {resultsData.map((elem, i) => serviceDivChildren(elem, i, true, false))}
      </div>
      <Forms />
    </PageContainer>
  );
}
