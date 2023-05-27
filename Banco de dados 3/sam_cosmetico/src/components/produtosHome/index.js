import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import "./index.css"
import { useEffect, useState } from "react";
import baseURL from "../../utils";
import ModalCarrinho from "../../components/modalCarrinho";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";



function ProdutoHome(){
    const navigate = useNavigate();
    const [dadosProdutos, setDadosProdutos] = useState([])
    const [dadosFotos, setDadosFotos] = useState([])
    const [dadosProdFoto, setDadosProdFoto] = useState([])
    const [modal, setModal] = useState(false)

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

    function juntaDados(){
        const juncao = dadosProdutos.map((prod)=>({
            ...dadosFotos.find((foto)=> foto.id === (prod.id)),
            ...prod
        }))
        setDadosProdFoto(juncao)
        
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
    },[]);

    useEffect(()=>{
        juntaDados()
    },[dadosProdutos, dadosFotos])
    

    return(
        <div className="bodyProduto">
            <div className="produtos">
                <ImageList sx={{ width: 1000 }} cols={3} gap={30}>
                    {dadosProdFoto
                        .sort(()=> Math.random() - 0.5)
                        .slice(0 ,9)
                        .map((x)=>{
                            return (
                                <Card sx={{ width: 300 }} elevation={4} key={x.id}>
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
                                                {`ou 6x R$ ${((x.preco)/6).toFixed(2).toString().replace(".", ",")} `}
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
                    <div className="modal"> 
                        <CloseIcon className="btn-modal" onClick={handleModal}/>
                        <ModalCarrinho/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProdutoHome;