import uniqid from "uniqid";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import { Paper } from "@material-ui/core";
import "./ExperienceContainer.css";

const ExperienceContainer = ({ experience }) => (
  <div className="experience">
    <h3 className="experience__name">{experience.name}</h3>

    <h5 className="experience__role">{experience.role}</h5>

    <p className="experience__description">{experience.description}</p>
    {experience.stack && (
      <ul className="experience__stack">
        {experience.stack.map((item) => (
          <li key={uniqid()} className="experience__stack-item">
            {item}
          </li>
        ))}
      </ul>
    )}

    <h6 className="experience__start">{experience.startDate}</h6>
  </div>
);

export default ExperienceContainer;
