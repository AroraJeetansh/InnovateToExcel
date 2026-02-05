import React from "react";
import Section from "./Section";
import { socials } from "../constants";
import { JUITLogo } from "../assets";

import "/public/css/footer.css";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <footer className="footer">
        <div className="footer-container">

          <div className="footer-top">
            <img
              src={JUITLogo}
              alt="Institution Logo"
              className="logo logo-left"
              style={{ width: "100px", height: "auto" }}
            />
            <div className="made-by-team">
              <h2 className="text-xl font-bold text-n-1">Built by Jeetansh Arora and Team</h2>
            </div>
          </div>

          {/* Enhanced Footer Content */}
          <div className="footer-content">
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#sponsors">Sponsors</a></li>
                <li><a href="#roadmap">Contact</a></li>
              </ul>
              <p className="mt-4 text-sm text-gray-400">
                Navigate through our site easily with these direct links to important sections.
              </p>
            </div>

            <div className="footer-section">
              <h3>External Links</h3>
              <ul>
                <li><a href="https://juit.ac.in" target="_blank" rel="noopener noreferrer">JUIT</a></li>
              </ul>
              <p className="mt-4 text-sm text-gray-400">
                Explore our academic institution and discover educational opportunities available to students.
              </p>
              <p className="mt-2 text-sm text-gray-400">
                Join us on our journey of innovation and excellence in technology and education.
              </p>
            </div>
            <div className="footer-section footer-connect">
              <h3>Connect With Us</h3>
              <div className="social-grid">
                {socials.slice(0, 2).map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <img
                      src={item.iconUrl}
                      width={30}
                      height={30}
                      alt={item.title}
                    />
                  </a>
                ))}
                {socials.slice(2).map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <img
                      src={item.iconUrl}
                      width={30}
                      height={30}
                      alt={item.title}
                    />
                  </a>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-400">
                Stay updated with our latest events, workshops, and initiatives through our social media channels.
              </p>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="footer-additional mt-6 border-t border-gray-700 pt-6 px-4">
            <div className="additional-grid">
              <div className="additional-item">
                <h4 className="text-sm font-semibold mb-2">About Us</h4>
                <p className="text-xs text-gray-400">
                  Innovate to Excel is a platform dedicated to fostering innovation and technological advancement through collaborative events and educational initiatives.
                </p>
              </div>
              <div className="additional-item">
                <h4 className="text-sm font-semibold mb-2">Our Mission</h4>
                <p className="text-xs text-gray-400">
                  To inspire and equip the next generation of innovators with the tools, knowledge, and network needed to excel in a rapidly evolving technological landscape.
                </p>
              </div>
              <div className="additional-item">
                <h4 className="text-sm font-semibold mb-2">
                  <a
                    href="https://maps.app.goo.gl/4KGk1wGLyWh1vPFaA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-100"
                  >
                    Visit Us
                  </a>
                </h4>
                <p className="text-xs text-gray-400">
                  Jaypee University of Information Technology<br />
                  Waknaghat, Solan<br />
                  Himachal Pradesh - 173234
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="footer-bottom mt-6">
            <p className="caption text-n-4 text-center w-full">
              © {new Date().getFullYear()} Innovate to Excel. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              Designed and developed with dedication by the Innovate to Excel team.
            </p>
          </div>
        </div>
      </footer>

      {/* Add this style tag to override the existing footer.css with responsive styles */}
      <style jsx>{`
        /* Global footer styles that maintain current appearance but improve mobile */
        @media (max-width: 768px) {
          .footer-container {
            text-align: center;
          }
          
          .footer-top {
            justify-content: center;
          }
          
          .footer-content {
            flex-direction: column;
            align-items: center;
          }
          
          .footer-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 2rem;
            max-width: 90%;
          }
          
          .footer-section ul {
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .social-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            place-items: center;
            margin: 0 auto;
            max-width: 200px;
          }
          
          .social-link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 3rem;
            height: 3rem;
            background-color: var(--n-7, #1A1D1F);
            border-radius: 9999px;
            transition: background-color 0.3s;
          }
          
          .social-link:hover {
            background-color: rgb(239, 68, 68);
          }
          
          .additional-grid {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
          }
          
          .additional-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            max-width: 90%;
            margin: 0 auto;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .footer-connect {
            margin-left: auto;
            margin-right: auto;
            max-width: 400px;
          }
        }
        /* Styles for tablet and desktop remain grid-based */
        @media (min-width: 769px) {
          .social-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
          }
          
          .social-link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 3rem;
            height: 3rem;
            background-color: var(--n-7, #1A1D1F);
            border-radius: 9999px;
            transition: background-color 0.3s;
          }
          
          .social-link:hover {
            background-color: rgb(239, 68, 68);
          }
          
          .additional-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }
      `}</style>
    </Section>
  );
};

export default Footer;