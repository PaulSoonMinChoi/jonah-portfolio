/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef, useEffect, useState } from "react";
import "../../styles/homepage.css";
import Image from "next/image";
import Link from "next/link";

const imgObj = [
  { img: "/perfectnightv2/1.jpg" },
  { img: "/perfectnightv2/2.jpg" },
  { img: "/perfectnightv2/3.jpg" },
  { img: "/perfectnightv2/4.jpg" },
  { img: "/perfectnightv2/5.jpg" },
  { img: "/perfectnightv2/6.jpg" },
  { img: "/perfectnightv2/7.jpg" },
  { img: "/perfectnightv2/8.jpg" },

  { img: "/chellaig2/9.jpg" },
  { img: "/chellaig2/10.jpg" },
  { img: "/chellaig2/11.jpg" },
  { img: "/chellaig2/12.jpg" },
  { img: "/chellaig2/13.jpg" },
  { img: "/chellaig2/14.jpg" },
  { img: "/chellaig2/15.jpg" },
  { img: "/chellaig2/16.jpg" },

  { img: "/hyperline/1.jpg" },
  { img: "/hyperline/2.jpg" },
  { img: "/hyperline/3.jpg" },
  { img: "/hyperline/4.jpg" },
  { img: "/hyperline/5.jpg" },
  { img: "/hyperline/6.jpg" },
  { img: "/hyperline/7.jpg" },
  { img: "/hyperline/8.jpg" },

  { img: "/chellaig2/1.jpg" },
  { img: "/chellaig2/2.jpg" },
  { img: "/chellaig2/3.jpg" },
  { img: "/chellaig2/4.jpg" },
  { img: "/chellaig2/5.jpg" },
  { img: "/chellaig2/6.jpg" },
  { img: "/chellaig2/7.jpg" },

  { img: "/hyperline/8.jpg" },
  { img: "/hyperline/9.jpg" },
  { img: "/hyperline/10.jpg" },
  { img: "/hyperline/11.jpg" },
  { img: "/hyperline/12.jpg" },
  { img: "/hyperline/13.jpg" },
  { img: "/hyperline/14.jpg" },
  { img: "/hyperline/15.jpg" },
];

const gallery = [
  { src: "/gallerynewmain/1.jpg", speed: "slower", vid: false },
  { src: "/gallerynewmain/2.mp4", speed: "faster", vid: true },
  { src: "/gallerynewmain/3.jpg", speed: "slower vertical", vid: false },
  { src: "/gallerynewmain/4.jpg", speed: "slower slower-down", vid: false },
  { src: "/gallerynewmain/5.mp4", speed: "lower", vid: true },
  { src: "/gallerynewmain/6.jpg", speed: "slower", vid: false },
  { src: "/gallerynewmain/7.jpg", speed: "faster1", vid: false },
  { src: "/gallerynewmain/8.jpg", speed: "slower slower2", vid: false },
  { src: "/gallerynewmain/9.jpg", speed: "slower", vid: false },
  { src: "/gallerynewmain/10.jpg", speed: "slower", vid: false },
  { src: "/gallerynewmain/11.mp4", speed: "slower last", vid: true },
  { src: "/gallerynewmain/12.jpg", speed: "slower slower-down", vid: false },
  { src: "/gallerynewmain/13.jpg", speed: "faster", vid: false },
  { src: "/gallerynewmain/14.jpg", speed: "slower", vid: false },
  { src: "/gallerynewmain/15.jpg", speed: "", vid: false },
  { src: "/gallerynewmain/16.jpg", speed: "lower", vid: false },
  { src: "/gallerynewmain/17.mp4", speed: "faster1", vid: true },
  { src: "/gallerynewmain/22.jpg", speed: "slower slower2", vid: false },
  { src: "/gallerynewmain/18.jpg", speed: "lower", vid: false },
  { src: "/gallerynewmain/19.mp4", speed: "slower", vid: true },
  { src: "/gallerynewmain/20.jpg", speed: "slower", vid: false },
  { src: "/gallerynewmain/21.jpg", speed: "slower", vid: false },
  { src: "/gallerynewmain/23.jpg", speed: "lower last", vid: false },
];

const HomePage = () => {
  return (
    <div className="moodboardpage-container">
      <div className="moodboardpage-content-container">
        <div className="moodboardpage-header-container">
          {/* <span className="moodboardpage-header">JTPAMINTUAN</span> */}
          <Link className="header" href="/">
            <Image
              className="logo"
              src="/logo/logo.svg"
              alt="Ovoir logo"
              width={110}
              height={110}
            />
          </Link>
        </div>
      </div>

      <div className="external">
        <div className="horizontal-scroll-wrapper">
          {gallery.map((val, index) => (
            <div className={`img-wrapper ${val.speed}`} key={index}>
              <a
                className="img-container"
                href="/"
                target="_blank"
                rel="noopener"
              >
                {!val.vid ? (
                  <img className="test-img" src={val.src} alt="" />
                ) : (
                  <video
                    className="video-test"
                    loop
                    muted
                    autoPlay
                    playsInline
                    controls={undefined}
                  >
                    <source src={val.src} type="video/mp4" />
                  </video>
                )}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="rights-text">
        <div className="contact">
          <Link href={"/contact"}>contact</Link>
        </div>
        <span>© JTPAMINTUAN. ALL RIGHTS RESERVERED</span>
      </div>
    </div>
  );
};

export default HomePage;
