import img from '../../assets/imgs/imgFooterFour.png';

function FooterDivFour(props) {
    return (
        <div>
            <img src={img} alt="" />
            <h3>{props.name}</h3>
        </div>
      );
}

export default FooterDivFour;