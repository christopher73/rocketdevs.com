import React from "react";

export default function Forms() {
  const style = {
    div: {
      marginTop: "2rem"
    },
    divP: {
      width: "80%",
      marginRight: "auto"
    },
    title: {
      textAlign: "right",
      background: "#23232e",
      color: "white",
      left: 0,
      padding: "1rem",
      fontSize: "2rem",
      fontWeight: "bold"
    },
    desc: {
      color: "white",
      lineHeight: 1.85,
      background: "rgba(35, 35, 46, 0.96)",
      textAlign: "left",
      padding: "2rem",
      marginLeft: "2rem",
      marginTop: "2rem",
      display: "flex",
      flexWrap: "wrap"
    },
    formFields: {
      width: "45%",
      margin: "auto"
    },
    formLabel: {
      // padding: "5px",
      width: "100%",
      display: "block",
      fontSize: "1rem"
    },
    formInput: {
      // pointerEvents: "none",
      // margin: "auto",
      marginBottom: 20,
      width: "100%"
      // padding: "5px"
    }
  };
  return (
    <div className="landing-mai-div" style={style.div}>
      <div style={style.divP}>
        <h1 className="mai-title" style={style.title}>
          Get a Quote
        </h1>
        <form style={style.desc} action="/">
          <div style={style.formFields}>
            <label style={style.formLabel} for="name">
              Name:
            </label>
            <input style={style.formInput} type="text" id="name" />
          </div>
          <div style={style.formFields}>
            <label style={style.formLabel} for="email">
              Email:
            </label>
            <input style={style.formInput} type="text" id="email" />
          </div>
          <div style={style.formFields}>
            <label style={style.formLabel} for="phone">
              Phone:
            </label>
            <input style={style.formInput} type="text" id="phone" />
          </div>
          <div style={style.formFields}>
            <label style={style.formLabel} for="company">
              Company:
            </label>
            <input style={style.formInput} type="text" id="company" />
          </div>
          <div style={style.formFields}>
            <label style={style.formLabel} for="budget">
              Budget:
            </label>
            <input style={style.formInput} type="text" id="budget" />
          </div>
          <div style={style.formFields}>
            <label style={style.formLabel} for="document">
              Document:
            </label>
            <input style={style.formInput} type="text" id="document" />
          </div>
          <div style={{ width: "95%", margin: "auto" }}>
            <label style={style.formLabel} for="tellus">
              Tell us about your project:
            </label>
            <input
              style={{ width: "100%", height: "100px" }}
              type="text"
              id="tellus"
            />
          </div>
          <div style={{ width: "95%", margin: "auto" }}>
            <input
              style={{
                width: "50%",
                margin: "auto",
                display: "block",
                marginTop: "1rem",
                padding: "5px 15px",
                fontSize: "1.2rem"
              }}
              type="submit"
              value="SEND"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
