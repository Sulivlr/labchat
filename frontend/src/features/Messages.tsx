import {Grid, Typography} from '@mui/material';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {selectFetching, selectMessages} from './messageSlice';
import {useEffect} from 'react';
import {fetchMessages} from './messageThunk';
import ChatMessage from '../features/components/ChatMessage';
import Spinner from './components/Spinners/Spinner';


const Messages = () => {

  const dispatch = useAppDispatch();
  const messages = useAppSelector(selectMessages);
  const isFetching = useAppSelector(selectFetching);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);


  return isFetching ?  (
    <Spinner /> ) : (
    <Grid container direction="column" gap={2}>
      <Grid item>
        <Grid item>
          <Typography variant="h5">Messages</Typography>
        </Grid>
      </Grid>
      <Grid item container gap={2}>
        {messages.map(message => (
          <ChatMessage key={message.id} author={message.author} message={message.message}/>
        ))}
      </Grid>
    </Grid>
  );
};

export default Messages;