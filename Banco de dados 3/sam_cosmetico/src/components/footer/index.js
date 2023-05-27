import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import "./index.css"




export default function Footer() {
  return (
    <div className='footer'>
        <Typography variant="body1">
            Produtos com certificado e direto de revendedoras das marcas
        </Typography>
        <div>
            <Typography variant="body2" >
                {'Copyright © '}
                <Link color="inherit" href="/">
                    Sam´s Cosmetics
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </div>
    </div>
  );
}