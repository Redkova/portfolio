import './Portfolio.scss';
import movieScreenshot from '../../../assets/screenshots/Screenshot1.png';
import swaggerScreenshot from '../../../assets/screenshots/Screenshot2.png';
import nonogramsScreenshot from '../../../assets/screenshots/Screenshot3.png';

type Project = {
  title: string;
  year: string;
  description: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  github: string;
  demo: string;
};

const projects: Project[] = [
  {
    title: 'Movie Search Application',
    year: '2026',
    description:
      'A responsive movie discovery application featuring search, filtering, pagination, and detailed movie information. Built with React and TypeScript, with data managed through Redux Toolkit.',
    technologies: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'React Router',
      'Tailwind CSS',
      'Vite',
    ],
    image: movieScreenshot,
    imageAlt: 'Movie Search App',
    github: 'https://github.com/Redkova/react-project/tree/api-queries',
    demo: 'https://find-your-movie-rs.netlify.app',
  },
  {
    title: 'Swagger Editor App',
    year: '2026',
    description:
      'A collaborative final project developed by a team of three as part of the RS School programme.',
    technologies: ['React', 'TypeScript', 'Next.js', 'Vite'],
    image: swaggerScreenshot,
    imageAlt: 'Swagger Editor App interface',
    github: 'https://github.com/AleksPanda/swagger-editor-app/tree/develop',
    demo: 'https://swagger-editor-app-a-team.netlify.app/en',
  },
  {
    title: 'Nonograms',
    year: '2025',
    description:
      'An interactive logic puzzle game built with vanilla JavaScript. The project focuses on game logic, user interaction, and dynamic interface updates.',
    technologies: ['JavaScript', 'HTML5', 'CSS3'],
    image: nonogramsScreenshot,
    imageAlt: 'Nonograms puzzle game interface',
    github: 'https://github.com/Redkova/Nonograms/tree/main/nonograms',
    demo: 'https://rolling-scopes-school.github.io/redkova-JSFE2024Q4/nonograms/index.html',
  },
];

function Portfolio() {
  return (
    <div className="portfolio">
      <section className="portfolio__projects section">
        <h1 className="portfolio__title">Projects</h1>
        <div className="portfolio__list">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card__visual">
                <img
                  className="project-card__image"
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                />
              </div>

              <div className="project-card__content">
                <h2 className="project-card__title">{project.title}</h2>
                <div className="project-card__year">{project.year}</div>
                <p className="project-card__description">
                  {project.description}
                </p>

                {project.technologies.length > 0 && (
                  <div className="project-card__stack">
                    <h3 className="project-card__stack-title">Tech Stack</h3>

                    <ul className="project-card__tags">
                      {project.technologies.map((technology) => (
                        <li className="project-card__tag" key={technology}>
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="project-card__links">
                  <a
                    className="project-card__link"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>

                  <span className="project-card__divider" aria-hidden="true" />

                  <a
                    className="project-card__link"
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
