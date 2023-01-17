import React from "react";
import "./trustedBrands.css";

function TrustedBrands() {
  return (
    <div className="trust-container">
      <div className="trust-header">
        <h1>Trusted Brands</h1>
        <p className="blue-t">
          Sed fermentum, felis ut cursus varius, purus velit placerat tortor, at
          faucibus elit purus posuere velit. Integer sit amet felis ligula.
        </p>
      </div>

      <div className="brands">
        <img src="/images/brand1.png" />
        <img src="/images/brand2.png" />
        <img src="/images/brand3.png" />
        <img src="/images/brand4.png" />
        <img src="/images/brand5.png" />
        <img src="/images/brand6.png" />
      </div>

      <div className="growing">
        <div className="sec-1">
          <h1>Start Growing Today</h1>
          <p>
            Sed fermentum, felis ut cursus varius, purus velit placerat tortor,
            at faucibus elit purus posuere velit.
          </p>
        </div>

        <div className="sec-2">
          <small>Want to learn more?</small>
          <button>Download Now </button>
        </div>
      </div>
    </div>
  );
}

export default TrustedBrands;
