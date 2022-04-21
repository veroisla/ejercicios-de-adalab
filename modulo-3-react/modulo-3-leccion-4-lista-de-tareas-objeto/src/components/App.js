import '../styles/App.scss';

function App() {
  const tasks = [
    { taskElement: 'Comprar harina, jamón y pan rallado', completed: true },
    { taskElement: 'Hacer croquetas ricas', completed: true },
    { taskElement: 'Ir a la puerta de un gimnasio', completed: false },
    {
      taskElement:
        'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ];

  const renderList = () => {
    return tasks.map((task, index) => {
      let crossed = '';
      // Creo variable vacía, luego digo si el completed es true, entonces a la variable creada le pones crossed, que es mi clase de scss
      if (task.completed === true) {
        crossed = 'cross';
      }

      return (
        <li key={index} className={crossed}>
          <p>{task.taskElement}</p>
          {/* De task (que representa cada elemento de la lista), píntame su propiedad taskElement */}
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
