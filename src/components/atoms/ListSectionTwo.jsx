import data from "../../data/data";

function ListSectionTwo() {
    return (
        <ul>
            {
                data.tecnologias.map( tecnologias => (
                    <li key={tecnologias.id}>{tecnologias.name}</li>
                ))
            }
        </ul>
      );
}

export default ListSectionTwo;