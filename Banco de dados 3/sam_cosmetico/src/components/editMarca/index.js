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

function EditMarca({dados, openModal, onClose }){
    const [nomeMarca, setNomeMarca] = useState(dados.nomeMarca)
    const [descricaoMarca, setDescricaoMarca] = useState(dados.descricaoMarca)
    
    const [open, setOpen] = useState(openModal)
    const handleClose = () => {setOpen(false);onClose(true)}

    async function handleUpdate(x) {
        const data = {
            nomeMarca: nomeMarca,
            descricaoMarca: descricaoMarca,
        };
        await fetch(`${baseURL}/marca/${x}`, {
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
                        <Typography variant="h6">Edição Marca</Typography>
                        <IconButton  onClick={handleCloseMod}>
                            <CloseIcon fontSize="large" color="#fff" />
                        </IconButton> 
                    </Box>
                    
                    <TextField 
                        id="nomeMarca" 
                        label="Nome Marca" 
                        variant="outlined" 
                        value={nomeMarca}
                        onChange={(e)=> setNomeMarca(e.target.value)}
                    />   
                    <TextField 
                        id="descricaoMarca" 
                        label="Descrição Marca" 
                        variant="outlined" 
                        value={descricaoMarca}
                        onChange={(e)=> setDescricaoMarca(e.target.value)}
                    />     
                    <Button variant="contained" onClick={()=>handleUpdate(dados.id)}>Enviar</Button>
                </Box>
            </Modal>
        </div>
        
    )
}

export default EditMarca