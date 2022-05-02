import LogoImage from './Logo';
import Links from './Links';
import '../styles/Header.scss';
import '../styles/core/core.scss';
import '../styles/version/tabletVersion.scss';

const Header = () => {
  return (
    <>
      <LogoImage />
      <nav>
        <ul className="list">
          <Links
            href="https://www.linkedin.com/feed/"
            text="Blog"
            className="link"
          />
          <Links
            href="mailto:veroislagleaniz@gmail.com"
            text="Contacto"
            //Aquí temgo que llamar a la propiedad OpenInNewTab ya que es la que tiene la condición.
            openInNewTab={true}
            className="link"
          />
        </ul>
      </nav>
    </>
  );
};

export default Header;
//Puedo utilizar el componente Links cuantas veces quiera. Volviendo a ponerlo <Links /> cada vez que quier autilziarlo y pasándole las como valor a las propiedades lo que me interese
