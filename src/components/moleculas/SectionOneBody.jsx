import LeftOneBody from "../atoms/LeftOneBody";
import RightTwoBody from "../atoms/RightOneBody";
import data from "../../data/data";

function SectionOneBody() {
    return (
      <section className="section-one">
        <LeftOneBody descripcion={data.personal.descripcion} nombre={data.personal.nombre} apellido={data.personal.apellido} genero={data.personal.genero} nacionalidad={data.personal.nacionalidad} correo={data.contacto.correo}/>
        <RightTwoBody/>
      </section>  
    );
}

export default SectionOneBody;