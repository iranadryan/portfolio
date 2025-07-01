import { Title } from "../Title";
import { ProjectCard } from "./components/ProjectCard";
import gsafraCover from "../../assets/projects-covers/gsafra.png";
import rydCover from "../../assets/projects-covers/ryd.png";
import truckzCover from "../../assets/projects-covers/truckz.png";
import shawCover from "../../assets/projects-covers/shaw.png";
import visCover from "../../assets/projects-covers/vis.png";

const PROJECTS = [
  {
    image: gsafraCover,
    name: "GSafra - Mobile",
    description:
      "Offline-first app integrated with the desktop version of the GSafra system.",
  },
  {
    image: rydCover,
    name: "RYD Agro - Web",
    description:
      "Grain marketplace for soy and corn. Web version based on the mobile app.",
  },
  {
    image: truckzCover,
    name: "Truckz - Mobile",
    description:
      "For truck drivers and carriers to manage routes and advertise or find freight",
  },
  {
    image: shawCover,
    name: "S&P CRP - Web",
    description:
      "Internal platform for recruiting, legal, finance, and HR workflows.",
  },
  {
    image: visCover,
    name: "VIS - Mobile",
    description:
      "Mentorship app connecting young female athletes with pro mentors.",
  },
];

export function Projects() {
  return (
    <div className="mt-16" id="projects">
      <Title>My Projects</Title>
      <p className="mt-10">Here are some of the projects I've worked on.</p>

      <div className="grid grid-cols-3 gap-6 mt-4">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
}
