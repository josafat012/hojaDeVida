import ListSectionOne from "./ListSectionOne";

function LeftOneBody(props) {
    return (
        <div className="div-left-one-body">
            <h2>Acerca de mi</h2>
            <p>{props.descripcion}</p>
            <p>Mis datos son:</p>
            <ListSectionOne/>
        </div>
      );
}

export default LeftOneBody;