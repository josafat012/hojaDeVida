import RightThreeBody from "../atoms/RightThreeBody";
import MiddleThreeBody from "../atoms/MiddleThreeBody";
import LeftThreeBody from "../atoms/LeftThreeBody";

function SectionThree() {
    return (
        <section className="section-three">
            <h2>EXPERIENCIA DE TRABAJO</h2>
            <div className="div-section-three">
                <LeftThreeBody/>
                <MiddleThreeBody/>
                <RightThreeBody/>
            </div>
        </section>
      );
}

export default SectionThree;