
import TeamCard from '../components/TeamCard';
import '/css/Team.css';
import { mentors, teamleads, contributors } from '../constants/team.json';
import Section from './Section';
import Heading from "./Heading";
// import Animesh from "../images/Animesh.webp";
// import Mayank from "../images/Mayank.jpg";


const Team = () => {
    return (
        <Section>
            <Heading
          tag="Lorem-ipsum"
          title="Team"
        />
        <div className="team-container">
            <div className="team-section">
                <h1>Mentors</h1>
                <div className="team-grid">
                    {mentors.map((member) => (
                        <TeamCard key={member.id} {...member} />
                    ))}
                </div>
            </div>

            <br />

            <div className="team-section">
                <h1>Team Leads</h1>
                <div className="team-grid">
                    {teamleads.map((member) => (
                        <TeamCard key={member.id} {...member} />
                    ))}
                </div>
            </div>

            <div className="team-section">
                <h1>Contributors</h1>
                <div className="team-grid">
                    {contributors.map((member) => (
                        <TeamCard key={member.id} {...member} />
                    ))}
                </div>
            </div>
        </div>
        </Section>
    );
};

export default Team;
