import './Home.scss';
import runningIcon from '../../../assets/running.svg';
import danceIcon from '../../../assets/dance.svg';
import travelIcon from '../../../assets/travel.svg';
import gameIcon from '../../../assets/games.svg';

const skills = [
  {
    title: 'Core Technologies',
    description: 'The foundations I use to build web interfaces.',
    items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS', 'SCSS'],
  },
  {
    title: 'Frameworks & Libraries',
    description: 'Tools for building modern, component-based web applications.',
    items: ['React', 'Tailwind CSS', 'Redux Toolkit', 'Next.js'],
  },
  {
    title: 'Tools & Workflow',
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
    title: 'API & Integration',
    description:
      'Technologies for connecting applications and enabling real-time communication.',
    items: ['Rest API', 'WebSockets'],
  },
];

const interests = [
  {
    icon: runningIcon,
    title: 'Running',
    description:
      'Chasing new goals, exploring new routes and enjoying the views along the way.',
  },
  {
    icon: danceIcon,
    title: 'Dance',
    description:
      'Commercial jazz, great music and the freedom to express myself through movement.',
  },
  {
    icon: travelIcon,
    title: 'Road Trips',
    description:
      'Scenic routes, spontaneous road trips and nights spent camping under the stars',
  },
  {
    icon: gameIcon,
    title: 'Board Games',
    description:
      'Good company, clever strategies and the satisfaction of a well-played game.',
  },
];

function Home() {
  return (
    <div className="home">
      <section className="about section">
        <div className="about__content">
          <p className="about__greeting">Hello, I'm Alexandra</p>
          <h1 className="about__title">Front-end Developer</h1>
          <p className="about__description">
            I build responsive, user-friendly web applications with JavaScript,
            TypeScript and React. I enjoy turning ideas into clean, functional
            interfaces and continuously improving my development skills.
          </p>
          <div className="about__actions">
            <a className="button button--primary" href="/portfolio">
              View Projects
            </a>
            <a className="button button--secondary" href="/contacts">
              Contact Me
            </a>
          </div>
        </div>
        <div className="about__visual">
          <div className="about__image-frame">
            <img
              className="about__image"
              src="../../../assets/photo.jpg"
              alt="Photo"
            />
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
          <p className="section-heading__description">
            I build modern web interfaces using HTML, CSS, JavaScript, and
            TypeScript, with a focus on React, responsive UI development, and
            API integration. I aim to create user-friendly, maintainable
            interfaces while continuously expanding my technical skills.
          </p>
        </div>
        <div className="skills__grid">
          {skills.map((group, index) => (
            <article className="skill-card" key={group.title}>
              <h3 className="skill-card__title">{group.title}</h3>
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
        {/* <div className="skills__exploring">
          <span className="skills__exploring-label">CURRENTLY EXPLORING</span>

          <div className="skills__exploring-items">
            <span>Next.js</span>
            <span>Server-side data fetching</span>
            <span>Advanced React patterns</span>
          </div>
        </div> */}
      </section>

      <section className="interests section" id="interest">
        <div className="section-heading">
          <p className="section-heading__label">BEYOND CODING</p>
          <h2 className="section-heading__title">A Little About Me</h2>
          <p className="section-heading__description">
            Outside of development, I enjoy staying active, being creative and
            finding new experiences.
          </p>
        </div>

        <ul className="interests__grid">
          {interests.map((interest) => (
            <li className="interest-card" key={interest.title}>
              <img
                className="interest-card__icon"
                src={interest.icon}
                alt=""
                aria-hidden="true"
              />

              <h3 className="interest-card__title">{interest.title}</h3>

              <p className="interest-card__description">
                {interest.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="home-contact section">
        <p className="section-heading__label">LET'S CONNECT</p>

        <h2 className="home-contact__title">Have a project in mind?</h2>

        <p className="home-contact__description">
          I'm always open to new opportunities, collaboration and interesting
          challenges.
        </p>

        <a className="button button--primary" href="/contacts">
          Get in Touch <span aria-hidden="true">↗</span>
        </a>
      </section>
    </div>
  );
}

export default Home;
