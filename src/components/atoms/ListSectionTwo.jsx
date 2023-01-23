import data from "../../data/data";

function ListSectionTwo() {
    return (
        <>
            {
                data.tecnologias.map( tecnologias => (
                    <p key={tecnologias.id}> ~ {tecnologias.name}</p>
                ))
            }
        </>    
      );
}

export default ListSectionTwo;