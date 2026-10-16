import './Portfolio.scss';
import movieScreenshot from '../../../assets/screenshots/movieAppScreenshot.png';
import swaggerScreenshot from '../../../assets/screenshots/swaggerScreenshot.png';
import formValidationScreenshot from '../../../assets/screenshots/formValidationScreenshot.png';
import nonogramsScreenshot from '../../../assets/screenshots/nonogramsScreenshot.png';

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
      'A movie discovery application built with Next.js and TypeScript, featuring search, filtering, pagination, and detailed movie information. Implements server-side data fetching, React Server Components, and internationalization with next-intl.',
    technologies: ['React', 'TypeScript', 'Next.js', 'next-intl'],
    image: movieScreenshot,
    imageAlt: 'Movie Search App',
    github: 'https://github.com/Redkova/react-project/tree/nextjs-ssr',
    demo: 'https://find-movie-rs.netlify.app/en',
  },
  {
    title: 'Swagger Editor Application',
    year: '2026',
    description:
      'A Swagger/OpenAPI editor built with Next.js and TypeScript. The application allows users to edit and validate OpenAPI specifications in JSON and YAML formats, explore API endpoints, execute requests, and review request history and server-side analytics. Developed by a team of three as the final project for the RS School programme.',
    technologies: ['React', 'TypeScript', 'Next.js', 'Vitest', 'Tailwind CSS'],
    image: swaggerScreenshot,
    imageAlt: 'Swagger Editor App interface',
    github: 'https://github.com/AleksPanda/swagger-editor-app/tree/develop',
    demo: 'https://swagger-editor-app-a-team.netlify.app/en',
  },
  {
    title: 'Form Validation Application',
    year: '2026',
    description:
      'A React application demonstrating two approaches to form handling: uncontrolled forms and React Hook Form. Features schema-based validation with Zod and Redux Toolkit for state management.',
    technologies: ['React', 'TypeScript', 'React Hook Form', 'Redux Toolkit'],
    image: formValidationScreenshot,
    imageAlt: 'Form Validation App interface',
    github: 'https://github.com/Redkova/react-project/tree/forms',
    demo: 'https://form-validation-rs.netlify.app',
  },
  {
    title: 'Nonograms',
    year: '2025',
    description:
      'An interactive logic puzzle game built with vanilla JavaScript, HTML, and CSS. Features multiple difficulty levels, sound effects, a timer, save and resume functionality, and a high score table.',
    technologies: ['JavaScript', 'HTML5', 'CSS'],
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
