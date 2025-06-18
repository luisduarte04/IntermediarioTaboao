import { Stack, Typography } from "@mui/material";
import { flex } from "@mui/system";
import {Link} from 'react-router-dom'

const Footer = (): JSX.Element => (
  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: "24px 16px 0px", mt: "auto" }}>
    <Stack display={flex} marginLeft={20}><Typography variant="caption">&copy; Todos os direitos reservados</Typography></Stack>
    
    <Stack spacing={1.5} direction="row" justifyContent="space-between" alignItems="center">
      <Link component={Link} to="https://ossbrasil.com.br/" target="_blank" variant="caption" color="textPrimary">
        Sobre nós
      </Link>
      <Link component={Link} to="https://ossbrasil.com.br/" target="_blank" variant="caption" color="textPrimary">
        Privacidade
      </Link>
      <Link component={Link} to="https://ossbrasil.com.br/" target="_blank" variant="caption" color="textPrimary">
        Termos
      </Link>
    </Stack>
  </Stack>
);

export default Footer;
