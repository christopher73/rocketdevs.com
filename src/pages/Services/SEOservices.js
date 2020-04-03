import React from "react";
import PageContainer from "../../components/PageContainer/PageContainer";
import { data } from "../../components/Services/servicesData";
import Forms from "../../components/Forms/Forms";
import webDesign from "../../assets/img/webDesign.jpg";
import serviceDivChildren from "../../components/Services/servicceDivChildren";
import ScrollUp from "../../components/ScrollUp/ScrollUp";
import ProgressAnimation from "../../components/ProgressAnimation/ProgressAnimation";
import "./styles.css";

export default function SEOservices() {
  const resultsData = [
    {
      title: "of online experiences begin with a search engine",
      svg: <ProgressAnimation percentageNum="93" />,
      description: ""
    },
    {
      title: "of people never scroll past the first page of results",
      svg: <ProgressAnimation percentageNum="75" />,
      description: ""
    },
    {
      title: "of users research a product before making a purchase",
      svg: <ProgressAnimation percentageNum="61" />,
      description: ""
    }
  ];
  return (
    <PageContainer>
      <ScrollUp />
      <div
        style={{ backgroundImage: `url(${webDesign})` }}
        className="container-header"
      >
        <h1 className="title">{data[2].title}</h1>{" "}
      </div>
      <div
        style={{ textAlign: "center", paddingTop: 40 }}
        className="whoweare-div"
      >
        <p>{data[2].description}</p>
        <h1>60,000+ Searches Happen Each Second</h1>
        <p>
          In 2020, SEO is not about ranking for popular terms; it’s about being
          found when it matters most. Our skilled search engine optimization
          experts carefully research the right keywords for your business,
          ensuring you are gaining qualified traffic that converts to your
          bottom line.
        </p>
      </div>
      <div className="services-main-div">
        {resultsData.map((elem, i) => serviceDivChildren(elem, i, true, false))}
      </div>
      <Forms />
    </PageContainer>
  );
}
