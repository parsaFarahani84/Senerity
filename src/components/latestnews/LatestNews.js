import React from "react";
import "./latestnews.css";

function LatestNews() {
  return (
    <div className="news-container" id="news">
      <div className="news-header">
        <h1>Latest News</h1>
        <p className="our-blue">
          Sed fermentum, felis ut cursus varius, purus velit placerat tortor, at
          faucibus elit purus posuere velit. Integer sit amet felis ligula.
        </p>
      </div>

      <div className="our-grids">
        <div className="news-grid">
          <img src="/images/w1.jpg" />
          <small className="sub">ADVICE</small>
          <h3>Prepping For Client Work </h3>
          <div className="news-footer">
            <p>
              <img src="/images/team1.jpg" />
              <small className="name">Hans Desjarlais</small>
              <small className="date">on April 17, 2019</small>
            </p>
          </div>
        </div>
        <div className="news-grid">
          <img src="/images/w2.jpg" />
          <small className="sub">ADVICE</small>
          <h3> Some Light Reading Material</h3>
          <div className="news-footer">
            <p>
              <img src="/images/team1.jpg" />
              <small className="name">Hans Desjarlais</small>
              <small className="date">on April 17, 2019</small>
            </p>
          </div>
        </div>
        <div className="news-grid">
          <img src="/images/w3.jpg" />
          <small className="sub">ADVICE</small>
          <h3>Becoming An Expert In Your Field</h3>
          <div className="news-footer">
            <p>
              <img src="/images/team1.jpg" />
              <small className="name">Hans Desjarlais</small>
              <small className="date">on April 17, 2019</small>
            </p>
          </div>
        </div>
      </div>

      <div className="blog-b">
        <button>Read The Blog</button>
      </div>
    </div>
  );
}

export default LatestNews;
