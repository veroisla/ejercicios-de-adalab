import '../styles/App.scss';
import { useState } from 'react';

function App() {
  //CONST DATA, CON OBJETO DENTRO, QUE GUARDA EL VALOR DE LOS INPUTS
  const [data, setData] = useState({
    title: '',
    synopsis: '',
    language: '',
    age: '',
  });


//FUNCIÓN QUE MANEJE TODOS LOS VALORES DE LOS INPUTS
const handleInput = (ev) => {
 const newValue = ev.target.value;
 const prop = ev.currentTarget.name; //todos los input tienen un name o un id, que especifican cual es el input. Si accedo a la propiedad name se de donde viene el valor. 

 setData ({
   ...data, [prop]: newValue
 });
} //cogemos setData, que está declarado arriba, y accedemos a la propiedad del objeto [prop] (que tiene arriba un current taregt con el name)


  //INPUT TITLE
  const [title, setTitle] = useState(''); 

  const handleInputTitle = (ev) => {
    const newValue = ev.target.value; //Cogemos valor del input, lo guardamos en una variable

   setData({
  ...data, title: newValue //...Data lo dejo igual, y solo cambia (,) lo que te digo ahora title, con este nuevo valor newValue.  
   });

  //TEXTAREA

  const [synopsis, setSynopsis] = useState('');
  const handleSynopsis = (ev) => {
    const textValue = ev.current.target;
    setSynopsis(textValue);
  };

//RADIO 
  const [age, setAge] = useState("7");
  const handleChangeRadio = (ev) => {
    setAge(ev.currentTarget.value);
  }



  return (
    <div className="App page">
      <header className="header">
        <h1>Añadir películas</h1>
      </header>
      <main>
        <form action="" className="form">
          <div className="col2 mb-1">
            <label className="form__label" htmlFor="title">
              Título:
            </label>

            {/* INPUT TITLE */}

            <input
              type="text"
              placeholder="Ej: Die hard"
              className="form__input-text"
              name="title"
              id="title"
              value={data.title} //El value tiene como valor la variable de estado, declarada arriba
              onChange={handleInputTitle} //Declaramos evento onChange con función manejadora.
            />
          </div>

          {/* //TEXTAREA */}

          <div className="col2 mb-1">
            <label htmlFor="synopsis">Sinopsis:</label>
            <textarea
              placeholder="Érase una vez..."
              name="synopsis"
              id="synopsis"
              value={data.synopsis}
              onChange={handleSynopsis}
            ></textarea>
          </div>

          <div className="col2 mb-1">
            <label htmlFor="language">Idioma:</label>
            <select name="language" id="language">
              <option disabled value="">
                Escoge una opción
              </option>
              <option value="es">Español</option>
              <option value="cat">Catalán</option>
              <option value="gal">Gallego</option>
              <option value="eus">Euskera</option>
            </select>
          </div>
          <div className="col2">
            <p>Clasificación por edad</p>
            <div>
              <label htmlFor="age-all">
                <input type="radio" 
                name="age" 
                id="age-all" 
                value="all"
                onChange={handleInput}
                checked={data.age === "all"}
                /** if(age === "all") return true else return false *//>
                Todas las edades
              </label>
              <label htmlFor="age-7">
                <input type="radio" 
                name="age" 
                id="age-7"  
                value="7"
                onChange={handleInput}
                checked={data.age === "7"}
                /** if(age === "7") return true else return false *//>
                +7 años
              </label>
            </div>
          </div>
          <button>Enviar</button>
          <button>Borrar</button>
        </form>
        <p>{`Título de la película ${data.title}`}</p>
      </main>
    </div>
  );
}

export default App;
