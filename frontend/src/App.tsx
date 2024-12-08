import {Container} from '@mui/material';
import ChatBar from './UI/AppToolbar/AppToolbar';
import NewMessage from './features/NewMessage';
import Messages from './features/Messages';

const App = () => {
  return (
    <>
      <header>
          <ChatBar />
      </header>
      <main>
        <Container>
          <NewMessage />
          <Messages/>
        </Container>
      </main>
    </>
  );
};

export default App
