import '../styles/App.scss';
import { useState } from 'react';

function App() {
  //ESTADOS
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('');
  const [payment, setPayment] = useState('');
  const [terms, setTerms] = useState(false);

  //FUNCIONES

  //Envío por defecto del formulario
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  //Controlar name
  const handleName = (ev) => {
    setName(ev.target.value);
  };

  //Controlar email

  const handleEmail = (ev) => {
    setEmail(ev.target.value);
  };

  //Controlar region

  const handleRegion = (ev) => {
    setRegion(ev.target.value);
  };

  //Controlar tipo de pago
  const handlePayment = (ev) => {
    setPayment(ev.target.value);
  };

  //Controlar términos legales, nos interesa si el boton está pulsado o no, por lo que controlamos el checked

  const handleLegalTerms = (ev) => {
    setTerms(ev.target.checked);
  };

  //Botón reset,

  const handleReset = () => {
    setEmail('');
    setName('');
    setRegion('colmenarejo');
    setPayment('');
    setTerms('false');
  };

  //VALIDACIÓN FORMULARIO, para ello decimos que las opciones tienen que ser diferente a vacío

  const correctForm = () => {
    if (
      name !== '' &&
      email !== '' &&
      region !== '' &&
      payment !== '' &&
      terms === true
    ) {
      return true;
    } else {
      return false;
    }
  };

  //BOTÓN ENVIAR
  const handleSendForm = () => {
    console.log('enviar formulario');
  };
  //RENDERIZAR

  const paintPayment = () => {
    //Si la constante payment es igual a creditCard entonces pinta tal...
    if (payment === 'creditCard') {
      return 'Tarjeta de crédito';
    } else if (payment === 'cash') {
      return 'Efectivo';
    } else if (payment === 'reembolso') {
      return 'Contra reembolso';
    }
  };

  return (
    <>
      <h2>Rellena tus datos para finalizar la compra:</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name"> Escribe tu nombre:</label>

        {/* Name */}
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleName}
        ></input>

        {/* Email */}
        <label htmlFor="email">Escribe tu email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleEmail}
        ></input>

        {/* Region */}
        <label htmlFor="region">Indica tu pueblo:</label>
        <select
          name="region"
          id="region"
          value={region}
          onChange={handleRegion}
        >
          {/* En select, el value y la función onChange se pone al select, NO a las opciones */}
          <option>Colmenarejo</option>
          <option>Galapagar</option>
          <option>Torrelodones</option>
          <option>El escorial</option>
        </select>

        {/* Payment */}
        {/* En los radio, el name tiene que ser igual para todos, ya que si no, nos deja seleccionar más de una opción */}
        <label>Indica tu método de pago: </label>
        <label htmlFor="payment">Tarjeta de crédito</label>
        <input
          type="radio"
          name="payment"
          id="creditCard"
          value="creditCard"
          checked={payment === 'creditCard'}
          onChange={handlePayment}
        ></input>
        <label htmlFor="payment">Dinero en efectivo</label>
        <input
          type="radio"
          id="cash"
          name="payment"
          value="cash"
          checked={payment === 'cash'}
          onChange={handlePayment}
        ></input>
        <label htmlFor="payment">Contra reembolso</label>
        <input
          type="radio"
          name="payment"
          id="reembolso"
          value="reembolso"
          checked={payment === 'reembolso'}
          onChange={handlePayment}
        ></input>

        {/* Legal terms */}
        <label htmlFor="legalTerms">Aceptar términos legales</label>
        <input
          type="checkbox"
          name="legalterms"
          id="legalTerms"
          checked={terms}
          onChange={handleLegalTerms}
        ></input>

        {/* Datos personales */}
        <h2>Tus datos son:</h2>
        <ul>
          <li>Nombre: {name}</li>
          <li>Email: {email}</li>
          <li>Pueblo: {region}</li>
          <li>Método de pago:{paintPayment()} </li>
          <li>
            Has aceptado nuestros términos legales: {''}
            {terms === true ? 'Si' : 'No'}
          </li>
        </ul>
        <button
          type="button"
          disabled={correctForm() === false}
          onClick={handleSendForm}
        >
          Enviar formulario
        </button>
        <button type="button" onClick={handleReset}>
          Limpiar el formulario
        </button>
      </form>
    </>
  );
}

export default App;
