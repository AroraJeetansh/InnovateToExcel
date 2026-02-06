import { useState } from 'react';
import { Link } from 'react-router-dom';

// Dynamic event data - easily updateable
const eventsData = [
  {
    id: 1,
    title: "HACKING HILLS",
    shortDescription: "Inter-College Hackathon - The Ultimate Innovation Marathon!",
    fullDescription: "The Ultimate Innovation Marathon! A continuous 24 hour challenge where creativity, collaboration, and endurance converge to transform ideas into impactful solutions. Teams from multiple institutions will brainstorm, design, and develop functional prototypes addressing real-world challenges across diverse domains. From intelligent software systems to hardware-integrated innovations, every project reflects bold thinking and hands-on execution. As the clock ticks, participants refine their concepts, overcome technical hurdles, and present their creations—demonstrating that true innovation thrives under passion, persistence, and teamwork."
  },
  {
    id: 2,
    title: "STOCHASTIC PLAY",
    shortDescription: "Competitive Coding Challenge - Precision, speed, and strategy!",
    fullDescription: "Precision, speed, and strategy take center stage! Stochastic Play is a high-intensity coding contest that challenges participants to solve complex algorithmic and logical problems within a limited timeframe. Each problem demands structured thinking, optimized solutions, and flawless execution under pressure. Participants must demonstrate not only technical proficiency but also efficiency and clarity in approach. The competition cultivates resilience, concentration, and adaptability—essential qualities for thriving in competitive programming and real-world software development environments."
  },
  {
    id: 3,
    title: "CYBER SESSION - CAPTURE THE FLAG",
    shortDescription: "12-hour Cybersecurity Marathon - Test your ethical hacking skills!",
    fullDescription: "Dive into the world of cybersecurity with Cyber Session, an engaging workshop designed to introduce participants to the fundamentals of ethical hacking, digital forensics, and online security. Learn from experts, explore real-world threats, and understand how to defend against them in today's ever-evolving digital landscape. Get ready for an adrenaline-fueled 12 hour cybersecurity marathon! In this CTF challenge, participants will test their ethical hacking, cryptography, and web security skills by uncovering hidden flags and solving complex puzzles. It's a true battle of logic, persistence, and skill."
  },
  {
    id: 4,
    title: "EMBED EXPO",
    shortDescription: "IoT Showcase - Where Hardware Meets Imagination!",
    fullDescription: "Where Hardware Meets Imagination! The IoT Showcase presents a platform for participants to demonstrate sensor-based and embedded system prototypes that address practical, real-world challenges. From smart automation systems to connected devices enhancing efficiency and sustainability, each project represents applied innovation through creativity and technical synergy between software intelligence and hardware execution, backed by engineering precision. It is a celebration of tangible innovation, where ideas move beyond theory into fully functional solutions."
  },
  {
    id: 5,
    title: "LENSCAPES",
    shortDescription: "Photography Competition - Capture Innovation Through Your Lens!",
    fullDescription: "Capture Innovation Through Your Lens! The Photography Competition invites participants to explore themes of creativity, technology, and campus life through powerful visual storytelling. Each frame becomes a narrative, reflecting perspective, emotion, and originality. From abstract interpretations of innovation to dynamic moments of student life, the competition celebrates artistic expression alongside technical excellence. Designed to inspire observation and imagination, it transforms simple moments into compelling visual experiences that resonate beyond the frame."
  },
  {
    id: 6,
    title: "BRIDGE BUILDING",
    shortDescription: "Where Structure Meets Strength - Civil Engineering Challenge!",
    fullDescription: "Where Structure Meets Strength! The Bridge Making Competition offers a dynamic platform for participants to design and construct innovative bridge models using limited materials and defined span constraints. Blending creativity with core civil engineering principles, teams explore concepts of stability, load transfer, and structural efficiency through hands-on application. As the structures undergo strength testing, the focus shifts to performance, resilience, and smart design choices. The event celebrates technical precision, teamwork, and practical problem-solving—transforming theoretical knowledge into tangible engineering achievement."
  },
 {
   id: 7,
   title: "INAUGURATION & SPEAKER SESSION",
   shortDescription: "Kickstarting Innovate to Excel with vision, ideas, and inspiration.",
   fullDescription: "The Grand Opening of Innovate to Excel! This inspiring inauguration and speaker session marks the beginning of a transformative journey into innovation and excellence. The event sets the tone for the fest with an engaging expert talk designed to ignite curiosity and broaden perspectives on emerging technologies and future-driven thinking. Participants will gain valuable insights into evolving industry trends, breakthrough advancements, and the mindset required to thrive in a rapidly changing world. More than a formal commencement, this session establishes the vision of the fest—encouraging bold ideas, critical inquiry, and a spirit of exploration that resonates throughout every event that follows."
 },
 {
   id: 8,
   title: "THE FINAL STATEMENT",
   shortDescription: "A high-stakes press conference challenge testing leadership under pressure.",
   fullDescription: "Step into the spotlight and face the pressure! The Final Statement is an immersive startup crisis simulation where teams take on leadership roles and defend their company's decisions in a high-stakes press conference scenario. Participants must respond to probing questions, justify strategic choices, and manage reputational challenges with clarity and composure. Blending business strategy, communication skills, and teamwork, the event mirrors real-world corporate crises and leadership moments. It pushes participants to think critically, act decisively, and present confidently—transforming theoretical knowledge into practical leadership experience."
 },
 {
   id: 9,
   title: "ENTREPRENEURIAL TALK",
   shortDescription: "Where ambition meets experience — real startup stories and insights.",
   fullDescription: "A powerful exchange of ideas where ambition meets experience! The Entrepreneurial Talk brings forward real-world stories of innovation, resilience, and leadership from the world of startups and enterprise. Participants will explore the journey from concept to company, gaining an understanding of the risks, failures, and challenges that shape successful ventures. From identifying opportunities and building strong teams to overcoming setbacks and scaling ideas, the session offers practical insights into entrepreneurial thinking. Designed to inspire confidence and initiative, it empowers students to envision themselves not just as job seekers, but as future creators, innovators, and leaders."
 }
];

