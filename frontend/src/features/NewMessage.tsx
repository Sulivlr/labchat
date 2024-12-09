import {useAppDispatch} from '../app/hooks';
import {MessageMutation} from '../types';
import {createMessage, fetchMessages} from './messageThunk';
import {Typography} from '@mui/material';
import MessageForm from './components/MessageForm';

const NewMessage = () => {
  const dispatch = useAppDispatch();

  const onFormSubmit = async (msgMutation: MessageMutation) => {
    await dispatch(createMessage(msgMutation));
    await dispatch(fetchMessages());
  };

  return (
    <>
      <Typography sx={{mt: 2, mb: 2}}  variant="h5">New Message</Typography>
      <MessageForm onSubmit={onFormSubmit} />
    </>
  );
};

export default NewMessage;