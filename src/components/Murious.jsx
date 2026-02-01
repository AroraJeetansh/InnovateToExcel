import { curve, muriousLogo } from "../assets";
import Section from "./Section";

const Murious = () => {
  return (
    <Section id="muriousLink" crosses >
      <div className="container flex flex-col lg:!flex-row items-center  gap-16 md:!flex-wrap md:!justify-around mt-20 lg:!mt-auto">
        <div className="lg:flex items-center flex-1 max-w-sm hidden">
          <div className="max-w-sm mx-auto flex justify-center">
            <img
              src={muriousLogo}
              alt="brainwave"
              width={696}
              height={373}
              style={{
                maxWidth: "40%",
              }}
            />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="h2 mb-8 md:mb-10 text-4xl md:text-6xl">
            <span className="inline-block relative">
              Murious 19.0{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h2>

          <p className="pb-7 leading-7">
            “TAKE THE JOURNEY, SOAR LIKE AN EAGLE, THERE ARE SO MANY ROADS TO
            EXPLORE SO LITTLE". PRESENTING TO YOU AN EXPERIENCE LIKE NEVER
            BEFORE, "MURIOUS: THE THREE DAYS PANORAMA" THE TMP CLUB AT JUIT IS
            GETTING READY FOR A BIG TECHNICAL FESTIVAL THAT'S MORE THAN JUST AN
            EVENT; IT'S A MIX OF EXCITEMENT AND BRAINPOWER. THERE'LL BE LOTS OF
            TECH STUFF TO SEE AND DO, LIKE SHOWS AND DEMOS THAT'LL MAKE YOU
            THINK. AND DON'T WORRY, IT'S NOT ALL SERIOUS – THERE'LL BE FUN STUFF
            TOO, LIKE DESIGNING,HACKATHON, AND GAMING CONTESTS. BASICALLY, IT'S
            GOING TO BE A SUPER FUN CELEBRATION OF TECH AND CREATIVITY!
          </p>

        </div>
      </div>
    </Section>
  );
};

export default Murious;
