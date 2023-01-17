import React from "react";
import "./photoGallery.css";

function PhotoGallery() {
  return (
    <div className="photo-container">
      <div className="photo-header">
        <h1>Photo Gallery</h1>
        <p className="blue-t">
          Sed fermentum, felis ut cursus varius, purus velit placerat tortor, at
          faucibus elit purus posuere velit. Integer sit amet felis ligula.
        </p>
      </div>
      <div className="grid-photos">
        <div className="photo">
          <img src="/images/gallery1.jpg" />
        </div>
        <div className="photo">
          <img src="/images/gallery2.jpg" />
        </div>
        <div className="photo">
          <img src="/images/gallery3.jpg" />
        </div>
        <div className="photo">
          <img src="/images/gallery4.jpg" />
        </div>
        <div className="photo">
          <img src="/images/gallery5.jpg" />
        </div>
        <div className="photo">
          <img src="/images/gallery6.jpg" />
        </div>
        <div className="photo">
          <img src="/images/gallery7.jpg" />
        </div>
        <div className="photo">
          <img src="/images/gallery8.jpg" />
        </div>
        <div className="photo">
          <img src="/images/gallery9.jpg" />
        </div>
        <div className="photo">
          <img src="/images/gallery10.jpg" />
        </div>
        <div className="photo">
          <img src="/images/gallery11.jpg" />
        </div>
        <div className="photo">
          <img src="/images/gallery12.jpg" />
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;
