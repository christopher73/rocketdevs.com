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
              Budget:
            </label>
            <input className="form-input" type="text" id="budget" />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="document">
              Document:
            </label>
            <input className="form-input" type="text" id="document" />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="tellus">
              Tell us about your project:
            </label>
            <textarea type="text" className="form-textArea" />
          </div>
          <div style={{ width: "95%", margin: "auto" }}>
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
