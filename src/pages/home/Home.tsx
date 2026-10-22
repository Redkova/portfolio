import './Home.scss';
import { Link } from 'react-router';
import profilePhoto from '../../../assets/photo.jpg';
import runningIcon from '../../../assets/running.svg';
import danceIcon from '../../../assets/dance.svg';
import travelIcon from '../../../assets/travel.svg';
import gameIcon from '../../../assets/games.svg';
import { useTranslation } from 'react-i18next';

const skills = [
  {
    titleKey: 'coreTitle',
    description: 'The foundations I use to build web interfaces.',
    items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS', 'SCSS'],
  },
  {
    titleKey: 'frameworksTitle',
    description: 'Tools for building modern, component-based web applications.',
    items: ['React', 'Tailwind CSS', 'Redux Toolkit', 'Next.js'],
  },
  {
    titleKey: 'toolsTitle',
    description:
      'Tools for maintaining an efficient and consistent development process.',
    items: [
      'Git',
      'GitHub',
      'Vite',
      'Webpack',
      'ESLint',
      'Prettier',
      'Figma',
      'Jira',
      'Perfect Pixel',
    ],
  },
  {
    titleKey: 'apiTitle',
    description:
      'Technologies for connecting applications and enabling real-time communication.',
    items: ['Rest API', 'WebSockets'],
  },
];

const interests = [
  {
    icon: runningIcon,
    key: 'running',
  },
  {
    icon: danceIcon,
    key: 'dance',
  },
  {
    icon: travelIcon,
    key: 'roadTrips',
  },
  {
    icon: gameIcon,
    key: 'boardGames',
  },
];

function Home() {
  const { t } = useTranslation();
  return (
    <div className="home">
      <section className="about section">
        <div className="about__content">
          <p className="about__greeting">{t('home.greeting')}</p>
          <h1 className="about__title">{t('home.jobTitle')}</h1>
          <p className="about__description">{t('home.description')}</p>
          <div className="about__actions">
            <Link className="button button--primary" to="/portfolio">
              {t('home.viewProjects')}
            </Link>
            <Link className="button button--secondary" to="/contacts">
              {t('home.contactMe')}
            </Link>
            <a
              className="button button--secondary"
              href="https://alexandra-redkova-cv.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              {t('home.viewCv')}
            </a>
          </div>
        </div>
        <div className="about__visual">
          <div className="about__image-frame">
            <img className="about__image" src={profilePhoto} alt="Photo" />
            {/*Maybe remove it */}
            <div className="about__image-caption">
              <span className="about__status-dot" />
              <span>Run? Run!</span>
            </div>
          </div>
        </div>
      </section>

      <section className="skills section" id="skills">
        <div className="section-heading">
          <h2 className="section-heading__title">Tech Stack</h2>
        </div>
        <div className="skills__grid">
          {skills.map((group) => (
            <article className="skill-card" key={group.titleKey}>
              <h3 className="skill-card__title">
                {t(`home.skills.${group.titleKey}`)}
              </h3>
              <ul className="skill-card__list">
                {group.items.map((skill) => (
                  <li className="skill-card__item" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="interests section" id="interest">
        <div className="section-heading">
          <h2 className="section-heading__title">{t('home.aboutMe')}</h2>
          <p className="section-heading__description">
            {t('home.interestsDescription')}
          </p>
        </div>

        <ul className="interests__grid">
          {interests.map((interest) => (
            <li className="interest-card" key={interest.key}>
              <img
                className="interest-card__icon"
                src={interest.icon}
                alt="hobby"
                aria-hidden="true"
              />

              <h3 className="interest-card__title">
                {t(`home.interests.${interest.key}.title`)}
              </h3>

              <p className="interest-card__description">
                {t(`home.interests.${interest.key}.description`)}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="contact section">
        <div className="contact__content">
          <h2 className="contact__title">{t('home.collaborate')}</h2>
          <Link className="button button--primary" to="/contacts">
            {t('home.contactMe')}
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
