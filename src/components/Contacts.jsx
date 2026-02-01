import Heading from "./Heading";
import Section from "./Section";
import { curve, contacts } from "../assets";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-8 mt-6">
      <div className="relative w-fit mx-auto">
        <Heading title="Contact Us" className="text-3xl" />
        <img
          src={curve}
          className="absolute top-full left-0 w-full xl:-mt-2"
          width={624}
          height={28}
          alt="Curve"
        />
      </div>
      
      <style jsx>{`
        @media (min-width: 768px) {
          .contact-container {
            flex-direction: row !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
          }
        }
      `}</style>
      
      <div
        className="contact-container flex flex-col items-center gap-6 p-4"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          padding: "1rem"
        }}
      >
        {contacts.map((contact) => {
          return (
            <div
              className="flex flex-col gap-1 p-6 py-8 bg-n-11 min-w-[240px] rounded-lg shadow-md"
              key={contact.id}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
                padding: "1.5rem 1.5rem 2rem",
                minWidth: "240px",
                borderRadius: "0.5rem",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
              }}
            >
              <Heading
                className="userName text-base text-left w-full mb-2"
                title={contact.name}
              />
              <div>  
                <p className="mobileNumber text-sm text-gray-200">
                  {contact.phone}
                </p>
                <p className="email text-sm text-gray-200">
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </Section>
);

export default Roadmap;