import { curve, heroBackground, murious } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";

import Countdown from "./Countdown/Countdown";
import MobileCountdown from "./Countdown/MobileCountdown";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative pt-0" ref={parallaxRef}>
    <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
      <h1 className="h1 mb-6">
           {` `} 
            {` `}
            <span className="inline-block relative text-7xl">
            Innovate to Excel{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
          Innovate, Integrate, Engineer 🌌
          </p>
          <div className="hidden 2xl:block mt-0 mb-2">
  <Countdown />
</div>
<div className="2xl:hidden mt-1 mb-4">
  <MobileCountdown />
</div>
          <p className="mb-5 text-3xl font-semibold text-primary">
            Register now!
          </p>
          <Button
            href="https://forms.gle/tgg19QPDiFC3Gzhp8"
            className="text-xl"
            white
          >
            JHES students
          </Button>
          <Button
            href="https://forms.gle/be7qftaCRHQXa2Zq6"
            className="text-xl ml-4 mt-4 sm:mt-0"
            white
          >
            Non-JHES students
          </Button>
          <Button
            href="https://forms.gle/sihyD7jVm1kCexzu8"
            className="text-xl ml-4 mt-4 sm:mt-0"
            white
          >
            JUIT Students
          </Button>
          <p className="mt-5 text-center text-base lg:text-lg">
            For more info, click{" "}
            <a
              href="https://docs.google.com/document/d/1JY1zH-SRTPfI2g5ffnemFM3U_uUxlyxRRU5YlxjTuYg/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              here
            </a>
          </p>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <a href="">
                <img
              src={murious}
              className="w-full h-full object-contain max-w-full max-h-full"
              width={800}
              height={490}
              alt="AI"
            />


                </a>

                {/* <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" /> */}

                {/* <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax> */}
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] scale-[2.5] md:scale-100 -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>

        </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
