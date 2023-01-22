import FooterDivOne from "../atoms/FooterDivOne";
import FooterDivTwo from "../atoms/FooterDivTwo";
import FooterDivThree from "../atoms/FooterDivThree";
import FooterDivFour from "../atoms/FooterDivFour";
import data from "../../data/data";

function Footer() {
    return (
        <footer>
            <div className="div-footer">
                <FooterDivOne name={data.contacto.escuela}/>
                <FooterDivTwo name={data.contacto.correo}/>
                <FooterDivThree name={data.contacto.direccion}/>
                <FooterDivFour name={data.contacto.telefono}/>
            </div>
        </footer>
     );
}

export default Footer;