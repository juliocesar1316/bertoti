import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import "./style.css"
import Header from '../../components/header';
import Menu from '../../components/menu';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { useState } from 'react';
import baseURL from '../../utils';
import Footer from '../../components/footer';

function ProdutoDescritivo(){
    const location = useLocation();
    const dados = location.state.e;
    const[qtd, setQtd] = useState(0);
    const[idProduto, setIdProduto] = useState([]);
    

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

            const response = await fetch(`${baseURL}/venda/cadastro_venda`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(dadosCarrinho)
            });
            const data = await response.json()
            const array = [...idProduto, data.id]
            setIdProduto (array)
            setQtd(idProduto.length)
            return;

          } catch (error) {
                return console.log(error.message);
          }
    }

    async function deleteCarrinho() {
        const id = idProduto.pop();
        try {
            await fetch(
                `${baseURL}/venda/${id}`,{
                    method: "DELETE"
                }
            );
            setQtd(qtd - 1)
            return;
        } catch (error) {
            return console.log(error.message); 
        }
    }

    return(
        <div className="containerDescricao">
            <div>
                <Header/>
            </div>
            <div>
                <Menu/>
            </div>
            <div className='cardProduto'>
                <Card >
                    <img className="fotoDescritivo" src={dados.file} alt={dados.titulo} width="500" height="500"/>
                </Card>
                <div className="dadosDescritivo">
                    <div className='tituloCard'>
                        <Typography variant="h3" color="text.primary">{dados.tituloProduto}</Typography>
                        <Typography variant="subtitle1" color="text.primary">{dados.marca}</Typography>
                    </div>
                    
                    <div className='codigoProduto'>
                        <Typography variant="subtitle2" color="text.secondary">Cod 000{dados.id} </Typography>
                        <Typography variant="subtitle2" color="text.secondary">{dados.subTituloProduto}</Typography>
                    </div>

                    <div>
                        <Typography variant="h4" color="#f4ab34">R$ {((dados.preco)).toFixed(2).toString().replace(".", ",")}</Typography>
                        <Typography variant="h6" color="text.secondary">À vista ou em até 3x de R${((dados.preco)/3).toFixed(2).toString().replace(".", ",")} sem juros</Typography>
                    </div>
                    
                    <Typography variant="body1" color="text.primary">{dados.descricao}</Typography>
                    <Typography variant="body1" color="text.primary">{dados.linha}</Typography>
                    <div>
                        <div className='btnDescritivo'>
                            <div>
                                <Button variant="outlined" onClick={deleteCarrinho}>-</Button>
                                <Button variant="outlined" disabled>{qtd}</Button>
                                <Button variant="outlined" onClick={() => handleCadVenda(dados)}>+</Button>
                            </div>
                            <Button variant="contained">Comprar</Button>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default ProdutoDescritivo