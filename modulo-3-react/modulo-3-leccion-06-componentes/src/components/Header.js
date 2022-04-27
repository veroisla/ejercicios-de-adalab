import LogoImage from './Logo';

const Header = () => {
  return (
    <>
      <LogoImage />
      <nav>
        <ul className="list">
          <li>
            <a
              className="link"
              href="https://www.linkedin.com/feed/"
              target="_blank"
            >
              blog
            </a>
          </li>

          <li>
            <a
              className="link"
              href="mailto:veroislagleaniz@gmail.com"
              target="_blank"
            >
              contacto
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
