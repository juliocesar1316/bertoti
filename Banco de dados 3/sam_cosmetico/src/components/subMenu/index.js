import Produto from "../../pages/produtos"
import "./index.css"
import { useNavigate } from "react-router-dom";

function SubMenu(){
    const navigate = useNavigate();

    return(
        <div className="subMenu">
                <button onClick={(e)=>{localStorage.setItem('categoria', 'Perfume'); navigate(`/produto`)}}>Perfume</button>    
                <button onClick={(e)=>{localStorage.setItem('categoria', 'Shampoo'); navigate(`/produto`)}}>Shampoo</button>    
                <button onClick={(e)=>{localStorage.setItem('categoria', 'Maquiagem'); navigate(`/produto`)}}>Maquiagem</button>    
                <button onClick={(e)=>{localStorage.setItem('categoria', 'Acessorios'); navigate(`/produto`)}}>Acessorios</button>    
                <button onClick={(e)=>{localStorage.setItem('categoria', 'Infantil'); navigate(`/produto`)}}>Infantil</button>    
            </div>
    )
}

export default SubMenu