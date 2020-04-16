import React from "react";
import PageContainer from "../../components/PageContainer/PageContainer";
import { data } from "../../components/Services/servicesData";
import Forms from "../../components/Forms/Forms";
import webDesign from "../../assets/img/webDesign.jpg";
import aws from "../../assets/img/aws.svg";
import Logo from "../../components/Logo/Logo";
import docker from "../../assets/img/docker.svg";
import google from "../../assets/img/google.svg";
import serviceDivChildren from "../../components/Services/servicceDivChildren";
import ScrollUp from "../../components/ScrollUp/ScrollUp";
import ProgressAnimation from "../../components/ProgressAnimation/ProgressAnimation";
import "./styles.css";
import { Helmet } from "react-helmet";

export default function IntAndMod() {
  const resultsData = [
    {
      title:
        "Drive growth, retire legacy investments and improve your financial posture",
      svg: <ProgressAnimation percentageNum="93" />,
      description: "",
    },
    {
      title: "Accelerate your migration to the cloud with a trusted provider",
      svg: <ProgressAnimation percentageNum="75" />,
      description: "",
    },
    {
      title: "Maximize the value of your existing investments",
      svg: <ProgressAnimation percentageNum="61" />,
      description: "",
    },
  ];
  const resultsData2 = [
    {
      title: "Amazon Web Services (AWS)",
      svg: (
        <img style={{ width: "150px", height: "150px" }} src={aws} alt="der2" />
      ),
      description: "",
    },
    {
      title: "Docker Containers",
      svg: (
        <img
          style={{ width: "150px", height: "150px" }}
          src={docker}
          alt="der2"
        />
      ),
      description: "",
    },
    {
      title: "Google Cloud services",
      svg: (
        <img
          style={{ width: "150px", height: "150px" }}
          src={google}
          alt="der2"
        />
      ),
      description: "",
    },
  ];

  return (
    <PageContainer>
      <Helmet>
        <title>RocketDevs | Integration & Modernization</title>
        <meta name="description" content={data[0].description} />
      </Helmet>
      <ScrollUp />
      <Logo />
      <div
        style={{ backgroundImage: `url(${webDesign})` }}
        className="container-header"
      >
        <h1 className="title">{data[3].title}</h1>{" "}
      </div>
      <div
        style={{ textAlign: "center", paddingTop: 40 }}
        className="whoweare-div"
      >
        <p>{data[3].description}</p>
        <h1>We proudly use:</h1>{" "}
      </div>{" "}
      <div className="services-main-div">
        {resultsData2.map((elem, i) =>
          serviceDivChildren(elem, i, true, false)
        )}
      </div>
      <h1 className="whoweare-h1">
        Modernize Your Applications, Drive Growth and Reduce TCO
      </h1>
      <div className="services-main-div">
        {resultsData.map((elem, i) => serviceDivChildren(elem, i, true, false))}
      </div>
      <Forms />
    </PageContainer>
  );
}
