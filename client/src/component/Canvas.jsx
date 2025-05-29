import React, { useEffect, useRef, useState } from "react";
import logos from "../assets/logo";
import logoData from "../data";

const Canvas = ({ startIndex }) => {
  const { size, size2, top, left, height } = startIndex;

  const [index, setIndex] = useState({ value: startIndex.startIndex });

  const canvasRef = useRef(null);

  const isSmallScreen = window.matchMedia("(max-width: 639px)").matches;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = logos[index.value];
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute"
      style={{ width: `${ isSmallScreen ? size2 : size}rem`, objectFit:'contain', top:`${top}%`, left:`${left}%` }}
    ></canvas>
  );
};

export default Canvas;
