import './Portfolio.scss';
import movieScreenshot from '../../../assets/screenshots/movieAppScreenshot.png';
import swaggerScreenshot from '../../../assets/screenshots/swaggerScreenshot.png';
import formValidationScreenshot from '../../../assets/screenshots/formValidationScreenshot.png';
import nonogramsScreenshot from '../../../assets/screenshots/nonogramsScreenshot.png';
import { useTranslation } from 'react-i18next';

type Project = {
  key: string;
  year: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  github: string;
  demo: string;
};

const projects: Project[] = [
  {
    key: 'movie',

    year: '2026',
    technologies: ['React', 'TypeScript', 'Next.js', 'next-intl'],
    image: movieScreenshot,
    imageAlt: 'Movie Search App',
    github: 'https://github.com/Redkova/react-project/tree/nextjs-ssr',
    demo: 'https://find-movie-rs.netlify.app/en',
  },
  {
    key: 'swagger',
    year: '2026',
    technologies: ['React', 'TypeScript', 'Next.js', 'Vitest', 'Tailwind CSS'],
    image: swaggerScreenshot,
    imageAlt: 'Swagger Editor App interface',
    github: 'https://github.com/AleksPanda/swagger-editor-app/tree/develop',
    demo: 'https://swagger-editor-app-a-team.netlify.app/en',
  },
  {
    key: 'formValidation',
    year: '2026',
    technologies: ['React', 'TypeScript', 'React Hook Form', 'Redux Toolkit'],
    image: formValidationScreenshot,
    imageAlt: 'Form Validation App interface',
    github: 'https://github.com/Redkova/react-project/tree/forms',
    demo: 'https://form-validation-rs.netlify.app',
  },
  {
    key: 'nonograms',
    year: '2025',
    technologies: ['JavaScript', 'HTML5', 'CSS'],
    image: nonogramsScreenshot,
    imageAlt: 'Nonograms puzzle game interface',
    github: 'https://github.com/Redkova/Nonograms/tree/main/nonograms',
    demo: 'https://rolling-scopes-school.github.io/redkova-JSFE2024Q4/nonograms/index.html',
  },
];

function Portfolio() {
  const { t } = useTranslation();
  return (
    <div className="portfolio">
      <section className="portfolio__projects section">
        <h1 className="portfolio__title">{t('portfolio.title')}</h1>
        <div className="portfolio__list">
          {projects.map((project) => (
            <article className="project-card" key={project.key}>
              <div className="project-card__visual">
                <img
                  className="project-card__image"
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                />
              </div>

              <div className="project-card__content">
                <h2 className="project-card__title">
                  {t(`portfolio.projects.${project.key}.title`)}
                </h2>
                <div className="project-card__year">{project.year}</div>
                <p className="project-card__description">
                  {t(`portfolio.projects.${project.key}.description`)}
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
