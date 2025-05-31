import React, { useRef, useEffect } from "react";
import { Shredder } from "lucide-react";

const Button = ({ children }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    if (text) {
      text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
      const spans = text.querySelectorAll("span");
      for (let i = 0; i < spans.length; i++) {
        spans[i].style.transform = `rotate(${i * 19}deg)`;
      }
    }
  }, []);

  return (
    <div className="glass-button flex justify-center items-center py-[2.375rem] px-[2.375rem] sm:py-[4.375rem] sm:px-[4.375rem] cursor-none">
      <h2 className="text text-black" ref={textRef}>
        {children}
      </h2>
      <div className="icon absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
        <Shredder />
      </div>
    </div>
  );
};

export default Button;
