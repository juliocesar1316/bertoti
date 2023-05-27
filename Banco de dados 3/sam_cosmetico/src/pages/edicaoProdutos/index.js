import React, { useState, useEffect} from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import baseURL from "../../utils";
import Header from "../../components/header";
import Menu from "../../components/menu";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './index.css'
import Typography from '@mui/material/Typography';
import EditProduto from "../../components/editProduto";
import EditMarca from "../../components/editMarca";
import EditCategoria from "../../components/editCategoria";
import Footer from "../../components/footer";


const columns = [
    { id: 'ID', label: 'ID', minWidth: 50, align: 'left' },
    { id: 'codigoProduto', label: 'Codigo Produto', minWidth: 100,align: 'left' },
    {
      id: 'nomeProduto',
      label: 'Nome Produto',
      minWidth: 170,
      align: 'left'
    },
    {
      id: 'sobnomeProduto',
      label: 'Sobnome Produto',
      minWidth: 170,
      align: 'left'
    },
    {
      id: 'categoria',
      label: 'Categoria',
      minWidth: 170,
      align: 'left'
    },
    {
      id: 'marca',
      label: 'Marca',
      minWidth: 170,
      align: 'left'
    },
    {
      id: 'linha',
      label: 'Linha',
      minWidth: 170,
      align: 'left'
    },
    {
      id: 'quantidade',
      label: 'Quantidade',
      minWidth: 50,
      align: 'left'
    },
    {
      id: 'preco',
      label: 'Preço',
      minWidth: 80,
      align: 'left'
    },
    {
      id: 'descricao',
      label: 'Descricao',
      minWidth: 200,
      align: 'left'
    },
    {
      id: 'editar',
      minWidth: 30,
      align: 'left'
    },
    {
        id: 'excluir',
        minWidth: 30,
        align: 'left'
    },
  ];
  
  const columnsMarca = [
    {   id: 'ID', label: 'ID', minWidth: 50, align: 'left' },
  
    {
        id: 'nomeMarca',
        label: 'Nome Marca',
        minWidth: 200,
        align: 'left'
    },
    {
        id: 'descricaoMarca',
        label: 'Descricao Marca',
        minWidth: 400,
        align: 'left'
    },
    {
        id: 'editar',
        minWidth: 30,
        align: 'left'
    },
    {
        id: 'excluir',
        minWidth: 30,
        align: 'left'
    },
    ]

    const columnsCategoria = [
        {   id: 'ID', label: 'ID', minWidth: 50, align: 'left' },
        {
            id: 'nomeCategoria',
            label: 'Nome Categoria',
            minWidth: 200,
            align: 'left'
        },
    
        {
            id: 'descricaoCategoria',
            label: 'Descricao Categoria',
            minWidth: 400,
            align: 'left'
        },
        {
            id: 'editar',
            minWidth: 30,
            align: 'left'
        },
        {
            id: 'excluir',
            minWidth: 30,
            align: 'left'
        },
        ]
