import '../../styles/css-informacoes/BoxInformacoes.module.css';
import Img360 from '../screen-informacoes/Img360';
import ButtonAbout from './ButtonAbout';
import Carouselinformacoes from './Carouselinformacoes';
import ButtonExperience from '../universal/ButtonExperience';

const BoxInformacoes = () => {
    return (

        <div className="container-informacoes">
            <div className="BoxInformacoes-div" >
                <span className='span-informacoes-page'>
                <ButtonAbout/>
                </span>  
                <Img360/>
                <Carouselinformacoes/>
                <ButtonExperience/>
            </div>
        </div>
    )
}
export default BoxInformacoes