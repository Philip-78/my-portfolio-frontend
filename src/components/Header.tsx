import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header>
      <div className="header-content">
        <Image
          src="/images/IMG_7804.png"
          alt="Philip Idiare Oghenerukevwe"
          className="profile-pic"
          width={150}
          height={150}
        />
        <div className="header-text">
          <h1>Philip Idiare Oghenerukevwe</h1>
          <h2>Student of Innopolis University, Innopolis, Russia.</h2>
          <div className="social-icons">
            <a
              id="gh-link"
              href="https://github.com/Philip-78"
              target="_blank"
              rel="noopener noreferrer"
            >
              {isMounted && <FontAwesomeIcon icon={['fab', 'github']} />}
            </a>
            <a
              id="tg-link"
              href="https://t.me/philip_i"
              target="_blank"
              rel="noopener noreferrer"
            >
              {isMounted && (
                <FontAwesomeIcon icon={['fab', 'telegram-plane']} />
              )}
            </a>
            <a id="email" href="mailto:p.idiare@innopolis.university">
              {isMounted && <FontAwesomeIcon icon={['fas', 'envelope']} />}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
