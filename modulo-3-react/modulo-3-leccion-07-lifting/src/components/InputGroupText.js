const InputName = (props) => {
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
        value={props.inputValue.value}
        onChange={props.handleChange}
        //le paso como propiedad handleChange (lo podría llamar pepino) y en APP digo handleChange={handleName}, es decir a la función handleName
      />
    </div>
  );
};

export default InputName;
