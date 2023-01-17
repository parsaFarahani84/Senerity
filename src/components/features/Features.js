import React from "react";
import "./features.css";

function Features() {
  return (
    <div className="container" id="features">
      <div className="main-features">
        <h1>Main Features</h1>
        <p className="small-t">
          Sed fermentum, felis ut cursus varius, purus velit placerat tortor, at
          faucibus elit purus posuere velit. Integer sit amet felis ligula.
        </p>
      </div>

      <div className="main-cards">
        <div className="card">
          <img src="/images/fe-1.png" />
          <p>Launch Your Business</p>
          <small>
            An enim nullam tempor gravida donec enim ipsum blandit porta justo
            integer odio velna vitae auctor integer.
          </small>
        </div>
        <div className="card">
          <img src="/images/fe-2.png" />
          <p>Easy Customization</p>
          <small>
            An enim nullam tempor gravida donec enim ipsum blandit porta justo
            integer odio velna vitae auctor integer.
          </small>
        </div>
        <div className="card">
          <img src="/images/fe-3.png" />
          <p>Loved by Many</p>
          <small>
            An enim nullam tempor gravida donec enim ipsum blandit porta justo
            integer odio velna vitae auctor integer.
          </small>
        </div>
      </div>
    </div>
  );
}

export default Features;
