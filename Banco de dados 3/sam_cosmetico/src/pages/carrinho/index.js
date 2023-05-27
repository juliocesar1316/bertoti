import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Header from '../../components/header';
import Menu from '../../components/menu';
import { useEffect, useState } from 'react';
import baseURL from '../../utils';
import TextField from '@mui/material/TextField';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PdfDoc from '../../components/geradorPdf';
import "./style.css"
import Footer from '../../components/footer';


function Carrinho(){
    const [dadosCarrinho, setDadosCarrinho] = useState([])
    const [foto, setFoto] = useState([])
    const [carrinho, setCarrinho] = useState([])
    const [idProduto, setIdProduto] = useState([])
    const [bairro, setBairro] = useState('')
    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [dadosUser, setDadosUser] = useState('')
    const [userConfirmacao, setUserConfirmacao] = useState('')
    const [dataUser, setDataUser] = useState(null)

    

    async function dadosVenda() {
        try {
            const response = await fetch(
                `${baseURL}/venda/lista_venda`,{
                    method: "GET",
                }
            );
            const data = await response.json();
            setDadosCarrinho(data);
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
            setFoto(data);
            return;
        } catch (error) {
            return console.log(error.message); 
        }
    }

    function juntaDados(){
        const juncao = dadosCarrinho.map((car)=>({
            ...foto.find((fot)=> fot.id === (car.codigoProduto)),
            ...car
        }))
        
        const carrinhoAtualizado = juncao.reduce((acc, produto) => {
            const produtoExistente = acc.find(p => p.codigoProduto === produto.codigoProduto);
            if (produtoExistente) {
              produtoExistente.quantidade += produto.quantidade;
              produtoExistente.preco +=produto.preco
            } else {
              acc.push({ ...produto });
            }
            return acc;
        }, [])
        return setCarrinho(carrinhoAtualizado)
    }

    async function deleteCarrinho(x) {
        try {
            await fetch(
                `${baseURL}/venda/${x}`,{
                    method: "DELETE"
                }
            );
            return juntaDados();
        } catch (error) {
            return console.log(error.message); 
        }
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
            codigoProduto:dados.codigoProduto
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
            return juntaDados();

          } catch (error) {
                return console.log(error.message);
          }
    }

    async function dadosUsuario() {
        try {
            const response = await fetch(
                `${baseURL}/usuario/lista_usuario`,{
                    method: "GET",
                }
            );
            const data = await response.json();
            
            setDadosUser(data);
            return;
        } catch (error) {
            return console.log(error.message); 
        }
    }

    function pdf(){
        try {
            const UserDado = JSON.parse(userConfirmacao)
            
            if(UserDado){
                const teste = dadosUser.find((y) => ((y.email === UserDado.email) && (y.senha === UserDado.senha)))
                setDataUser(teste)
                console.log('enteo')
            }
        } catch (error) {
            return console.log(error.message); 
        }
        const date = new Date()
        const dia = (date.getDate()).toString()
        const mes = (date.getMonth()+1).toString()
        const data = `${(dia.length === 1) ? '0'+dia : dia}/${(mes.length === 1) ? '0'+ mes : mes}/${date.getFullYear()}`

        const endereco = `${rua} ${numero}, ${bairro}`

        
        PdfDoc(carrinho,data, endereco, cidade, cep, cpf, nome, telefone, estado,email, dataUser)

        setCep('')
        setRua('')
        setBairro('')
        setCidade('')
        setNumero('')
        setEstado('')
        setNome('')
        setTelefone('')
        setCpf('')
        setEmail('')
    }

    

    useEffect(()=>{
        dadosVenda()
        dadosFoto()
        dadosUsuario()
        setUserConfirmacao (localStorage.getItem('dado'))
    },[])

    useEffect(()=>{
        juntaDados()
    }, [dadosCarrinho,foto])


    return(
        <div className="containerCarrinho">
            <div>
                <Header/>
            </div>
            <div>
                <Menu/>
            </div>
            <div className="bodyCarrinho">
                <div className="sacola">
                    <Typography variant="h4" color="text.primary">Minha sacola</Typography>
                    <div>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><Typography variant="h5" color="text.primary">Produto</Typography></TableCell>
                                        <TableCell align="center"><Typography variant="h5" color="text.primary">Qtde</Typography></TableCell>
                                        <TableCell align="center"><Typography variant="h5" color="text.primary">Valor</Typography></TableCell>
                                        <TableCell align="center"><Typography variant="h5" color="text.primary">SubTotal</Typography></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {carrinho.map((x) => (
                                    <TableRow
                                    key={x.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell component="th" scope="row" >
                                        <div className='prod'>
                                            {<img src={x.file} alt={x.tituloProduto} key= {x.id} width="72" height="72"/>}
                                            <Typography variant="subtitle1" color="text.primary">{x.tituloProduto}</Typography>
                                        </div>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button variant="outlined" onClick={()=>deleteCarrinho(x.id)}>-</Button>
                                        <Button variant="outlined" disabled>{x.quantidade}</Button>
                                        <Button variant="outlined" onClick={() => handleCadVenda(x)}>+</Button>
                                    </TableCell>
                                    <TableCell align="center"><Typography variant="subtitle1" color="text.primary">{`R$ ${(x.preco/x.quantidade).toFixed(2).toString().replace(".", ",")} `}</Typography></TableCell>
                                    <TableCell align="center"><Typography variant="subtitle1" color="text.primary">{`R$ ${(x.preco).toFixed(2).toString().replace(".", ",")}`}</Typography></TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    
                </div>
                <div className="entrega">
                    <div className='cadastroEntrega'>
                        <div className='frete'>
                            <LocalShippingIcon sx={{ color: '#d4e5e5' }}/>
                            <Typography variant="h6" color="text.primary">Dados de Entrega</Typography> 
                        </div>
                        
                        {
                            userConfirmacao ? (
                                <TextField
                                    id="filled-input"
                                    label="CEP"
                                    type="number"
                                    size="small"
                                    fullWidth
                                    value = {cep}
                                    onChange = {(e) => setCep(e.target.value)}            
                                /> 
                            ) :
                            (
                                <div >
                                    <TextField
                                        id="filled-input"
                                        label="CEP"
                                        type="number"
                                        size="small"
                                        fullWidth
                                        value = {cep}
                                        onChange = {(e) => setCep(e.target.value)}            
                                    /> 
                                    <TextField
                                        id="filled-input"
                                        label="Rua"
                                        type="input"
                                        size="small"
                                        fullWidth
                                        value = {rua}
                                        onChange = {(e) => setRua(e.target.value)}
                                    /> 
                                    <TextField
                                        id="filled-input"
                                        label="Numero"
                                        type="number"
                                        size="small"
                                        fullWidth
                                        value = {numero}
                                        onChange = {(e) => setNumero(e.target.value)}
                                    /> 
                                    <TextField
                                        id="filled-input"
                                        label="Bairro"
                                        type="input"
                                        size="small"
                                        fullWidth
                                        value = {bairro}
                                        onChange = {(e) => setBairro(e.target.value)}
                                    />  
                                    <TextField
                                        id="filled-input"
                                        label="Cidade"
                                        type="input"
                                        size="small"
                                        fullWidth
                                        value = {cidade}
                                        onChange = {(e) => setCidade(e.target.value)}
                                    /> 
                                    <TextField
                                        id="filled-input"
                                        label="Estado"
                                        type="input"
                                        size="small"
                                        fullWidth
                                        value = {estado}
                                        onChange = {(e) => setEstado(e.target.value)}            
                                    />
                                    <TextField
                                        id="filled-input"
                                        label="Nome Completo"
                                        type="input"
                                        size="small"
                                        fullWidth
                                        value = {nome}
                                        onChange = {(e) => setNome(e.target.value)}            
                                    />
                                    <TextField
                                        id="filled-input"
                                        label="Telefone"
                                        type="number"
                                        size="small"
                                        fullWidth
                                        value = {telefone}
                                        onChange = {(e) => setTelefone(e.target.value)}            
                                    />
                                    <TextField
                                        id="filled-input"
                                        label="Cpf"
                                        type="number"
                                        size="small"
                                        fullWidth
                                        value = {cpf}
                                        onChange = {(e) => setCpf(e.target.value)}            
                                    />
                                    <TextField
                                        id="filled-input"
                                        label="E-mail"
                                        type="email"
                                        size="small"
                                        fullWidth
                                        value = {email}
                                        onChange = {(e) => setEmail(e.target.value)}            
                                    />
                                </div>
                            )
                        }
                    </div>
                    
                    <div className='valorCarrinho'>      
                        <div className='valorCompra'>
                            <div>
                                <Typography variant="subtitle1" color="text.primary"> Valor da compra </Typography>
                            </div>
                            <div>
                                <Typography variant="h6" color="text.primary">
                                    {`R$ ${(carrinho.reduce((soma, x) => {return soma + x.preco },0)).toFixed(2).toString().replace(".", ",")}`}
                                </Typography>
                            </div>
                        </div>
                        <div className='valorCompra'>
                            <div>
                                <Typography variant="subtitle1" color="text.primary"> Subtotal </Typography>
                            </div>
                            <div>
                                <Typography variant="h6" color="text.primary">
                                    {`R$ ${(carrinho.reduce((soma, x) => {return soma + x.preco },0)).toFixed(2).toString().replace(".", ",")}`}
                                </Typography>
                            </div>
                        </div>
                        <div className='valorCompra'>
                            <div>
                                <Typography variant="subtitle1" color="text.primary"> Total </Typography>
                            </div>
                            <div>
                                <Typography variant="h6" color="text.primary">
                                    {`R$ ${(carrinho.reduce((soma, x) => {return soma + x.preco },0)).toFixed(2).toString().replace(".", ",")}`}
                                </Typography> 
                            </div>  
                        </div>
                        <div className='vertical'></div>
                        <Button size="small" variant="Contained" onClick={()=>pdf()}> 
                            Comprar
                        </Button> 
                        {/* <Button size="small" variant="Contained" onClick={()=>sendWhatsAppMessage()}> 
                            zap
                        </Button>  */}
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Carrinho