import React from "react";
import PageContainer from "../../components/PageContainer/PageContainer";
import { data } from "../../components/Services/servicesData";
import Forms from "../../components/Forms/Forms";
import "./styles.css";
import webDesign from "../../assets/img/webDesign.jpg";
import serviceDivChildren from "../../components/Services/servicceDivChildren";
import ScrollUp from "../../components/ScrollUp/ScrollUp";
import iphone from "../../assets/img/iphone.png";
import android from "../../assets/img/android.png";
import cross from "../../assets/img/cross.png";
import Logo from "../../components/Logo/Logo";

export default function SoftwareDev() {
  const resultsData = [
    {
      title: "iOS App Development",
      svg: (
        <div
          style={{
            minWidth: "100%",
            minHeight: "100%",
            backgroundImage: `url(${iphone})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            marginTop: "20px",
            borderRadius: "20px",
          }}
        />
      ),
      description:
        "Impressive UI and best UX form the crux of all iOS apps. Our tech-savvy developers and experts keep themselves updated on the latest trends and changes in iOS development. We start the process with thorough research and planning and then systematically design, develop, and test the mobile app. We take the complete responsibility of our clients’ iOS apps from development to app submission and approval.",
    },
    {
      title: "Android App Development",
      svg: (
        <div
          style={{
            minWidth: "100%",
            minHeight: "100%",
            backgroundImage: `url(${android})`,
            backgroundSize: "90% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            marginTop: "20px",
            borderRadius: "20px",
          }}
        />
      ),
      description:
        "We offer intuitive app development and ensure the best user experience. We do not confine our responsibility to app development for our clients but take it a step ahead to marketing and PR and help their business grow. Our clients get the option to select from multiple marketing packages based on their budget.",
    },
    {
      title: "Cross-platform App Development",
      svg: (
        <div
          style={{
            minWidth: "100%",
            minHeight: "100%",
            backgroundImage: `url(${cross})`,
            backgroundSize: "135% 100%",
            backgroundPosition: "center",
            marginTop: "20px",
            borderRadius: "20px",
          }}
        />
      ),
      description:
        " We offer cross-platform app development for its benefits of lower cost, time effectiveness, and uniformity. Once they hire us, our clients can be sure of getting user-friendly mobile apps with attractive UI, and excellent UX. After the launch, we also provide support and maintenance as needed to help our clients’ business grow hassle-free.",
    },
  ];
  return (
    <PageContainer>
      <ScrollUp />
      <Logo />
      <div
        style={{ backgroundImage: `url(${webDesign})` }}
        className="container-header"
      >
        <h1 className="title">{data[1].title}</h1>{" "}
      </div>
      <div
        style={{ textAlign: "center", paddingTop: 40 }}
        className="whoweare-div"
      >
        <p>{data[1].description}</p>
        <h1 className="whoweare-h1">end-to-end mobile app development</h1>
        <p> for iOS, Android, and cross-platform applications.</p>
      </div>
      <div className="services-main-div">
        {resultsData.map((elem, i) => serviceDivChildren(elem, i, true, false))}
      </div>
      <Forms />
    </PageContainer>
  );
}

// iOS Development
// iOS App Development
// Impressive UI and best UX form the crux of all iOS apps. Our tech-savvy developers and experts keep themselves updated on the latest trends and changes in iOS development. We start the process with thorough research and planning and then systematically design, develop, and test the mobile app. We take the complete responsibility of our clients’ iOS apps from development to app submission and approval.

// iOS Development
// Android App Development
// We offer intuitive app development and ensure the best user experience. We do not confine our responsibility to app development for our clients but take it a step ahead to marketing and PR and help their business grow. Our clients get the option to select from multiple marketing packages based on their budget.

// iOS Development
// Cross-platform App Development
// We offer cross-platform app development for its benefits of lower cost, time effectiveness, and uniformity. Once they hire us, our clients can be sure of getting user-friendly mobile apps with attractive UI, and excellent UX. After the launch, we also provide support and maintenance as needed to help our clients’ business grow hassle-free.
