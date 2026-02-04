import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaTrophy, FaMedal, FaImages } from 'react-icons/fa';

// Dynamic event data - easily updateable
const eventsData = [
  {
    id: 1,
    title: "HACKING HILLS",
    shortDescription: "Inter-College Hackathon - The Ultimate Innovation Marathon!",
    fullDescription: "The Ultimate Innovation Marathon! A continuous 24 hour challenge where creativity, collaboration, and endurance converge to transform ideas into impactful solutions. Teams from multiple institutions will brainstorm, design, and develop functional prototypes addressing real-world challenges across diverse domains. From intelligent software systems to hardware-integrated innovations, every project reflects bold thinking and hands-on execution. As the clock ticks, participants refine their concepts, overcome technical hurdles, and present their creations—demonstrating that true innovation thrives under passion, persistence, and teamwork.",
    rules: [
      "Team size: 3-4 members",
      "Inter-college teams allowed",
      "24-hour continuous hackathon",
      "Hardware and software projects welcome",
      "Problem statements will be provided",
      "Judging: Innovation, Technicality, Presentation"
    ],
    prizes: ["1st Place: ₹25,000", "2nd Place: ₹15,000", "3rd Place: ₹10,000"],
    date: "15th-16th March 2024",
    time: "10:00 AM onwards",
    venue: "Main Campus, Block A & B",
    images: [
      "/assets/benefits/Blind_Coding.webp",
      "/assets/benefits/hoodie2.webp"
    ]
  },
  {
    id: 2,
    title: "STOCHASTIC PLAY",
    shortDescription: "Competitive Coding Challenge - Precision, speed, and strategy!",
    fullDescription: "Precision, speed, and strategy take center stage! Stochastic Play is a high-intensity coding contest that challenges participants to solve complex algorithmic and logical problems within a limited timeframe. Each problem demands structured thinking, optimized solutions, and flawless execution under pressure. Participants must demonstrate not only technical proficiency but also efficiency and clarity in approach. The competition cultivates resilience, concentration, and adaptability—essential qualities for thriving in competitive programming and real-world software development environments.",
    rules: [
      "Individual participation only",
      "Multiple rounds with increasing difficulty",
      "Time limit per problem",
      "Judging: Correctness, Efficiency, Code quality",
      "Use of online resources not allowed"
    ],
    prizes: [],
    date: "",
    time: "",
    venue: "",
    images: []
  },
  {
    id: 3,
    title: "CYBER SESSION - CAPTURE THE FLAG",
    shortDescription: "12-hour Cybersecurity Marathon - Test your ethical hacking skills!",
    fullDescription: "Dive into the world of cybersecurity with Cyber Session, an engaging workshop designed to introduce participants to the fundamentals of ethical hacking, digital forensics, and online security. Learn from experts, explore real-world threats, and understand how to defend against them in today's ever-evolving digital landscape. Get ready for an adrenaline-fueled 12 hour cybersecurity marathon! In this CTF challenge, participants will test their ethical hacking, cryptography, and web security skills by uncovering hidden flags and solving complex puzzles. It's a true battle of logic, persistence, and skill.",
    rules: [
      "Team size: 2-4 members",
      "12-hour continuous CTF challenge",
      "Categories: Cryptography, Web security, Forensics",
      "Multiple flags to uncover",
      "Judging: Flags found, Time taken"
    ],
    prizes: [],
    date: "",
    time: "",
    venue: "",
    images: []
  },
  {
    id: 4,
    title: "EMBED EXPO",
    shortDescription: "IoT Showcase - Where Hardware Meets Imagination!",
    fullDescription: "Where Hardware Meets Imagination! The IoT Showcase presents a platform for participants to demonstrate sensor-based and embedded system prototypes that address practical, real-world challenges. From smart automation systems to connected devices enhancing efficiency and sustainability, each project represents applied innovation through creativity and technical synergy between software intelligence and hardware execution, backed by engineering precision. It is a celebration of tangible innovation, where ideas move beyond theory into fully functional solutions.",
    rules: [
      "Team size: 2-4 members",
      "Must be IoT/Embedded system based",
      "Demo your working prototype",
      "Judging: Innovation, Technicality, Presentation",
      "Components provided if needed"
    ],
    prizes: [],
    date: "",
    time: "",
    venue: "",
    images: []
  },
  {
    id: 5,
    title: "LENSCAPES",
    shortDescription: "Photography Competition - Capture Innovation Through Your Lens!",
    fullDescription: "Capture Innovation Through Your Lens! The Photography Competition invites participants to explore themes of creativity, technology, and campus life through powerful visual storytelling. Each frame becomes a narrative, reflecting perspective, emotion, and originality. From abstract interpretations of innovation to dynamic moments of student life, the competition celebrates artistic expression alongside technical excellence. Designed to inspire observation and imagination, it transforms simple moments into compelling visual experiences that resonate beyond the frame.",
    rules: [
      "Theme: Innovation, Technology, Campus Life",
      "Maximum 3 photographs per participant",
      "Original work only",
      "Basic editing allowed",
      "Submit in JPEG format (min 2MB)"
    ],
    prizes: [],
    date: "",
    time: "",
    venue: "",
    images: []
  },
  {
    id: 6,
    title: "BRIDGE BUILDING",
    shortDescription: "Where Structure Meets Strength - Civil Engineering Challenge!",
    fullDescription: "Where Structure Meets Strength! The Bridge Making Competition offers a dynamic platform for participants to design and construct innovative bridge models using limited materials and defined span constraints. Blending creativity with core civil engineering principles, teams explore concepts of stability, load transfer, and structural efficiency through hands-on application. As the structures undergo strength testing, the focus shifts to performance, resilience, and smart design choices. The event celebrates technical precision, teamwork, and practical problem-solving—transforming theoretical knowledge into tangible engineering achievement.",
    rules: [
      "Team size: 3-4 members",
      "Materials provided on-site",
      "Limited span constraints",
      "Load testing at the end",
      "Judging: Design, Strength, Creativity"
    ],
    prizes: [""],
    date: "",
    time: "",
    venue: "",
    images: []
  },
{
  id: 7,
  title: "INAUGURATION & SPEAKER SESSION",
  shortDescription: "Kickstarting Innovate to Excel with vision, ideas, and inspiration.",
  fullDescription: "The Grand Opening of Innovate to Excel! This inspiring inauguration and speaker session marks the beginning of a transformative journey into innovation and excellence. The event sets the tone for the fest with an engaging expert talk designed to ignite curiosity and broaden perspectives on emerging technologies and future-driven thinking. Participants will gain valuable insights into evolving industry trends, breakthrough advancements, and the mindset required to thrive in a rapidly changing world. More than a formal commencement, this session establishes the vision of the fest—encouraging bold ideas, critical inquiry, and a spirit of exploration that resonates throughout every event that follows.",
  rules: [
    "Open to all registered participants",
    "Formal entry pass required",
    "Participants must be seated before the session begins",
    "Interaction/Q&A session at the end (time permitting)",
    "Decorum and discipline must be maintained during the session"
  ],
  prizes: [],
  date: "",
  time: "",
  venue: "",
  images: []
},
{
  id: 8,
  title: "THE FINAL STATEMENT",
  shortDescription: "A high-stakes press conference challenge testing leadership under pressure.",
  fullDescription: "Step into the spotlight and face the pressure! The Final Statement is an immersive startup crisis simulation where teams take on leadership roles and defend their company’s decisions in a high-stakes press conference scenario. Participants must respond to probing questions, justify strategic choices, and manage reputational challenges with clarity and composure. Blending business strategy, communication skills, and teamwork, the event mirrors real-world corporate crises and leadership moments. It pushes participants to think critically, act decisively, and present confidently—transforming theoretical knowledge into practical leadership experience.",
  rules: [
    "Team size: 2–4 members",
    "Each team will be assigned a startup crisis scenario",
    "Preparation time will be provided before the press conference",
    "Teams must designate spokesperson(s)",
    "Judging will be based on clarity, strategy, confidence, and crisis handling"
  ],
  prizes: [],
  date: "",
  time: "",
  venue: "",
  images: []
},
{
  id: 9,
  title: "ENTREPRENEURIAL TALK",
  shortDescription: "Where ambition meets experience — real startup stories and insights.",
  fullDescription: "A powerful exchange of ideas where ambition meets experience! The Entrepreneurial Talk brings forward real-world stories of innovation, resilience, and leadership from the world of startups and enterprise. Participants will explore the journey from concept to company, gaining an understanding of the risks, failures, and challenges that shape successful ventures. From identifying opportunities and building strong teams to overcoming setbacks and scaling ideas, the session offers practical insights into entrepreneurial thinking. Designed to inspire confidence and initiative, it empowers students to envision themselves not just as job seekers, but as future creators, innovators, and leaders.",
  rules: [
    "Open to all registered participants",
    "Entry allowed only before the session begins",
    "Participants are encouraged to actively engage in Q&A",
    "Professional decorum to be maintained during the session",
    "Certificates of participation will be provided"
  ],
  prizes: [],
  date: "",
  time: "",
  venue: "",
  images: []
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

            {/* Event Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-n-7/50 rounded-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-color-1/20 flex items-center justify-center">
                  <FaCalendarAlt className="text-color-1 text-lg" />
                </div>
                <div>
                  <p className="text-color-1 text-xs font-semibold uppercase tracking-wider">Date</p>
                  <p className="text-n-3">{event.date}</p>
                </div>
              </div>
              <div className="bg-n-7/50 rounded-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-color-1/20 flex items-center justify-center">
                  <FaClock className="text-color-1 text-lg" />
                </div>
                <div>
                  <p className="text-color-1 text-xs font-semibold uppercase tracking-wider">Time</p>
                  <p className="text-n-3">{event.time}</p>
                </div>
              </div>
              <div className="bg-n-7/50 rounded-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-color-1/20 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-color-1 text-lg" />
                </div>
                <div>
                  <p className="text-color-1 text-xs font-semibold uppercase tracking-wider">Venue</p>
                  <p className="text-n-3">{event.venue}</p>
                </div>
              </div>
            </div>

            {/* Rules */}
            <div>
              <h4 className="text-lg font-semibold text-color-1 mb-3">Rules & Guidelines</h4>
              <ul className="space-y-2">
                {event.rules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-2 text-n-3">
                    <span className="text-color-1 mt-1">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prizes */}
            <div>
              <h4 className="text-lg font-semibold text-color-1 mb-3 flex items-center gap-2">
                <FaTrophy className="text-yellow-400" />
                Prizes
              </h4>
              <div className="flex flex-wrap gap-3">
                {event.prizes.map((prize, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 ${
                      index === 0
                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        : index === 1
                        ? 'bg-gray-400/20 text-gray-300 border border-gray-400/30'
                        : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}
                  >
                    <FaMedal className="text-lg" />
                    {prize}
                  </span>
                ))}
              </div>
            </div>

            {/* Image Gallery */}
            <div>
              <h4 className="text-lg font-semibold text-color-1 mb-3 flex items-center gap-2">
                <FaImages className="text-color-1" />
                Past Event Gallery
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {event.images.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-lg overflow-hidden bg-n-7/50"
                  >
                    <img
                      src={image}
                      alt={`${event.title} - Photo ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Participate Button */}
            <div className="pt-4">
              <button
                className="inline-flex items-center gap-2 px-6 py-3 bg-color-1 text-n-8 font-semibold rounded-lg hover:bg-color-1/90 transition-colors cursor-default"
              >
                Participate in this Event
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const EventDetails = () => {
  const navigate = useNavigate();
  const [openEventId, setOpenEventId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const toggleEvent = (id) => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
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
