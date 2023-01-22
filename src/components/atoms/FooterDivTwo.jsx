import img from '../../assets/imgs/imgFooterTwo.png';

function FooterDivTwo(props) {
    return (
        <div>
            <img src={img} alt="" />
            <h3>{props.name}</h3>
        </div>
      );
}

export default FooterDivTwo;