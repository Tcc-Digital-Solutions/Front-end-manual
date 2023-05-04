import '../../styles/css_universal/Screen-espera.module.css'
import '../../styles/css_universal/dropdown.module.css'
import bosch from '../../../public/img/loguinho.png'
import errorImg from '../../../public/img/ERROR.png'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Introducao from './Introducao'
import Speaker from "../universal/Speaker";

const ScreenEspera = () => {
    const [animado, setAnimado] = useState(true)
    const navigate = useNavigate()
    const { id } = useParams();


    if (!animado) {        if (!id) {
            // window.location.reload(false);
        }
        if (id) navigate('/informacoes/' + id)
    };

    setTimeout(() => {
        setAnimado(false)
        console.log(animado)
    }, 3000);

    return (
        <div className="screnn-espera-div" >
            <img className={animado ? 'screnn-espera-img animar' : ' screnn-espera-img- '} src={bosch} alt="" />
            <div className={!animado ? 'screnn-espera-button- para' : 'screnn-espera-button'}>
                <span className="screnn-espera-text">
                    <Speaker>
                        <p>Nenhum código de produto encontrado na Url</p>
                        <p> Click em continuar  para selecionar produto </p>
                    </Speaker>
                </span>
                <img className='screen-espera-img-error' src={errorImg} alt="" />
                <Introducao />
            </div>
        </div>
    )
}
export default ScreenEspera