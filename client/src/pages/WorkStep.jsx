import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WorkStep = () => {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const pathLength = path.getTotalLength();

    // Set up the path to be hidden initially
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    const steps = gsap.utils.toArray(".step");
    // gsap.set(steps, { autoAlpha: 0, y: 20 });

    // Animate stroke drawing for each icon's paths and lines
    steps.forEach((step) => {
      const iconPaths = step.querySelectorAll("path, line, polygon");
      iconPaths.forEach((el) => {
        const length = el.getTotalLength ? el.getTotalLength() : 0;
        if (length) {
          gsap.set(el, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });
        }
      });
    });

    // Animate main path stroke drawing with scroll trigger
    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: path,
        start: "top 70%",
        end: "bottom bottom",
        scrub: true,
      },
    });

    const texts = document.querySelectorAll(".text");

    const scrollTriggerPoint = {
      text1: { start: "top 15%", end: "top 15%" },
      text2: { start: "top 11%", end: "top 11%" },
      text3: { start: "top 7%", end: "top 7%" },
      text4: { start: "top 3%", end: "top 3%" },
    };

    texts.forEach((text) => {
      const settings = scrollTriggerPoint[text.classList[1]] || {
        start: "top 80%",
        end: "bottom bottom",
      };

      const tl = gsap.timeline({});
      tl.fromTo(text, {
        autoAlpha: 0,
        scale:0,
      },{
        scale: 1,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: "#scroll",
          start: settings.start,
          end: settings.end,
          scrub: true,
          toggleActions: "play none none reverse",
        },
      });
    });

    const scrollTriggerSettings = {
      step1: { start: "top 15%", end: "top 7%" },
      step2: { start: "top 11%", end: "top 5%" },
      step3: { start: "top 7%", end: "top 3%" },
      step4: { start: "top 3%", end: "top 0%" },
    };

    steps.forEach((step) => {
      const iconPaths = step.querySelectorAll("path, line, polygon");
      const settings = scrollTriggerSettings[step.classList[1]] || {
        start: "top 80%",
        end: "bottom 60%",
      };
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#scroll",
          start: settings.start,
          end: settings.end,
          scrub: true,
          toggleActions: "play none none reverse",
        },
      });

      tl.to(step, { autoAlpha: 1, y: 0, ease: "power1.out" });
      iconPaths.forEach((el) => {
        const length = el.getTotalLength ? el.getTotalLength() : 0;
        if (length) {
          tl.to(el, { strokeDashoffset: 0, ease: "power1.out" }, 0);
        }
      });
    });

    gsap.to("#scroll", {
      y: "0%",
      ease: "none",
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinSpacing: false,
        markers: false,
      },
    });
  }, []);

  return (
    <div
      id="scroll"
      className="bg-[#faede2] min-h-screen flex flex-col justify-items-center overflow-hidden"
    >
      <h1 className="text-7xl mt-30 sm:mt-15 sm:text-[16rem] text-center relative font-cormorant">
        How It Works
      </h1>
      <div className="svg absolute top-5 left-0 h-full" style={{ zIndex: 1 }}>
        <svg
          id="ehaNWKYsE6t1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 1080"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          className="w-full h-full  object-cover"
        >
          <path
            ref={pathRef}
            d="M716.491956,370.542184c64.293128-5.8013,147.929018-15.870437,220.202305,11.902826c69.714184,45.963134-135.452566,22.937647,0-27.773263c135.06069-30.255268,197.796401-13.471606,269.797419,0c74.746419,18.713643,125.373231,77.235876,134.89871,105.141641c21.913344,69.129518,12.679194,137.999789,5.951414,182.510019-7.434112,37.268643,3.183475,106.003238,11.902827,146.801537c29.730993,76.217339,13.688374,204.944918-5.951414,275.748833"
            transform="translate(.000001 0.000001)"
            fill="none"
            stroke="#ff6900"
            strokeWidth="3.84"
          />
        </svg>
        <div className="text text1 flex items-center justify-between absolute top-[42%] left-[65%]">
          <h3 className="mr-5 text-sm">Step 1</h3>
          <div className="rounded-full relative bg-[#ff6900] p-5 justify-center flex items-center">
            <div className="step step1 absolute logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-file-input-icon lucide-file-input"
              >
                <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M2 15h10" />
                <path d="m9 18 3-3-3-3" />
              </svg>
            </div>
          </div>
          <div className="text-sm ml-5">
            <h2 className="text-left font-medium">Upload Resume</h2>
            <p>Drag and drop your resume file</p>
          </div>
        </div>

        <div className="text text2 flex items-center justify-between absolute top-[57%] right-[24.5%] ">
          <div className="text-sm mr-5">
            <h2 className="text-right font-medium">Paste Job Link</h2>
            <p>Provide any site job URL</p>
          </div>
          <div className="rounded-full relative bg-[#ff6900] p-5 flex items-center justify-center">
            <div className="step step2 logo absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-link-2"
              >
                <path d="M15 7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3" />
                <line x1="10" y1="13" x2="20" y2="3" />
              </svg>
            </div>
          </div>
          <h3 className="ml-5 text-sm">Step 2</h3>
        </div>

        <div className="text text3 absolute top-[72%] left-[66%] flex items-center justify-between">
          <h3 className="mr-5 text-sm">Step 3</h3>
          <div className="relative rounded-full bg-[#ff6900] p-5 flex items-center justify-center">
            <div className="step step3 logo absolute ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-robot"
              >
                <path d="M12 2a10 10 0 0 0-7 17.9" />
                <path d="M17 17h5v5h-5z" />
                <path d="M9 17h5v5H9z" />
                <path d="M12 12v5" />
                <path d="M12 2v5" />
              </svg>
            </div>
          </div>
          <div className="text-sm ml-5">
            <h2 className="text-left font-medium">Let AI Tailor</h2>
            <p>Saviour rewords and optimizes your resume</p>
          </div>
        </div>

        <div className="text text4 flex items-center justify-between absolute top-[87%] right-[23.5%] ">
          <div className="text-sm mr-5">
            <h2 className="text-right font-medium">Auto Apply</h2>
            <p>Submit and track it in your dashboard</p>
          </div>
          <div className="relative rounded-full bg-[#ff6900] p-5 flex items-center justify-center">
            <div className="step step4 logo absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-send"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </div>
          </div>
          <h3 className="ml-5 text-sm">Step 4</h3>
        </div>
      </div>
    </div>
  );
};

export default WorkStep;
