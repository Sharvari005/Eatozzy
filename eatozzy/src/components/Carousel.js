import React from 'react'

// import your images
import burger from "../assets/images/burger.jpeg"
import cake from "../assets/images/cake.jpeg"
import pasta from "../assets/images/pasta.jpeg"
import pizza from "../assets/images/pizza.jpeg"
import salads from "../assets/images/salads.jpeg"
import pavbhaji from "../assets/images/pavbhaji.jpeg"
import crossiant from "../assets/images/crossiant.jpeg"
import food from "../assets/images/food.jpeg"
import Momo from "../assets/images/Momo.jpeg"
import a from "../assets/images/a.jpeg"
import b from "../assets/images/b.jpeg"
import c from "../assets/images/c.jpeg"
import d from "../assets/images/d.jpeg"
import e from "../assets/images/e.jpeg"
import f from "../assets/images/f.jpeg"
import g from "../assets/images/g.jpeg"
import h from "../assets/images/h.jpeg"
import i from "../assets/images/i.jpeg"
import j from "../assets/images/j.jpeg"
import k from "../assets/images/k.jpeg"
import l from "../assets/images/l.jpeg"
import m from "../assets/images/m.jpeg"
import n from "../assets/images/n.jpeg"
import o from "../assets/images/o.jpeg"
import p from "../assets/images/p.jpeg"
import q from "../assets/images/q.jpeg"
import r from "../assets/images/r.jpeg"
import s from "../assets/images/s.jpeg"
import t from "../assets/images/t.jpeg"
import u from "../assets/images/u.jpeg"
import v from "../assets/images/v.jpeg"
import w from "../assets/images/w.jpeg"


export default function Carousel() {
  // put all images in an array
  const images = [burger, pavbhaji, pasta, pizza, salads,crossiant,food,Momo,a,cake,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w];

  // pick 3 random images (changes on every refresh)
  const randomImages = images.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      style={{ objectFit: "contain" }}
    >
      <div className="carousel-inner" id="carousel">
        {/* Search bar */}
        <div className="carousel-caption" style={{ zIndex: "10" }}>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success text-white bg-success"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>

        {/* Render carousel items dynamically */}
        {randomImages.map((img, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <div
              style={{
                position: "relative",
                height: "500px",
                overflow: "hidden",
              }}
            >
              {/* Blurred background */}
              <img
                src={img}
                alt={`slide-${index}`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "blur(15px) brightness(60%)",
                }}
              />

              {/* Foreground (main image) */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <img
                  src={img}
                  alt={`slide-${index}`}
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
