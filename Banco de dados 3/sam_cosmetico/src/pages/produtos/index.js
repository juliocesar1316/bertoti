import Header from "../../components/header";
import Menu from "../../components/menu";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import "./style.css"
import { useEffect, useState } from "react";
import baseURL from "../../utils";
import ModalCarrinho from "../../components/modalCarrinho";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";
import Footer from '../../components/footer'


function Produto(){
    const navigate = useNavigate();
    const categoria = localStorage.getItem('categoria')
    const [dadosProdutos, setDadosProdutos] = useState([])
    const [dadosFotos, setDadosFotos] = useState([])
    const [dadosCategorias, setDadosCategorias] = useState([])
    const [dadosMarcas, setDadosMarcas] = useState([])
    const [dadosProdFoto, setDadosProdFoto] = useState([])
    const [modal, setModal] = useState(false)

    const [filtros, setFiltros] = useState({
        categoria: categoria ? [categoria] : [],
        filtroMarca:[],
        filtroCategoria: []
    })

    const clearFilters = () => {
        localStorage.removeItem('categoria');
        setFiltros({
          categoria: [],
          filtroMarca: [],
          filtroCategoria: []
        });
    };

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

    async function dadosCategoria() {
        try {
            const response = await fetch(
                `${baseURL}/categoria/lista_categoria`,{
                    method: "GET",
                }
            );
            const data = await response.json();
            setDadosCategorias(data); 
            return;
        } catch (error) {
            return console.log(error.message); 
        }
    }

    async function dadosMarca() {
        try {
            const response = await fetch(
                `${baseURL}/marca/lista_marca`,{
                    method: "GET",
                }
            );
            const data = await response.json();
            setDadosMarcas(data);
            return;
        } catch (error) {
            return console.log(error.message); 
        }
    }

    function juntaDados(){
        const juncao = dadosProdutos.map((prod)=>({
            ...dadosFotos.find((foto)=> foto.id === (prod.id)),
            ...prod
        }))
        setDadosProdFoto(juncao)
        console.log(filtros)
        return;
    }

    function handleModal(){
        setModal(false)
    }

    async function handleCadVenda(dados){
        const dadosCarrinho = {
            tituloProduto: dados.tituloProduto,
            subTituloProduto: dados.subTituloProduto,
            preco: dados.preco,
            descricao: dados.descricao,
            categoria: dados.categoria,
            marca: dados.marca,
            quantidade:1,
            linha: dados.linha,
            codigoProduto:dados.id
        } 
        try {       

            await fetch(`${baseURL}/venda/cadastro_venda`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(dadosCarrinho)
            });
            return;

          } catch (error) {
                return console.log(error.message);
          }
    }

    function redirecionar(e){
        navigate('/produtoDescritivo',{ state: { e } })
    }

    useEffect(() => {
        dadosProduto()
        dadosFoto()
        dadosCategoria()
        dadosMarca()
    },[]);

    useEffect(()=>{
        juntaDados()
    },[dadosProdutos, dadosFotos, filtros])
    

    return(
        <div className="containerProduto">
            <div>
                <Header/>
            </div>
            <div>
                <Menu/>
            </div>
            <div className="bodyProduto">
                <div className="filtroo">   
                    <Card sx={{ width: 220 }} elevation={4} className="filtro">
                        <div className="btn_filtro"> 
                            <Button size="small" variant="contained"  onClick={clearFilters}>
                                Remover filtros
                            </Button>
                        </div>
                        
                        <h3>Marcas</h3>
                        <div className="marca">
                            <FormGroup>
                                {dadosMarcas.map((x)=>{
                                    return (
                                        <FormControlLabel 
                                            control={<Checkbox  
                                                name={x.nomeMarca} 
                                                onChange={(e) => {
                                                    const { name, checked } = e.target;
                                                    setFiltros(prevFiltros => {
                                                        if (checked) {
                                                        return {
                                                            ...prevFiltros,
                                                            filtroMarca: [...prevFiltros.filtroMarca, name]
                                                        };
                                                        } else {
                                                        return {
                                                            ...prevFiltros,
                                                            filtroMarca: prevFiltros.filtroMarca.filter(x => x !== name)
                                                        };
                                                        }
                                                    });
                                                }}
                                                />} 
                                            label={x.nomeMarca} 
                                        />
                                    )
                                })}
                            </FormGroup>
                        </div>

                        <h3>Categorias</h3>
                        <div className="categoria">
                            <FormGroup>
                                {dadosCategorias.map((x)=>{
                                    return <FormControlLabel 
                                        control={<Checkbox 
                                            name={x.nomeCategoria} 
                                            onChange={(e) => {
                                                const { name, checked } = e.target;
                                                setFiltros(prevFiltros => {
                                                    if (checked) {
                                                    return {
                                                        ...prevFiltros,
                                                        filtroCategoria: [...prevFiltros.filtroCategoria, name]
                                                    };
                                                    } else {
                                                    return {
                                                        ...prevFiltros,
                                                        filtroCategoria: prevFiltros.filtroCategoria.filter(x => x !== name)
                                                    };
                                                    }
                                                });
                                            }}
                                            />}
                                            label={x.nomeCategoria} />
                                })}
                            </FormGroup>
                        </div>

                    </Card>
                </div>
                <div className="produtos">
                    <ImageList sx={{ width: 1000 }} cols={3} gap={30}>
                        {dadosProdFoto
                            .filter((x)=> (filtros.categoria).length > 0 ? (filtros.categoria).includes(x.categoria) : x.categoria) // ver como tirar o null de dentro do array e ver tambem como arrumar o modal
                            .filter((x)=> (filtros.filtroMarca).length > 0 ? (filtros.filtroMarca).includes(x.marca): x.marca)
                            .filter((x)=> (filtros.filtroCategoria).length > 0 ? (filtros.filtroCategoria).includes(x.categoria): x.categoria)
                            .map((x)=>{
                                return (
                                    <Card sx={{ width: 300, height:489 }} elevation={4} key={x.id}>
                                        <CardActionArea onClick={()=>redirecionar(x) }>
                                            <CardMedia
                                                component="img"
                                                sx={{ height: 300 }}
                                                image={x.file}
                                                title={x.tituloProduto}
                                                alt={x.tituloProduto}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="subtitle2" component="div">
                                                    {x.marca}
                                                </Typography>
                                                <Typography gutterBottom variant="h6" component="div">
                                                    {x.tituloProduto}
                                                </Typography>
                                                <Typography variant="body1" color="text.secondary">
                                                    {`R$ ${(x.preco).toFixed(2).toString().replace(".", ",")} `}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {`ou 3x R$ ${((x.preco)/3).toFixed(2).toString().replace(".", ",")} `}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                            <CardActions>
                                                {x.quantidade > 0 && (
                                                    <Button size="small" sx={{ width: 300 }} variant="outlined" onClick={(e)=>{ setModal(true); handleCadVenda(x)}}>
                                                        Comprar
                                                    </Button>
                                                )}
                                                {x.quantidade <= 0 && (
                                                    <Button size="small" sx={{ width: 300 }} variant="outlined" disabled>
                                                        Produto Indisponivel
                                                    </Button>
                                                )}
                                            </CardActions>
                                    </Card>
                                )
                        })}
                    </ImageList>
                    {modal && (
                        <div className="modall"> 
                            <CloseIcon className="btn-modal" onClick={handleModal}/>
                            <ModalCarrinho/>
                        </div>
                    )}
                </div>
            </div>

            <div>
                <Footer/>
            </div>


        </div>
    )
}

export default Produto;