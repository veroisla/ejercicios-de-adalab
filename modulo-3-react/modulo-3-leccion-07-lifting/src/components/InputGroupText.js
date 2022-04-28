const InputGroupText = (props) => {
  const handleInputChange = (ev) => {
    props.handleChange(ev.target.value);
  };
  return (
    <div className="input-group-text">
      <label className="label-text" htmlFor="name">
        {props.labelText}
      </label>
      <input
        className="input-text"
        type="text"
        name={props.inputName}
        id={props.inputId}
        placeholder={props.inputPlaceholder}
        value={props.inputValue}
        onChange={handleInputChange}
        //Le paso como propiedad handleInputChange que tiene la funcion handleChange que gaurda el valor del input?
      />
    </div>
  );
};

export default InputGroupText;

// Añade también la función setEmail para poder hacer lifting.
// Refactoriza la función setEmail porque ahora esta recibe el valor del input y no el evento.
