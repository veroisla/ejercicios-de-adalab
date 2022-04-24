import { useState } from 'react';
import '../styles/App.scss';

const App = () => {
  const [tortilla, setTortilla] = useState('');

  const handleTortilla = (ev) => {
    let huevosCheck = ev.target.form.elements.huevos.checked;
    let cebollaCheck = ev.target.form.elements.cebolla.checked;
    let patatasCheck = ev.target.form.elements.patatas.checked;
    if (huevosCheck && cebollaCheck && patatasCheck) {
      setTortilla('ole la tortilla!');
    } else {
      setTortilla('fuera de aquí robot!');
    }
  };

  //FUNCIÓN PREVENIR ENVÍO FORMULARIO

  const handleOnsubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <>
      <h3>Selecciona los ingredientes de la tortilla de patatas</h3>
      <form onSubmit={handleOnsubmit} className="form">
        <label htmlFor="macarrones">Macarrones</label>
        <input
          type="checkbox"
          id="macarrones"
          name="tortilla"
          onChange={handleTortilla}
        />

        <label htmlFor="patatas">Patatas</label>
        <input
          type="checkbox"
          id="patatas"
          name="tortilla"
          onChange={handleTortilla}
        />

        <label htmlFor="nueces">Nueces</label>
        <input
          type="checkbox"
          id="nueces"
          name="tortilla"
          onChange={handleTortilla}
        />

        <label htmlFor="huevos">Huevos</label>
        <input
          type="checkbox"
          id="huevos"
          name="tortilla"
          onChange={handleTortilla}
        />

        <label htmlFor="cebolla">Cebolla</label>
        <input
          type="checkbox"
          id="cebolla"
          name="tortilla"
          onChange={handleTortilla}
        />

        <label htmlFor="cerveza">Cerveza</label>
        <input
          type="checkbox"
          id="cerveza"
          name="tortilla"
          onChange={handleTortilla}
        />
        <p>{tortilla}</p>
      </form>
    </>
  );
};

export default App;
