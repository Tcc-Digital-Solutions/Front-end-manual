import '../../assets/css/css_universal/Navbar.css'
import imgTop from '../../assets/img/imgTopo.png'
import boschLogo from '../../assets/img/Group 72.png'
import boschLogoN from '../../assets/img/logo-negativado.png'
import { Translate } from './Translate';
import { ButtonLogoff } from '../screen-crud/ButtonLogoff'
import { NavbarHome } from '../screen-home/NavbarHome';



export const Navbar = (props) => {

    return (
        <div className={props.nave} >
            <div className='navbar-div-1'>
                <img className='navbar-div-img-1' src={imgTop} alt="" />
            </div>
            <div className='navbar-div-2'>
                <span className='navbar-div-2-span'>
                    <img className='navbar-div-img-2' src={boschLogo} alt="" id="logo"/>    
                    <img className='navbar-div-img-2 hide' src={boschLogoN} alt="" id="logoN" />    
                </span>
                <div  className={props.logado ? 'navbar-div-buttons' : 'navbar-div-buttons-2'}>
                    <span className='navbar-buttons-comus-1'>
                        <span className={props.logado ? 'navbar-div-button-logoff' : 'hide'}>
                            <ButtonLogoff />
                        </span> 
                        <Translate /> 
                        <div className={props.menu ? 'active-home' : 'no-active-home'}>
                            <NavbarHome visible={props.visible} box={props.box} menu={props.menuTrue} search={props.search} />
                        </div>                                               
                    </span>
                </div>
            </div>
        </div>
    )
}
