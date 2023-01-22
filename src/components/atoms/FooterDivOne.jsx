import img from '../../assets/imgs/imgFooterOne.png';

function FooterDivOne(props) {
    return (
        <div>
            <img src={img} alt="" />
            <h3>{props.name}</h3>
        </div>
      );
}

export default FooterDivOne;