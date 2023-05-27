import "./index.css"
import Logo from "../../assets/logoSm.png"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState, useEffect } from "react";
import ModalCarrinho from "../modalCarrinho";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";
import baseURL from "../../utils";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';

function Menu(){
    const [modalMenu, setModalMenu] = useState('')
    const [pesquisa, setPesquisa] = useState('')
    const navigate = useNavigate()
    const [dadosProdutos, setDadosProdutos] = useState([])
    const [dadosFotos, setDadosFotos] = useState([])
    const [dadosProdFoto, setDadosProdFoto] = useState([])
    const [status, setStatus] = useState()
    const [dadosUsuario, setDadosUsuario] = useState([])
    const [statusUsuario, setStatusUsuario] = useState()
    const [userDado, setUserDado] = useState({})

    function handleModal(){
        setModalMenu(false)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setStatus(false)
    }

    async function dadosProduto() {
        try {
            const response = await fetch(
                `${baseURL}/produto/lista_produto`,{
                    method: "GET",
                }
            );
            const data = await response.json();
            
            setDadosProdutos(data);
            return;
        } catch (error) {
            return console.log(error.message); 
        }
    }

  async function dadosFoto() {
        try {
            const response = await fetch(
                `${baseURL}/upload/fotos`,{
                    method: "GET",
                }
            );
            const data = await response.json();
            setDadosFotos(data);
            
            return;
        } catch (error) {
            return console.log(error.message); 
        }
    }

    async function juntaDados(){
        const juncao = dadosProdutos.map((prod)=>({
            ...dadosFotos.find((foto)=> foto.id === (prod.id)),
            ...prod
        }))
        setDadosProdFoto(juncao)
        return;
    }

    async function usuario(){
        try {
            const response = await fetch(
                `${baseURL}/usuario/lista_usuario`,{
                    method: "GET",
                }
            );
            const data = await response.json();
            setDadosUsuario(data);

            try {
                const dado = localStorage.getItem('dado');
                if(dado){
                    setUserDado(JSON.parse(dado))
                    setStatusUsuario(true)
                    return
                }
                else{
                    setStatusUsuario(false)
                    return
                }
            } catch (error) {
                return console.log(error.message); 
            }
            
        } catch (error) {
            return console.log(error.message); 
        }
    }

    function pesquisaProduto(e){
        if(e){
            navigate('/produtoDescritivo',{ state: { e } })
            setStatus(false)
        }
        else{
            setStatus(true)
        }
    }

    useEffect(() => {
        dadosProduto()
        dadosFoto()
        usuario()
    },[]);

    useEffect(()=>{
        juntaDados()
    },[dadosProdutos, dadosFotos])

  
    return(
        <div className="menu">
            <img src={Logo} alt="logo Site" className="imgLogo"></img>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Busque seu produto"
                    inputProps={{ 'aria-label': 'Busque seu produto' }}
                    value={pesquisa}
                    onChange={(e)=> setPesquisa(e.target.value)}
                />

                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon onClick={()=>pesquisaProduto(dadosProdFoto.find((x)=> x.tituloProduto === pesquisa))}/>
                </IconButton>
            </Paper>
            <Snackbar open={status} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Produto não encontrado
                </Alert>
            </Snackbar>

            <div className="user">
                {
                    statusUsuario ? (
                        dadosUsuario.find((y) => (y.email === userDado.email) && (y.senha === userDado.senha)) ? (
                          <div className="linkMenu">
                            <Typography variant="h6">{dadosUsuario[0].nomeUsuario}</Typography>
                            <button className="btn_sair" onClick={() => {
                              localStorage.removeItem('dado');
                              window.location.href = '/';
                            }}>Sair</button>
                          </div>
                        ) : null
                    ) : 
                    (     
                        <div className="linkMenu">
                            <a href="/minha_conta">Entrar na Minha Conta</a>
                            <a href="/cadastro_usuario">Cadastre-se</a>
                        </div> 
                    )
                }
                <ShoppingCartIcon className="carrinho" onClick={()=>setModalMenu(true)}/>
            </div>
            {modalMenu &&(
              <div className="modalMenu"> 
                <CloseIcon className="btn-modalMenu" onClick={handleModal}/>
                <ModalCarrinho/>
              </div>
            )}
        </div>
    )
}

export default Menu