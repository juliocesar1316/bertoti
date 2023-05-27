
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import baseURL from '../../utils';
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Grid from '@mui/material/Grid';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Sam´s Cosmeticos
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function MinhaConta() {
    const [usuario, setUsuario] = useState()
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const navigate = useNavigate()
    const [status,setStatus] = useState()

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
        email: data.get('email'),
        password: data.get('password'),
        });
    };

    async function dadosUsuario() {
        try {
            const response = await fetch(
                `${baseURL}/usuario/lista_usuario`,{
                    method: "GET",
                }
            );
            const data = await response.json();
            
            setUsuario(data);
            return;
        } catch (error) {
            return console.log(error.message); 
        }
    }

    function confereUsuario(e){
        if(e){
            localStorage.setItem('dado', JSON.stringify({email:e.email, senha:e.senha}));
            navigate('/',{ state: { e } })
            setStatus(false)
            return
        }
        else{
            setEmail('')
            setSenha('')
            return setStatus(true)
        }

    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setStatus(false)
    }

    useEffect(()=>{
        dadosUsuario()
    },[])


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight:'85vh'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Entrar
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              value={senha}
              onChange={(e)=> setSenha(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>confereUsuario(usuario.find((x)=> x.email === email && x.senha === senha))}
            >
              Entrar na Conta
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/cadastro_usuario" variant="body2">
                  Não tem conta? Cadastre-se
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" variant="body2">
                  {"Home"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Snackbar open={status} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                Usuario não encontrado
            </Alert>
        </Snackbar>
        
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}