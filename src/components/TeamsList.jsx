import Section from "./Section";
import { curve } from "../assets";
import TeamCard from "./TeamCard";
import TeamCard2 from "./TeamCard2";
import {
  mentors,
  teamleads,
  contributors,
  tmpFaculty,
  facultyIncharge,
} from "../constants/team.json";
import "../../public/css/TeamCard.css";
import "../../public/css/Team.css";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <h1 id = "guest" className="text-4xl text-center relative w-min mx-auto">
          Guest Speakers
          <img src={curve} alt="" />
        </h1>
        <div className="team-container">

          <div className="team-section team-faculty-section">
            <h1 className="text-xl"></h1>
            <div className="team-grid">
              {tmpFaculty.map((member) => (
                <TeamCard key={member.id} {...member} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default Pricing;
