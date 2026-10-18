import './Contacts.scss';
import locationIcon from '../../../assets/contacts/location.svg';
import mailIcon from '../../../assets/contacts/mail.svg';
import telegramIcon from '../../../assets/contacts/telegram.svg';
import githubIcon from '../../../assets/contacts/github.svg';
import linkedinIcon from '../../../assets/contacts/linkedin.svg';

const contacts = [
  {
    label: 'Location',
    value: 'Uppsala, Sweden',
    icon: locationIcon,
  },
  {
    label: 'Email',
    value: 'mrs.redkovaa@gmail.com',
    href: 'mailto:mrs.redkovaa@gmail.com',
    icon: mailIcon,
  },
  {
    label: 'Telegram',
    value: '@redkova',
    href: 'https://t.me/redkova',
    icon: telegramIcon,
  },
  {
    label: 'GitHub',
    value: 'github.com/Redkova',
    href: 'https://github.com/Redkova',
    icon: githubIcon,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/redkova',
    href: 'https://www.linkedin.com/in/redkova/',
    icon: linkedinIcon,
  },
];

function Contacts() {
  return (
    <div className="contacts">
      <section className="contacts__details section">
        <h1 className="contacts__title">Get in touch</h1>
        <ul className="contacts__list">
          {contacts.map((contact) => (
            <li className="contacts__item" key={contact.label}>
              <img
                className="contacts__icon"
                src={contact.icon}
                alt=""
                aria-hidden="true"
              />
              <div className="contacts__item-content">
                <span className="contacts__label">{contact.label}</span>

                {contact.href ? (
                  <a
                    className="contacts__link"
                    href={contact.href}
                    target={
                      contact.href.startsWith('mailto:') ? undefined : '_blank'
                    }
                    rel="noreferrer"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <span className="contacts__value">{contact.value}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="contacts__actions">
          <a
            className="button button--secondary contacts__cv-link"
            href="https://alexandra-redkova-cv.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <span>View CV</span>
          </a>

          <a
            className="button button--secondary contacts__email-button"
            href="mailto:mrs.redkovaa@gmail.com"
          >
            <img
              className="contacts__button-icon"
              src={mailIcon}
              alt=""
              aria-hidden="true"
            />
            <span>Send an email</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contacts;
