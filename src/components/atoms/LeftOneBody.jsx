import ListSectionOne from "./ListSectionOne";

function LeftOneBody(props) {
    return (
        <div className="div-left-one-body">
            <h2>ACERCA DE MI</h2>
            <p>{props.descripcion}</p>
            <ListSectionOne/>
        </div>
      );
}

export default LeftOneBody;