function EdicaoProduto(){
    const [dadosProdutos, setDadosProdutos] = useState([])
    const [dadosFotos, setDadosFotos] = useState([])
    const [dadosCategorias, setDadosCategorias] = useState([])
    const [dadosMarcas, setDadosMarcas] = useState([])
    const [dadosProdFoto, setDadosProdFoto] = useState([])
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [modalProduto, setModalProduto] = useState(false);
    const [editProd, setEditProd] = useState([]);
    const [modalMarca, setModalMarca] = useState(false);
    const [editMarca, setEditMarca] = useState([]);
    const [modalCategoria, setModalCategoria] = useState(false);
    const [editCategoria, setEditCategoria] = useState([]);

  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
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
        return;
    }

    async function deleteProduto(x) {
        try {
            await fetch(
                `${baseURL}/produto/${x}`,{
                    method: "DELETE"
                }
            );
            return juntaDados();
        } catch (error) {
            return console.log(error.message); 
        }
    }
    async function deleteMarca(x) {
        try {
            await fetch(
                `${baseURL}/marca/${x}`,{
                    method: "DELETE"
                }
            );
            return juntaDados();
        } catch (error) {
            return console.log(error.message); 
        }
    }
    async function deleteCategoria(x) {
        try {
            await fetch(
                `${baseURL}/categoria/${x}`,{
                    method: "DELETE"
                }
            );
            return juntaDados();
        } catch (error) {
            return console.log(error.message); 
        }
    }

    function handleModalClose(){
        setModalProduto(false)
        setModalMarca(false)
        setModalCategoria(false)
    }


    useEffect(() => {
        dadosProduto()
        dadosFoto()
        dadosCategoria()
        dadosMarca()
    },[]);

    useEffect(()=>{
        juntaDados()
    },[dadosProdutos, dadosFotos])

    
    return(
        <div className="containerEdicao">
            <div>
                <Header/>
            </div>
            <div>
                <Menu/>
            </div>
            <div className="bodyEdicao">
                <div className="tituloPage">
                    <Typography variant="h4">Edição de Dados</Typography>
                </div>
            
                <div className="quadroProduto">
                    <Paper>
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                    >
                                    {column.label}
                                    </TableCell>
                                ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {dadosProdFoto
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((x) => {
                                    return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={x.id}>
                                            <TableCell key={x.id} align="left">{x.id}</TableCell>
                                            <TableCell align="left">{x.id}</TableCell>
                                            <TableCell align="left">{x.tituloProduto}</TableCell>
                                            <TableCell align="left">{x.subTituloProduto}</TableCell>
                                            <TableCell align="left">{x.categoria}</TableCell>
                                            <TableCell align="left">{x.marca}</TableCell>
                                            <TableCell align="left">{x.linha}</TableCell>
                                            <TableCell align="left">{x.quantidade}</TableCell>
                                            <TableCell align="left">{x.preco}</TableCell>
                                            <TableCell align="left">{x.descricao}</TableCell>
                                            <TableCell align="left">
                                                <IconButton
                                                    color="primary"
                                                    onClick={() => {
                                                        setModalProduto(true);
                                                        setEditProd(x);
                                                    }}
                                                >
                                                    <EditIcon />
                                                </IconButton> 
                                            </TableCell>
                                            <TableCell align="left">
                                                <IconButton
                                                    color="primary"
                                                    onClick={() => deleteProduto(x.id)}
                                                >
                                                    <DeleteIcon />
                                                </IconButton> 
                                            </TableCell>
                                    </TableRow>
                                    );
                                })}
                            </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={dadosProdFoto.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                    {
                        modalProduto && (
                            <div>
                                <EditProduto dados = {editProd} openModal = {modalProduto} onClose={handleModalClose}/>
                            </div>
                        )
                    }
                </div>
                <div className="quadroMarca">
                    <Paper >
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                {columnsMarca.map((column) => (
                                    <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                    >
                                    {column.label}
                                    </TableCell>
                                ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {dadosMarcas
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((x) => {
                                    return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={x.id}>
                                            <TableCell key={x.id} align="left">{x.id}</TableCell>
                                            <TableCell align="left">{x.nomeMarca}</TableCell>
                                            <TableCell align="left">{x.descricaoMarca}</TableCell>
                                            <TableCell align="left">
                                                <IconButton
                                                    color="primary"
                                                    onClick={() => {
                                                        setModalMarca(true);
                                                        setEditMarca(x);
                                                    }}
                                                >
                                                    <EditIcon />
                                                </IconButton> 
                                            </TableCell>
                                            <TableCell align="left">
                                                <IconButton
                                                    color="primary"
                                                    onClick={() => deleteMarca(x.id)}
                                                >
                                                    <DeleteIcon />
                                                </IconButton> 
                                            </TableCell>
                                    </TableRow>
                                    );
                                })}
                            </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={dadosProdFoto.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                    {
                        modalMarca && (
                            <div>
                                <EditMarca dados = {editMarca} openModal = {modalMarca} onClose={handleModalClose}/>
                            </div>
                        )
                    }
                </div>
                <div className="quadroCategoria">
                    <Paper  >
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                {columnsCategoria.map((column) => (
                                    <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                    >
                                    {column.label}
                                    </TableCell>
                                ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {dadosCategorias
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((x) => {
                                    return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={x.id}>
                                            <TableCell key={x.id} align="left">{x.id}</TableCell>
                                            <TableCell align="left">{x.nomeCategoria}</TableCell>
                                            <TableCell align="left">{x.descricaoCategoria}</TableCell>
                                            <TableCell align="left">
                                                <IconButton
                                                    color="primary"
                                                    onClick={() => {
                                                        setModalCategoria(true);
                                                        setEditCategoria(x);
                                                    }}
                                                >
                                                    <EditIcon />
                                                </IconButton> 
                                            </TableCell>
                                            <TableCell align="left">
                                                <IconButton
                                                    color="primary"
                                                    onClick={() => deleteCategoria(x.id)}
                                                >
                                                    <DeleteIcon />
                                                </IconButton> 
                                            </TableCell>
                                    </TableRow>
                                    );
                                })}
                            </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={dadosProdFoto.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                    {
                        modalCategoria && (
                            <div>
                                <EditCategoria dados = {editCategoria} openModal = {modalCategoria} onClose={handleModalClose}/>
                            </div>
                        )
                    }
                </div>
                
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default EdicaoProduto