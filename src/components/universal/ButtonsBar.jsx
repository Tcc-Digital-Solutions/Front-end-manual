import '../../styles/css_universal/Buttons_bar.module.css'
import {useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ButtonsBar = () => {
    const { id } = useParams();
    const navigate = useNavigate()


    return (
        <div className="buttons-bar-div" >
            <div className="buttons-bar-ilha">
                <button onClick={() => navigate('/manual/' + id)} className="buttons-bar-click" role="button">Manual</button>
                <button onClick={() => navigate('/montagem/' + id)} className="buttons-bar-click" role="button">Montagem</button>
                <button onClick={() => navigate('/informacoes/' + id)} className="buttons-bar-click" role="button">informações</button>
            </div>
        </div>
    )
}
export default ButtonsBar