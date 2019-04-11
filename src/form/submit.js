import React, { Component } from "react";
import { Field } from "formik";
import { Link } from "react-router-dom";

class SubmitPage extends Component {
  render() {
    return (
      <div>
        <div>
          <label>
            <Field type="checkbox" name="tos" />I agree to the TOS
          </label>
        </div>
        <Link to="/form/location" className="next">
          Previous
        </Link>
        <button className="next">Submit</button>
      </div>
    );
  }
}

export default SubmitPage;
