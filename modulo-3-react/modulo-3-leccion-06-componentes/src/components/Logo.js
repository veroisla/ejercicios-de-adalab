import LogoIcon from '../images/adalablogo.png';

const Logo = () => {
  return (
    <a
      href="https://adalab.es/"
      target="_blank"
      _alt="Logo Adalab"
      title="Ir a página Adalab"
    >
      <img className="icon" src={LogoIcon} alt="icono_adalab" />
    </a>
  );
};

export default Logo;