const AccordionItem = ({ event, isOpen, onClick }) => {
  return (
    <div className={`border border-n-6 rounded-lg overflow-hidden transition-all duration-300 ${
      isOpen ? 'bg-n-8/80' : 'bg-n-8/50'
    }`}>
      <button
        onClick={onClick}
        className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none hover:bg-n-7/50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <span className="text-color-1 font-code text-xl font-bold">
            {event.id.toString().padStart(2, '0')}
          </span>
          <div>
            <h3 className="text-xl font-semibold text-n-1">{event.title}</h3>
            <p className="text-n-4 text-sm mt-1">{event.shortDescription}</p>
          </div>
        </div>
        <svg
          className={`w-6 h-6 text-n-1 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 animate-fadeIn">
          <div className="pl-10 space-y-6">
            {/* Event Description */}
            <div>
              <h4 className="text-lg font-semibold text-color-1 mb-2">About the Event</h4>
              <p className="text-n-3 leading-relaxed">{event.fullDescription}</p>
            </div>

            {/* Register Buttons */}
            <div className="pt-4">
              <p className="text-n-4 text-sm mb-3">Register based on your institute:</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc86K4Pr1ekkOvNOdyiofYG-poQ1Rk8fl4yT1HKMw7EVxZH_g/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-color-1 text-n-8 font-semibold rounded-lg hover:bg-color-1/90 transition-colors"
                >
                  JUIT Students
                </a>
                <a
                  href="https://forms.gle/nsPWywhi34CyH3347"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-color-1 text-n-8 font-semibold rounded-lg hover:bg-color-1/90 transition-colors"
                >
                  Non - Jaypee Institutes
                </a>
                <a
                  href="https://forms.gle/UDKGVGhx2kihoVyz5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-color-1 text-n-8 font-semibold rounded-lg hover:bg-color-1/90 transition-colors"
                >
                  Other Jaypee Institutes
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const EventDetails = () => {
  const [openEventId, setOpenEventId] = useState(null);

  const toggleEvent = (id) => {
    setOpenEventId(openEventId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-n-8">
      {/* Back to Home */}
      <div className="container mx-auto px-4 pt-6">
        <Link to="/" className="inline-flex items-center text-n-4 hover:text-n-1 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>

      {/* Page Title */}
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-n-1 mb-4">
          Event <span className="text-color-1">Details</span>
        </h1>
      </div>

      {/* Events Accordion Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto space-y-4">
          {eventsData.map((event) => (
            <AccordionItem
              key={event.id}
              event={event}
              isOpen={openEventId === event.id}
              onClick={() => toggleEvent(event.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
