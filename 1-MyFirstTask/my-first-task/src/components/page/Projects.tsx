import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects: React.FC = () => {
  const projects1 = [
    {
      name: "Web Crawler",
      code: "webcrawler",
      techs: ["JavaScript"],
      link: "https://github.com/RickC1218/WebCrawler",
    },
    {
      name: "Poli Virtual",
      code: "polivirtual",
      techs: ["Next.js", "TypeScript", "CSS", "HTML"],
      link: "https://github.com/RickC1218/poli-virtual",
    },
    {
      name: "Rick and Morty",
      code: "rickandmorty",
      techs: ["Vue", "JavaScript", "HTML"],
      link: "https://github.com/RickC1218/rick-and-morty-vue",
    },
  ];
  const projects2 = [
    {
      name: "Mother's day video",
      code: "mothersday",
      techs: ["React", "TypeScript", "CSS", "HTML"],
      link: "https://github.com/RickC1218/Mother-s-day-React",
    },
    {
      name: "Top Cine",
      code: "topcine",
      techs: ["PHP", "SCSS", "JavaScript", "CSS", "HTML"],
      link: "https://github.com/RickC1218/ProyectoIG2",
    },
  ];

  return (
    <>
      <h1 className="text-4xl mt-52 lg:mt-36">Projects</h1>
      <div className="w-full flex flex-col px-12">
        <h2 className="text-xl">Personal Projects</h2>
        <ul className="project flex justify-start w-full items-center space-x-4 pt-2 pb-4 px-6 overflow-x-auto">
          {projects1.map((project, index) => (
            <li key={index} className="project-item">
              <Image
                src={`/projects/${project.code}.png`}
                alt={project.name}
                width={426}
                height={240}
                className="rounded-lg"
              />
              <div className="overlay">
                <div className="project-info">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="text-3xl">{project.name}</p>
                    <div className="tech-used">
                      <ul className="flex space-x-3 text-sm">
                        {project.techs.map((tech, index) => (
                          <li key={index}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-center items-center">
                      <FontAwesomeIcon icon={faGithub} className="w-8" />
                    </div>                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full flex flex-col px-12">
        <h2 className="text-xl">Professional Projects</h2>
        <ul className="project flex justify-start w-full items-center space-x-4 pt-2 pb-4 px-6 overflow-x-auto">
        {projects2.map((project, index) => (
            <li key={index} className="project-item">
              <Image
                src={`/projects/${project.code}.png`}
                alt={project.name}
                width={426}
                height={240}
                className="rounded-lg"
              />
              <div className="overlay">
                <div className="project-info">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="text-3xl">{project.name}</p>
                    <div className="tech-used">
                      <ul className="flex space-x-3 text-sm">
                        {project.techs.map((tech, index) => (
                          <li key={index}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-center items-center">
                      <FontAwesomeIcon icon={faGithub} className="w-8" />
                    </div>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Projects;
