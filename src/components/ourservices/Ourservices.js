import React from "react";
import "./ourservices.css";

function OurServices() {
  return (
    <div className="our-container" id="services">
      <div className="our-header">
        <h1>Our Services</h1>
        <p className="our-blue">
          Sed fermentum, felis ut cursus varius, purus velit placerat tortor, at
          faucibus elit purus posuere velit. Integer sit amet felis ligula.
        </p>
        <small className="s-1">
          Sed quis nulla accumsan, cursus diam suscipit, congue sem. Proin
          semper augue id ligula convallis, in tincidunt ipsum maximus. Morbi
          semper ante in justo feugiat faucibus. Curabitur sollicitudin
          tincidunt metus et ullamcorper. Maecenas cursus eleifend dui, id
          sagittis erat blandit eu. Morbi sit amet sapien commodo, imperdiet
          sapien a, convallis sem. Pellentesque sollicitudin commodo lacinia.
        </small>
        <small className="s-2">
          Proin aliquam ligula vel ligula pulvinar tincidunt. Suspendisse
          potenti. Cras sit amet rutrum erat. Aliquam ultrices blandit sapien,
          vitae pulvinar sem tincidunt vitae. Nam ultrices fermentum nunc et
          porta. Quisque ullamcorper sapien congue lorem porttitor volutpat.
        </small>
      </div>
      <div className="our-grids">
        <div className="grid">
          <img src="/images/service1.jpg" />
          <h2>Digital Marketing</h2>
          <small>
            Proin ligula diam, pulvinar quis metus involum, suscipit lobortis
            nibh. Morbi scelerisque magna sagittis sit amet.
          </small>
          <button className="our-button">Learn More</button>
        </div>
        <div className="grid">
          <img src="/images/service2.jpg" />
          <h2>Business Consulting</h2>
          <small>
            Proin ligula diam, pulvinar quis metus involum, suscipit lobortis
            nibh. Morbi scelerisque magna sagittis sit amet.
          </small>
          <button className="our-button">Learn More</button>
        </div>
        <div className="grid">
          <img src="/images/service3.jpg" />
          <h2>Market Research</h2>
          <small>
            Proin ligula diam, pulvinar quis metus involum, suscipit lobortis
            nibh. Morbi scelerisque magna sagittis sit amet.
          </small>
          <button className="our-button">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
