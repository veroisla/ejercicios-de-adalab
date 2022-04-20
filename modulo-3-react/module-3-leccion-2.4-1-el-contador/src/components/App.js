import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);

  //Función que suma 1

  const handleNumber = () => {
    setNumber(number + 1); //setNumber renderiza todo el rato, le estoy diciendo pinta el valor de number y sumale 1.
  };

  //Función que resetea

  const resetButton = () => {
    setNumber(0);
  };

  return (
    <>
      <p> Contador: {number} </p>
      <button type="button" onClick={handleNumber}>
        Sumar 1
      </button>
      <button type="button" onClick={resetButton}>
        Resetear
      </button>
    </>
  );
}

export default App;
