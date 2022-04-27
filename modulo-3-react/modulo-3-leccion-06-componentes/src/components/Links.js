function Links(props) {
  //Una de las propiedades es de tipo booleano (abrir en una nueva ventana, solo puede ser true o false. Si la propiedad openInNewTab es igual a true entonces pasale como valor _blank, y si no, no le pases nada)
  const openLink = props.openInNewTab === true ? '_blank' : '';
  console.log(props);
  return (
    <>
      <li>
        <a className={props.className} href={props.href} target={openLink}>
          {props.text}
        </a>
      </li>
    </>
  );
}

export default Links;

//En el componente link, hago como la base y las diferentes propiedades que le voy a poder pasar.
