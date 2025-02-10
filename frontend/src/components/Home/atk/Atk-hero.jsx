import { useEffect, useState } from "react";
import mountain from "../../../assets/atk-hero/mountain.png";
import lpad from "../../../assets/atk-hero/lpad.png";

const ParallaxEffect = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollY((prev) => {
        const newScrollY =
          event.deltaY > 0 ? Math.min(prev + 30, 250) : Math.max(prev - 30, 0);

        if (newScrollY >= 250) {
          setIsFixed(false);
        }
        return newScrollY;
      });
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <div className="w-screen overflow-hidden">
      {/* Parallax Section */}
      <div
        className={`h-screen flex justify-center w-screen transition-all duration-700 ease-out ${
          isFixed ? "fixed top-0 left-0" : "relative"
        }`}
        style={{
          background: "linear-gradient(to bottom, #1E40AF, #1E3A8A, #172554, #000000)",
        }}
      >
        {/* Launch Pad */}
        <div
          className="absolute top-[20rem] duration-300 ease-out drop-shadow-lg"
          style={{
            transform: `translateY(-${scrollY}px) scale(${1 + scrollY / 1000})`,
          }}
        >
          <img src={lpad} id="lpad" alt="Launch Pad" className="animate-pulse" />
          <h1 className="text-center text-white text-6xl font-bold tracking-widest drop-shadow-md">
            Dare to Disrupt
          </h1>
        </div>

        {/* Mountains */}
        <img
          src={mountain}
          id="mountain"
          alt="Mountains"
          className="absolute bottom-[-5rem] w-screen object-contain duration-300 ease-out opacity-90"
          style={{
            transform: `translateY(${scrollY / 1.5}px)`,
          }}
        />

        {/* Buttons */}
        <div className="absolute text-white bottom-10 right-12 z-[9] flex gap-6">
          <button className="bg-blue-600/70 backdrop-blur-lg border-2 border-white/30 text-white px-6 py-2 rounded-2xl transition-all duration-300 hover:bg-blue-700 hover:scale-105 shadow-md">
            Register
          </button>
          <button className="bg-blue-600/70 backdrop-blur-lg border-2 border-white/30 text-white px-6 py-2 rounded-2xl transition-all duration-300 hover:bg-blue-700 hover:scale-105 shadow-md">
            Passes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParallaxEffect;
