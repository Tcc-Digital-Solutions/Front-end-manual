import '../../styles/css_universal/HubTeste.module.css'
import { useNavigate } from "react-router-dom";

const HubTeste = (props) => {
    const navigate = useNavigate();

    const proosScreen = () => {
        navigate("/home")

    }
    const proosScreen1 = () => {
        navigate("/login")

    }
    const proosScreen2 = () => {
        navigate("/informacoes/45445")

    }

    const proo = () => {
        navigate("/cadastro-manual")
    }

    return (
        <div className="HubTeste-div" >
            <button className='HubTeste-button' onClick={() => proosScreen()}>Home</button>
            <button className='HubTeste-button' onClick={() => proosScreen1()}>Login</button>
            <button className='HubTeste-button' onClick={() => proosScreen2()}>Manual</button>
            <button className='HubTeste-button' onClick={() => proo()}>Crud</button>
        </div>
    )
}
export default HubTeste