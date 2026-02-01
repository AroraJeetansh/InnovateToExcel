import { curve, jycLogo, check } from "../assets";
import { JUITLogo } from "../assets";
// import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
// import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container flex flex-col md:!flex-row items-center gap-16 md:!flex-wrap md:!justify-around">
        <div className="max-w-[25rem] flex-1">
          <h2 className="h2 mb-8 md:!mb-10 text-4xl md:!text-6xl">
            <span className="inline-block relative">
              JUIT{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h2>

          <p className="pb-12 leading-8 text-lg">
          Jaypee University of Information Technology (JUIT) is a well-known technical university located in Himachal Pradesh.
          <br/><br/>
          It offers quality education in engineering and related fields, 
          focusing on both academic and personal growth. 
          <br/><br/>
          The university provides a peaceful learning environment 
          and encourages students to take part in various cultural, technical, and sports activities along with their studies.
          <br/><br/>
          </p>

          <Button href={"https://www.juit.ac.in/"}>Learn More</Button>
        </div>

        <div className=" flex items-center flex-1 max-w-sm">

          <div className="max-w-sm mx-auto flex justify-center">
                  <img src={JUITLogo}  alt="brainwave" width={696} height={373} style={{
                    "maxWidth": "90%",
                  }}/>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
