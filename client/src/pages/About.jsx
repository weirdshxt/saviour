import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const About = () => {
  const wrapperRef = useRef(null);

  useGSAP(() => {
    let split = SplitText.create(".split", { type: "words, chars" });
    let split1 = SplitText.create(".split1", { type: "words, chars" });
    let split2 = SplitText.create(".split2", { type: "words, chars" });
    // let split3 = SplitText.create(".split3", { type: "words, chars, lines" });

    gsap.from(split.chars, {
      duration: 1,
      x: 100,
      autoAlpha: 0,
      stagger: 0.05,
      ease: "power2.out",
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top 90%",
        end: "top 40%",
        scrub: 1,
      },
    });

    gsap.from(split1.chars, {
      duration: 1,
      x: 100,
      autoAlpha: 0,
      stagger: 0.05,
      ease: "power2.out",
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top 80%",
        end: "top 25%",
        scrub: 1,
      },
    });

    gsap.from(split2.chars, {
      duration: 1,
      x: 100,
      autoAlpha: 0,
      stagger: 0.05,
      ease: "power2.out",
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top 80%",
        end: "top 25%",
        scrub: 1,
      },
    });

    gsap.from(".split3", {
      duration: 1,
      y: 100,
      opacity: 0,
      autoAlpha: 0,
      stagger: 0.05,
      ease: "power2.out",
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top 80%",
        end: "top 25%",
        scrub: 1,
      },
    });
  });

  return (
    <div
      data-navbar-text-color="light"
      className="w-full flex min-h-screen bg-black text-white overflow-hidden"
    >
      <div className="sidebar w-[20%] sm:block hidden">
        <span className="font-serif text-9xl relative top-[22%] left-[30%] ">
          “
        </span>
      </div>
      <div className="flex flex-col p-8 sm:p-0">
        <div className="flex flex-col mt-[28%] sm:mt-[15%] ">
          <div className="flex ">
            <h3 className="text-[0.8rem] split1">ABOUT US</h3>
          </div>
          <div className="flex font-cormorant flex-col mt-6">
            <h1
              ref={wrapperRef}
              className="text-5xl sm:text-7xl split text-white"
            >
              Auto-tailor Your Resume
            </h1>
            <h1 className="text-5xl sm:text-7xl split2 text-white">
              & Apply For Jobs with one click
            </h1>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-items-start mt-5 sm:mt-10">
          <div className="flex flex-col w-full sm:w-[25%] p-6">
            <h3 className="text-2xl">What We Do?</h3>
            <p className="mt-4 split3">
              Customize your resume to match each job description—so you stand
              out without doing the heavy lifting.
            </p>
          </div>
          <div className="flex flex-col w-full sm:w-[25%] p-6">
            <h3 className="text-2xl">Auto-Apply Feature</h3>
            <p className="mt-4 split3">
              Submit job applications using your tailored resume automatically.
              <br />
              just upload, paste, apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
