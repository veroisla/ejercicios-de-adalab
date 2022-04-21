import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';

function App() {
  const tasks = [
    'Comprar harina, jamón y pan rallado',
    'Hacer croquetas ricas',
    'Ir a la puerta de un gimnasio',
    'Comerme las croquetas mirando a la gente que entra en el gimnasio',
  ];

  const renderList = () => {
    return tasks.map((task, index) => {
      return (
        <li key={index}>
          <p>{task}</p>
        </li>
      );
    });
  };

  return (
    <>
      <h3>Mi lista de tareas</h3>
      <ul>{renderList()}</ul>
    </>
  );
}

export default App;
