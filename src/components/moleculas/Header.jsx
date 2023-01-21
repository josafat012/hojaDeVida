import HeaderImg from '../atoms/HeaderImg';
import HeaderTitle from '../atoms/HeaderTitle';
import HeaderSubtitle from '../atoms/HeaderSubtitle';
import data from '../../data/data';


function Header() {
    return ( 
        <header>
            <HeaderImg/>
            <div>
               <HeaderTitle name={data.personal.nombre} lastname={data.personal.apellido}/>
               <HeaderSubtitle description={data.personal.descripcion}/>
            </div>
        </header>
     );
}

export default Header;