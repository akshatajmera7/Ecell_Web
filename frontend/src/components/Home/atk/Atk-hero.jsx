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

        // When scroll reaches 250, lock first section and allow full scroll
        if (newScrollY >= 250) {
          setIsFixed(false);
        } // Unlock second section
        // } else {
        //   setIsFixed(true); // Keep first section locked
        // }

        return newScrollY;
      });
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <div className="w-screen overflow-hidden">
      {/* Parallax Section - Remains Fixed Until Fully Scrolled */}
      <div
        className={`h-screen flex justify-center w-screen transition-all duration-700 ${
          isFixed ? "fixed top-0 left-0" : "relative"
        }`}
        style={{
          background:
            "linear-gradient(to bottom, #172A3A, #143441, #67918f, #000000)",
        }}
      >
        {/* <div className="absolute top-10 left-8 text-white text-2xl">
          LAUNCHPAD
        </div>

        <div className="absolute top-10 right-8 text-white text-2xl">
          SIGN UP
        </div> */}

        {/* Launch Pad */}
        <div
          className="absolute top-[20rem] duration-150"
          style={{
            transform: `translateY(-${scrollY}px) scale(${1 + scrollY / 1000})`,
          }}
        >
          <img src={lpad} id="lpad" alt="Launch Pad" />
          <h1 className="text-center text-white text-5xl tracking-widest">
            Dare to Disrupt
          </h1>
        </div>

        {/* Mountains */}
        <img
          src={mountain}
          id="mountain"
          alt="Mountains"
          className="absolute bottom-[-7rem] w-screen object-contain duration-150"
          style={{
            transform: `translateY(${scrollY / 1.5}px)`,
          }}
        />

        {/* Buttons */}
        <div className="absolute text-white bottom-10 right-12 z-[9] flex gap-4">
          <button className="bg-white/10 backdrop-blur-lg border-2 border-white/20 text-white px-6 py-2 rounded-2xl transition-all duration-300 hover:bg-white/20 border-white">
            Register
          </button>
          <button className="bg-white/10 backdrop-blur-lg border-2  border-white/20 text-white px-6 py-2 rounded-2xl transition-all duration-300 hover:bg-white/20 border-white">
            Passes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParallaxEffect;
