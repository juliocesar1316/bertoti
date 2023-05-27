import "./index.css"
import Header from "../../components/header";
import Menu from "../../components/menu";
import SubMenu from "../../components/subMenu";
import ProdutoHome from "../../components/produtosHome";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Footer from "../../components/footer";

function Home(){

    const steps = [
        'Escolha seu Produto',
        'Coloque no Carrinho',
        'Dados da Entrega',
        'Pedido Realizado',
      ];

    return(
        <div className="containerHome">
            <div>
                <Header/>
            </div>
            <div>
                <Menu/>
            </div>
            <div>
                <SubMenu/>
            </div>
            <div className="homeBody">
                <div className="body"/>
                <div>
                    <Box sx={{ width: '100%', marginTop: '50px' }}>
                        <Stepper alternativeLabel>
                            {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                            ))}
                        </Stepper>
                    </Box>
                </div>
                <div className="titleHome">
                    <Typography variant="h5" > Produtos Top de Linha</Typography>
                </div>
                
                <ProdutoHome/>
            </div>
               <Footer/>                 
        </div>
    );
}

export default Home;