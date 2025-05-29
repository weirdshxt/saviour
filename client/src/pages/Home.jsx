import React, { useEffect, useRef, useState } from "react";
import Navbar from "../component/Navbar";
import Canvas from "../component/Canvas";
import logoData from "../data";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../component/Button";
import About from "./About";
import WorkStep from "./WorkStep";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Home = () => {

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const isSmallScreen = window.matchMedia("(max-width: 639px)").matches;

  useGSAP(() => {
    const mesh = document.getElementById("move-mesh");

    mesh?.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;

      gsap.to(mesh, {
        x: `${-x * 0.2}%`,
        top: `${-y * 0.2}%`,
        duration: 0.5,
        ease: "power2.out",
      });
    });

    gsap.to(mesh, {
      y: "-10%",
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: mesh,
        start: "top -10%",
        end: "top -80%",
        scrub: 1,
      },
    });

    gsap.from(mesh, {
      duration: 1,
      opacity: 0,
      scale: 1.3,
      ease: "power2.out",
    });

    gsap.from(".hero-text", {
      duration: 1,
      opacity: 0,
      rotateX: -90,
      stagger: 0.2,
      ease: "power2.out",
    });

    const btn = document.querySelector(".btn");
    const btnMove = document.querySelector(".text-main");

    btnMove?.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;

      gsap.to(btn, {
        left: `${x}`,
        top: `${y}`,
      });
    });
  });

  return (
    <>
      <div data-navbar-text-color="dark" className="bg-[#faede2] min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
        <div id="move-mesh" className="w-full h-full absolute sm:block">
          {logoData.map((logo, index) => (
            <div key={index}>
              <Canvas startIndex={logo} />
            </div>
          ))}
        </div>
        <Navbar />

        <a href="/login">
          <div className="flex text-main flex-col items-center justify-center relative cursor-none">
            <h1 className="text-5xl sm:text-8xl hero-text font-cormorant font-semibold text-center">
              Stand out with
            </h1>
            <h1 className="text-5xl sm:text-8xl hero-text font-cormorant font-semibold text-center">
              Every Application
            </h1>
          </div>
        </a>
        <div className="btn absolute left-[70%] top-[60%]  ">
          <Button children={"Tailor • your • resume "} />
        </div>
      </div>
      <About />
      <WorkStep />
    </>
  );
};

export default Home;
