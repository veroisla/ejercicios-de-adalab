import { useState } from 'react';
import '../styles/App.scss';

function App() {
  const [tasks, setTasks] = useState([
    {
      taskElement: 'Comprar harina, jamón y pan rallado',
      completed: true,
    },
    { taskElement: 'Hacer croquetas ricas', completed: true },
    { taskElement: 'Ir a la puerta de un gimnasio', completed: false },
    {
      taskElement:
        'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ]);

  //   Crea la función manejadora en la que:
  // Obtener el índice de la tarea sobre la que se haya hecho clic.
  // Invertir la propiedad completed de la tarea sobre la que se haya hecho clic.
  // Guardar en el estado el array modificado.

  //FUNCIÓN HANDLEBTN
  const handleBtn = (ev) => {
    const clickElement = ev.currentTarget.id;
    const foundClick = tasks.find((task) => task.id === clickElement);
    setTasks([...tasks]);
  };

  //FUNCIÓN PINTAR LISTA
  const renderList = () => {
    return tasks.map((task, index) => {
      let crossed = '';

      if (task.completed === true) {
        crossed = 'cross';
      }

      return (
        <li key={task.id} className={crossed} onClick={handleBtn} id={index}>
          <p>{task.taskElement}</p>
        </li>
      );
    });
  };

  return (
    <div>
      <h3>Lista de tareas</h3>
      <ul>{renderList()}</ul>
    </div>
  );
}

export default App;
