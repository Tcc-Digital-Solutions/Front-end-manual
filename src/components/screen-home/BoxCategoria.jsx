import '../../assets/css/css-home/BoxCategoria.css'
import moldeImg1 from '../../assets/img/f12-furadeiras-menu.png'


export const BoxCategoria = () => {
    return (
        <div className="box-categoria-select-div" >
            <button className="box-categoria-select-button">
                <img className="box-categoria-select-img" src={moldeImg1} alt="" />
                <span className="box-categoria-select-text">Furadeiras e Parafusadeiras</span>
            </button>
        </div>
    )
}