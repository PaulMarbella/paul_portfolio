import React, { useEffect } from "react";
import "../styles/animation.css";

const AnimationBg = () => {
  useEffect(() => {
  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 40;
    const y = (e.clientY / window.innerHeight - 0.5) * 40;

    document.querySelectorAll(".blob-wrapper").forEach((wrapper, i) => {
      const factor = (i + 1) * 1.2;
      wrapper.style.setProperty("--x", `${x * factor}px`);
      wrapper.style.setProperty("--y", `${y * factor}px`);
    });
  };

  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);


  return (
    <div className="background-blobs">
      <div className="blob-wrapper">
        <div className="blob blob1"></div>
      </div>
      <div className="blob-wrapper">
        <div className="blob blob2"></div>
      </div>
      <div className="blob-wrapper">
        <div className="blob blob3"></div>
      </div>
    </div>
  );
};

export default AnimationBg;
