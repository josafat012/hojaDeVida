import data from "../../data/data";

function ListSectionOne() {
    return (
        <ul>
            <li>Nombre: {data.personal.nombre} {data.personal.apellido}</li>
            <li>Edad: {data.personal.edad}</li>
            <li>Genero: {data.personal.genero}</li>
            <li>Nacionalidad: {data.personal.nacionalidad}</li>
            <li>Correo: {data.contacto.correo}</li>
        </ul>
      );
}

export default ListSectionOne;