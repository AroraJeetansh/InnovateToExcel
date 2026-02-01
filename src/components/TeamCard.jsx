import "../../public/css/TeamCard.css";
import "../../public/css/Team.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
// import { Link } from 'react-router-dom';

const TeamCard = ({
  name,
  designation,
  imageUrl,
  linkedinUrl,
  instagramUrl = "",
}) => {
  return (
    <div className="card-container">
      <div className="card-content">
        <div className="card-background"></div>
        <div className="person-image">
          <img
            className="card-image"
            src={imageUrl}
            alt="Person"
            loading="lazy"
            width={308}
            height={317}
          />
        </div>
        <div className="card-details">
          <div className="card-text">
            <h2 className="card-name">{name}</h2>
            {designation}
          </div>
          <div className="card-icons">
            <a href={linkedinUrl} target="_blank" className="linkedin">
              <FaLinkedin className="linkedin" />
            </a>
            {instagramUrl === "" ? (
              ""
            ) : (
              <a href={instagramUrl} target="_blank" className="instagram">
                <FaInstagram className="instagram" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
