import '../styles/App.scss';
import logo from '../images/logo.png';
function App() {
  return (
    <body>
      <header className="header">
        <a
          href="https://adalab.es/"
          _alt="Logo Adalab"
          title="Ir a página Adalab"
        >
          <img className="icon" src={logo} alt="icono_adalab" title="Adalab" />
        </a>
        <nav>
          <ul className="list">
            <li>
              <a className="link" href="https://www.linkedin.com/feed/">
                blog
              </a>
            </li>

            <li>
              <a className="link" href="mailto:veroislagleaniz@gmail.com">
                contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/* prueba de comentario */}
      <main className="main">
        <h1 className="h1">creando diversidad digital</h1>
      </main>
    </body>
  );
}

export default App;
