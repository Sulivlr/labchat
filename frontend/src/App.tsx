import {Container} from '@mui/material';
import ChatBar from './UI/AppToolbar/AppToolbar';

const App = () => {
  return (
    <>
      <header>
          <ChatBar />
      </header>
      <main>
        <Container>
          content
        </Container>
      </main>
    </>
  );
};

export default App
