import "./index.css"
import Header from "../../components/header";
import Menu from "../../components/menu";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import ProdutoSemImg from '../../assets/produto-sem-imagem.webp';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import baseURL from "../../utils";

function CadastroProduto(){
    const [selectCategoria, setSelectCategoria] = useState('')
    const [selectMarca, setSelectMarca] = useState('')
    const [listCategoria, setListCategoria] = useState([])
    const [listMarca, setListMarca] = useState([])
    const [status, setStatus] = useState('')

    const [nomeMarca, setNomeMarca] = useState('')
    const [descricaoMarca, setDescricaoMarca] = useState('')

    const [nomeCategoria, setNomeCategoria] = useState('')
    const [descricaoCategoria, setDescricaoCategoria] = useState('')

    const [nomeProduto, setNomeProduto] = useState('')
    const [subNomeProd, setSubNomeProd] = useState('')
    const [precoUnit, setPrecoUnit] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [linhaProduto, setLinhaProduto] = useState('')
    const [descricaoProduto, setDescricaoProduto] = useState('')

    const[file, setFile] = useState('')
    // const[fileName, setFileName] = useState('')
    // const[testeUpload, setTesteUpload] = useState([])

    
    // useEffect(() => {
    //     async function dados() {
    //       const response = await fetch(
    //         "http://localhost:8080/upload/fotos",
    //         {
    //           method: "GET",
    //         }
    //       );
        
    //       const data = await response.json();
    //       setTesteUpload(data);
    //     }
    //     dados();
    //   }, []);

    async function handleSubmitProd(e){
        e.preventDefault();
        const dadosProd = {
            tituloProduto: nomeProduto,
            subTituloProduto: subNomeProd,
            preco: precoUnit,
            descricao: descricaoProduto,
            categoria: selectCategoria,
            marca: selectMarca,
            quantidade:quantidade,
            linha: linhaProduto
        }  
        
        try {       

            await fetch(`${baseURL}/produto/cadastro_produto`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(dadosProd)
            });

            console.log(file)
            const formData = new FormData();
            formData.append("file", file);
            await fetch(`${baseURL}/upload`,{
                method: "POST",
                body: formData
            })
            
            setNomeProduto('')
            setSubNomeProd('')
            setPrecoUnit('')
            setDescricaoProduto('')
            setSelectCategoria('')
            setSelectMarca('')
            setQuantidade('')
            setLinhaProduto('')
            setFile('')
            return;

          } catch (error) {
                return console.log(error.message);
          }
    }

    async function handleSubmitCat(){
        const dadosCategoria = {
            nomeCategoria: nomeCategoria,
	        descricaoCategoria:descricaoCategoria
        }
        try {
            await fetch(`${baseURL}/categoria/cadastro_categoria`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(dadosCategoria),
            });
      
            setNomeCategoria('')
            setDescricaoCategoria('')
            setStatus('ok')
            return;
            
          } catch (error) {
            return console.log(error.message);
          }
    }

    async function handleSubmitMarca(event){
        const dadosMarca = {
            nomeMarca: nomeMarca,
	        descricaoMarca:descricaoMarca
        }

        try {
            await fetch(`${baseURL}/marca/cadastro_marca`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(dadosMarca),
            });
      
            setNomeMarca('')
            setDescricaoMarca('')
            setStatus('ok')

            return;
            
          } catch (error) {
            return console.log(error.message);
          }
    }

    async function buscaDados(){
        try {
            const reponseMarca = await fetch(`${baseURL}/marca/lista_marca`)
            const dadosMarca = await reponseMarca.json()
            setListMarca(dadosMarca)

            const reponseCategoria = await fetch(`${baseURL}/categoria/lista_categoria`)
            const dadosCategoria = await reponseCategoria.json()
            setListCategoria(dadosCategoria)
            return;

        } catch (error) {
            return console.log(error.message);
        }
    }

    useEffect (()=>{
        buscaDados();
    }, [status])

    

    return(
        <div className="containerCadProd">
            <div>
                <Header/>
            </div>
            <div>
                <Menu/>
            </div>
            <div className="tituloPage">
                <h1>Cadastro</h1>
            </div>
            <div className="bodyCad">
                <div className="cadMarCate">
                    <div className="cadMarca">
                        <h2>Marca</h2>
                        <TextField
                            id="filled-input"
                            label="Nome Marca"
                            type="input"
                            value ={nomeMarca}
                            onChange = {(e) => setNomeMarca(e.target.value)}
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Descrição"
                            multiline
                            rows={4}
                            value = {descricaoMarca}
                            onChange = {(e) => setDescricaoMarca(e.target.value)}
                        />
                        <div>
                            <Button 
                                variant="contained" 
                                size="medium"
                                onClick={handleSubmitMarca}
                                >
                                Enviar
                            </Button>
                        </div>
                       
                    </div>
                    <div className="cadCategoria">
                        <h2>Categoria</h2>
                        <TextField
                            id="filled-input"
                            label="Nome Categoria"
                            type="input"
                            value={nomeCategoria}
                            onChange = {(e) => setNomeCategoria(e.target.value)}
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Descrição"
                            multiline
                            rows={4}
                            value={descricaoCategoria}
                            onChange = {(e) => setDescricaoCategoria(e.target.value)}
                        />
                        <div>
                            <Button 
                                variant="contained" 
                                size="medium"
                                onClick={handleSubmitCat}
                            >
                                Enviar
                            </Button>
                        </div>
                       
                    </div>
                </div>
                
                <div className="cadProduto">
                    <h2>Produto</h2>
                    <div className="cadLayout">
                        <div className="cadDados">
                            <TextField
                            id="filled-input"
                            label="Nome Produto"
                            type="input"
                            value={nomeProduto}
                            onChange = {(e)=> setNomeProduto(e.target.value)}
                            />
                            <TextField
                                id="filled-input"
                                label="SubNome Produto"
                                type="input"
                                value={subNomeProd}
                                onChange = {(e)=> setSubNomeProd(e.target.value)}
                            />
                            <TextField
                                id="filled-input"
                                label="Preço Unitario"
                                type="number"
                                value={precoUnit}
                                onChange = {(e)=> setPrecoUnit(e.target.value)}
                            />
                            
                            <FormControl fullWidth>
                                <InputLabel id="select-marca-label">Marca</InputLabel>
                                <Select
                                    labelId="select-marca-label"
                                    id="select-marca"
                                    value={selectMarca}
                                    label="Marca"
                                    onChange={(e)=>setSelectMarca(e.target.value)}
                                    >
                                    {
                                        listMarca.map((x)=>{
                                            return(
                                                <MenuItem value={x.nomeMarca} key={x.id}>
                                                    {x.nomeMarca}
                                                </MenuItem>
                                            )
                                        })
                                    }
                                    
                                </Select>
                            </FormControl>

                            <FormControl fullWidth>
                                <InputLabel id="select-categoria-label">Categoria</InputLabel>
                                <Select
                                    labelId="select-categoria-label"
                                    id="select-categoria"
                                    value={selectCategoria}
                                    label="Categoria"
                                    onChange={(e)=>setSelectCategoria(e.target.value)}
                                    >
                                    {
                                        listCategoria.map((x)=>{
                                            return(
                                                <MenuItem value={x.nomeCategoria} key={x.id}>
                                                    {x.nomeCategoria}
                                                </MenuItem>
                                            )
                                        })
                                    }
                                </Select>
                            </FormControl>                    
                            
                            <TextField
                                id="filled-input"
                                label="Quantidade"
                                type="number"
                                value={quantidade}
                                onChange = {(e)=> setQuantidade(e.target.value)}
                            />
                            <TextField
                                id="filled-input"
                                label="Linha Produto"
                                type="input"
                                value={linhaProduto}
                                onChange = {(e)=> setLinhaProduto(e.target.value)}
                            />
                        </div>

                        <div className="cadUpload">
                            <div className="containerUpload">
                                {/* <input
                                    className="btn-upload"
                                    id="contained-button-file"
                                    multiple
                                    required
                                    type="file"
                                    onChange={(e) => {
                                        setFile(e.target.files[0]);
                                        setFileName(e.target.files[0].name);
                                    }}
                                />  */}
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <Button variant="contained" component="label">
                                        Upload
                                        <input 
                                            hidden accept="image/*" 
                                            multiple type="file" 
                                            required
                                            onChange={(e) => {
                                                setFile(e.target.files[0]);
                                            }}
                                            />
                                    </Button>
                                </Stack>
                                <div className="imgProduto">
                                    {file ?  <img src={URL.createObjectURL(file)} alt="Imagem" width="300" height="300"/> : <img src={ProdutoSemImg} alt="Imagem" width="300" height="300"/>}
                                </div>
                                                               
                            </div>

                            
                            {/* {
                                testeUpload.map((x)=>(
                                        <img src={x.file} alt='' key= {x.id} width="150" height="150"/>                                        
                                    )
                                )
                            } */}

                            <TextField
                                id="outlined-multiline-static"
                                label="Descrição"
                                multiline
                                rows={4}
                                value={descricaoProduto}
                                onChange = {(e)=> setDescricaoProduto(e.target.value)}
                            />
                        </div>
                        
                    </div>
                    <div>
                        <Button 
                            variant="contained" 
                            component="label"
                            onClick={handleSubmitProd}
                        >
                            Enviar
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CadastroProduto;