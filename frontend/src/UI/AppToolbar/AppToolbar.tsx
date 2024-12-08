import {AppBar, styled, Toolbar, Typography} from '@mui/material';
import {Link} from 'react-router-dom';

const StyledLink = styled(Link)({
  color: 'inherit',
  textDecoration: 'none',
  '&hover': {
    color: 'inherit',
  }
});



const ChatBar = () => {
  return (
    <AppBar color="default" position="sticky" sx={{mb: 2}} >
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Typography variant="h6" component="div">
          <StyledLink to="/">Chat</StyledLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default ChatBar;