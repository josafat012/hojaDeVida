import img from '../../assets/imgs/imgFooterThree.png';

function FooterDivThree(props) {
    return (
        <div>
            <img src={img} alt="" />
            <h3>{props.name}</h3>
        </div>
      );
}

export default FooterDivThree;