import React from "react";
import "./styles.css";
import SvgWave from "./SvgWave";
export default function Forms() {
  return (
    <SvgWave>
      <div className="form-container">
        <h1 className="form-title">Get a Quote</h1>
        <form className="form" action="/">
          <div className="form-field">
            <label className="form-label" htmlFor="name">
              Name:
            </label>
            <input className="form-input" type="text" id="name" />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="email">
              Email:
            </label>
            <input className="form-input" type="text" id="email" />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="phone">
              Phone:
            </label>
            <input className="form-input" type="text" id="phone" />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="company">
              Company:
            </label>
            <input className="form-input" type="text" id="company" />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="budget">
              Estimated Budget:
            </label>
            <input className="form-input" type="text" id="company" />

            {/* <select className="form-input" id="Budget">
              <option value="">Select Range </option>
              <option value="au">Australia</option>
              <option value="ca">Canada</option>
              <option value="usa">USA</option>
            </select> */}
          </div>
          {/* <div className="form-field">
            <label className="form-label" htmlFor="document">
              Document:
            </label>
            <input className="form-input" type="text" id="document" />
          </div> */}
          <div className="form-field">
            <label className="form-label" htmlFor="tellus">
              Tell us about your project:
            </label>
            <textarea
              id="tellus"
              name="tellus"
              placeholder="..."
              type="text"
              className="form-textArea form-input"
            />
          </div>{" "}
          <div className="form-field ">
            <label className="form-label" for="file">
              Attach an RFP
            </label>
            <input
              style={{
                padding: "1%",
                // paddingRight: "0px",
                width: "98%",
                borderRadius: ".7rem",
                backgroundColor: "#ff7e9e"
              }}
              // className="services-childrens-button"
              type="file"
              accept=".doc, .docx,.ppt, .pptx,.txt,.pdf"
            />
          </div>
          <div className="form-field">
            <input
              className="services-childrens-button"
              id="form-send-btn"
              type="submit"
              value=" SEND "
            />
          </div>
        </form>
      </div>
    </SvgWave>
  );
}
