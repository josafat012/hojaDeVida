import HeaderImg from '../atoms/HeaderImg';
import HeaderTitle from '../atoms/HeaderTitle';
import HeaderSubtitle from '../atoms/HeaderSubtitle';
import data from '../../data/data';


function Header() {
    return ( 
        <header>
            <div>
                <HeaderImg/>
            </div>
            <div>
               <HeaderTitle name={data.personal.nombre} lastname={data.personal.apellido}/>
               <HeaderSubtitle description={data.personal.ocupacion}/>
            </div>
        </header>
     );
}

export default Header;