import { useState,useEffect } from "react";
import "./index.css"
import baseURL from "../../utils";
function Header(){
    const [dadosUsuario, setDadosUsuario] = useState([])
    const [statusUsuarioHeader, setStatusUsuarioHeader] = useState(false)
    const [userDado, setUserDado] = useState([])

    async function usuario(){
        try {
            const response = await fetch(
                `${baseURL}/usuario/lista_usuario`,{
                    method: "GET",
                }
            );
            const data = await response.json();
            setDadosUsuario(data);
        } catch (error) {
            return console.log(error.message); 
        }

        const dado = localStorage.getItem('dado');
        if(dado){
            setUserDado(JSON.parse(dado))
            setStatusUsuarioHeader(true)
        }
        else{
            setStatusUsuarioHeader(false)
            return
        }
    }

    useEffect(() => {
        usuario()
    },[]);


    return(

        <div className="header">
                <div className="linksHeader">
                    <a href="/" >Home</a>
                    <a href="/produto" >Produto</a>
                    <a href="/carrinho" >Carrinho</a>
                    {
                        statusUsuarioHeader && dadosUsuario.find((y) => (y.email === userDado.email) && (y.senha === userDado.senha) && (y.acesso === 'admin')) ? (
                            <div className="btn_header">
                                <a href="/cadastro_produto" >Cadastro Produto</a>
                                <a href="/edicao_produto" >Edição Produto</a>
                            </div>
                            
                        ): null  
                    }
                </div>
            </div>
    )
}
export default Header