import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import baseURL from "../../utils";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function CadastroUsuario() {
    const navigate = useNavigate()
    const [nome, setNome] = useState()
    const [sobNome, setSobNome] = useState()
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [cpf_cnpj, setCpf_cnpj] = useState()
    const [nascimento, setNascimento] = useState()
    const [celular, setCelular] = useState()
    const [rua, setRua] = useState()
    const [numero, setNumero] = useState()
    const [cep, setCep] = useState()
    const [cidade, setCidade] = useState()
    const [estado, setEstado] = useState()




    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
        email: data.get('email'),
        password: data.get('password'),
        });
    };

  async function cadastro(){
    const dado = {
        nomeUsuario: `${nome} ${sobNome}`,
		cpf: cpf_cnpj,
		dataNascimento: nascimento,
		celular: celular,
		endereco: `${rua}, ${numero}`,
		cep: cep,
		email: email,
		senha: senha,
        acesso: 'usuario'
    }

    try {
        await fetch(`${baseURL}/usuario/cadastro_usuario`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dado),
        });
        navigate('/')

        setNome('')
        setSobNome('')
        setEmail('')
        setSenha('')
        setCpf_cnpj('')
        setNascimento('')
        setCelular('')
        setRua('')
        setNumero('')
        setCep('')
        setCidade('')
        setEstado('')

        return;
        
      } catch (error) {
        return console.log(error.message);
      }
  }


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
            minHeight:'90vh'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastro de Usuario
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Primeiro Nome"
                  autoFocus
                  value={nome}
                  onChange={(e)=>setNome(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="sobnome"
                  label="Segundo Nome"
                  name="sobnome"
                  autoComplete="family-name"
                  value={sobNome}
                  onChange={(e)=>setSobNome(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={senha}
                  onChange={(e)=>setSenha(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="cpf"
                  label="CPF/CNPJ"
                  type="number"
                  id="cpf"
                  autoComplete="new-cpf"
                  value={cpf_cnpj}
                  onChange={(e)=>setCpf_cnpj(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="nascimento"
                  helperText="Data de Nascimento"
                  type="date"
                  id="nascimento"
                  autoComplete="new-nascimento"
                  value={nascimento}
                  onChange={(e)=>setNascimento(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="celular"
                  label="Celular"
                  type="number"
                  id="celular"
                  autoComplete="new-celular"
                  value={celular}
                  onChange={(e)=>setCelular(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="new-rua"
                  name="Rua"
                  required
                  fullWidth
                  id="rua"
                  label="Rua"
                  autoFocus
                  value={rua}
                  onChange={(e)=>setRua(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="new-number"
                  name="numero"
                  required
                  fullWidth
                  type="number"
                  id="numero"
                  label="Numero"
                  autoFocus
                  value={numero}
                  onChange={(e)=>setNumero(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="new-cidade"
                  name="cidade"
                  required
                  fullWidth
                  id="cidade"
                  label="Cidade"
                  autoFocus
                  value={cidade}
                  onChange={(e)=>setCidade(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="new-estado"
                  name="estado"
                  required
                  fullWidth
                  id="estado"
                  label="Estado"
                  autoFocus
                  value={estado}
                  onChange={(e)=>setEstado(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="new-cep"
                  name="CEP"
                  required
                  fullWidth
                  type="number"
                  id="CEP"
                  label="CEP"
                  autoFocus
                  value={cep}
                  onChange={(e)=>setCep(e.target.value)}
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={cadastro}
            >
              Cadastrar
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/minha_conta" variant="body2">
                  Ja tenho conta? Entrar
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}