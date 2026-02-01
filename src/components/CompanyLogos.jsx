import { companyLogos } from "../constants";
import Heading from "./Heading";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

const CompanyLogos = ({ className }) => {
  return (
    <div id="sponsors" className={`scroll-mt-28 ${className}`}>
      <div className="flex items-center justify-center">
        <Heading className="md:max-w-md lg:max-w-2xl" title="Collaborations" />
      </div>
      <Marquee
        fade={true}
        direction="left"
        className="gap-[5rem]"
        innerClassName="gap-[5rem] [--duration:15s]"
        pauseOnHover={true}
      >
        {companyLogos.map((logo, index) => (
          <img
          src={logo}
          alt={logo}
          key={index}
          className={`h-[100px] w-[130px] object-contain ${
            index === 1 ? 'translate-y-7 scale-[3.0]' : ''
          }`}
        />        
        ))}
    </Marquee>
    </div>
  );
};

export default CompanyLogos;
