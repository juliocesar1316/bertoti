import { useState } from "react"
import baseURL from "../../utils"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const style = {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    gap:'10px'
};

const title = {
    display:'flex', 
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom: '20px'
}

function EditProduto({dados, openModal, onClose }){
    const [tituloProduto, setTituloProduto] = useState(dados.tituloProduto)
    const [subTituloProduto, setSubTituloProduto] = useState(dados.subTituloProduto)
    const [preco, setPreco] = useState(dados.preco)
    const [descricao, setDescricao] = useState(dados.descricao)
    const [categoria, setCategoria] = useState(dados.categoria)
    const [marca, setMarca] = useState(dados.marca)
    const [quantidade, setQuantidade] = useState(dados.quantidade)
    const [linha, setLinha] = useState(dados.linha)

    const [open, setOpen] = useState(openModal)
    const handleClose = () => {setOpen(false);onClose(true)}

    async function handleUpdate(x) {
        const data = {
            tituloProduto: tituloProduto,
            subTituloProduto: subTituloProduto,
            preco: preco,
            descricao: descricao,
            categoria: categoria,
            marca: marca,
            quantidade: quantidade,
            linha: linha
        };
        await fetch(`${baseURL}/produto/${x}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        return setOpen(false)
    }
    
    function handleCloseMod(){
        onClose(true)
        setOpen(false)
    }

    return(
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <Box sx={title}>
                        <Typography variant="h6">Edição Produto</Typography>
                        <IconButton  onClick={handleCloseMod}>
                            <CloseIcon fontSize="large" color="#fff" />
                        </IconButton> 
                    </Box>
                    
                    <TextField 
                        id="tituloProduto" 
                        label="Nome Produto" 
                        variant="outlined" 
                        value={tituloProduto}
                        onChange={(e)=> setTituloProduto(e.target.value)}
                    />   
                    <TextField 
                        id="subTituloProduto" 
                        label="Sobnome Produto" 
                        variant="outlined" 
                        value={subTituloProduto}
                        onChange={(e)=> setSubTituloProduto(e.target.value)}
                    />   
                    <TextField 
                        id="preco" 
                        label="Preço" 
                        variant="outlined"
                        type="number" 
                        value={preco}
                        onChange={(e)=> setPreco(e.target.value)}
                    />   
                    <TextField 
                        id="descricao" 
                        label="Descrição" 
                        variant="outlined" 
                        value={descricao}
                        onChange={(e)=> setDescricao(e.target.value)}
                    />   
                    <TextField 
                        id="categoria" 
                        label="categoria" 
                        variant="outlined"
                        disabled 
                        value={categoria}
                        onChange={(e)=> setCategoria(e.target.value)}
                    />   
                    <TextField 
                        id="marca" 
                        label="Marca" 
                        variant="outlined"
                        disabled 
                        value={marca}
                        onChange={(e)=> setMarca(e.target.value)}
                    />  
                    <TextField 
                        id="quantidade" 
                        label="Quantidade" 
                        variant="outlined" 
                        value={quantidade}
                        type="number"
                        onChange={(e)=> setQuantidade(e.target.value)}
                    />     
                    <TextField 
                        id="linha" 
                        label="Linha" 
                        variant="outlined" 
                        value={linha}
                        onChange={(e)=> setLinha(e.target.value)}
                    />    
                    <Button variant="contained" onClick={()=>handleUpdate(dados.id)}>Enviar</Button>
                </Box>
            </Modal>
        </div>
        
    )
}

export default EditProduto