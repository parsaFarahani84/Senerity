import React from "react";
import "./testimonials.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { SwiperSlide, Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    p: `Nulla vitae euismod turpis, a elementum est. Aliquam erat volutpat.
    Nunc facilisis, nunc in efficitur eleifend, massa lacus egestas
    libero, in varius augue risus nec ex. Integer egestas ex mattis urna
    hendrerit, vel consequat nisi varius`,
    h3: "-Janelle Sandoval",
    small: "President, ACME Company",
  },
  {
    p: `Nulla vitae euismod turpis, a elementum est. Aliquam erat volutpat.
    Nunc facilisis, nunc in efficitur eleifend, massa lacus egestas
    libero, in varius augue risus nec ex. Integer egestas ex mattis urna
    hendrerit, vel consequat nisi varius`,
    h3: "-Janelle Sandoval",
    small: "President, ACME Company",
  },
  {
    p: `Nulla vitae euismod turpis, a elementum est. Aliquam erat volutpat.
    Nunc facilisis, nunc in efficitur eleifend, massa lacus egestas
    libero, in varius augue risus nec ex. Integer egestas ex mattis urna
    hendrerit, vel consequat nisi varius`,
    h3: "-Janelle Sandoval",
    small: "President, ACME Company",
  },
  {
    p: `Nulla vitae euismod turpis, a elementum est. Aliquam erat volutpat.
    Nunc facilisis, nunc in efficitur eleifend, massa lacus egestas
    libero, in varius augue risus nec ex. Integer egestas ex mattis urna
    hendrerit, vel consequat nisi varius`,
    h3: "-Janelle Sandoval",
    small: "President, ACME Company",
  },
  {
    p: `Nulla vitae euismod turpis, a elementum est. Aliquam erat volutpat.
    Nunc facilisis, nunc in efficitur eleifend, massa lacus egestas
    libero, in varius augue risus nec ex. Integer egestas ex mattis urna
    hendrerit, vel consequat nisi varius`,
    h3: "-Janelle Sandoval",
    small: "President, ACME Company",
  },
  {
    p: `Nulla vitae euismod turpis, a elementum est. Aliquam erat volutpat.
    Nunc facilisis, nunc in efficitur eleifend, massa lacus egestas
    libero, in varius augue risus nec ex. Integer egestas ex mattis urna
    hendrerit, vel consequat nisi varius`,
    h3: "-Janelle Sandoval",
    small: "President, ACME Company",
  },
  {
    p: `Nulla vitae euismod turpis, a elementum est. Aliquam erat volutpat.
    Nunc facilisis, nunc in efficitur eleifend, massa lacus egestas
    libero, in varius augue risus nec ex. Integer egestas ex mattis urna
    hendrerit, vel consequat nisi varius`,
    h3: "-Janelle Sandoval",
    small: "President, ACME Company",
  },
  {
    p: `Nulla vitae euismod turpis, a elementum est. Aliquam erat volutpat.
    Nunc facilisis, nunc in efficitur eleifend, massa lacus egestas
    libero, in varius augue risus nec ex. Integer egestas ex mattis urna
    hendrerit, vel consequat nisi varius`,
    h3: "-Janelle Sandoval",
    small: "President, ACME Company",
  },
];

function Teastimonails() {
  return (
    <div className="whole">
      <Swiper
        className="tes-component"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={3}
        pagination={{ clickable: true }}
      >
        <div className="tes-header">
          <h1>Testimonials</h1>
          <p>
            Sed fermentum, felis ut cursus varius, purus velit placerat tortor,
            at faucibus elit purus posuere velit. Integer sit amet felis ligula.
          </p>
        </div>

        {data.map(({ p, h3, small }, index) => {
          return (
            <SwiperSlide key={index} className="tes-card">
              <p>{p}</p>

              <h3>{h3}</h3>
              <small>{small}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Teastimonails;
