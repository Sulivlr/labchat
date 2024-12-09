import React, {useState} from 'react';
import {MessageMutation} from '../../types';
import {Button, CircularProgress, Grid, TextField} from '@mui/material';
import {useAppSelector} from '../../app/hooks';
import {selectIsCreating} from '../messageSlice';

interface MessageFormProps {
  onSubmit: (mutation: MessageMutation) => void;
}

const MessageForm: React.FC<MessageFormProps> = ({onSubmit}) => {

  const isCreating = useAppSelector(selectIsCreating);


  const [state, setState] = useState<MessageMutation>({
    message: '',
    author: '',
  });

  const formSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(state);
    setState({
      message: '',
      author: '',
    });
  };

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setState((prevState) => {
      return {...prevState, [name]: value};
    });
  };

  return (

    <form autoComplete="off" onSubmit={formSubmit}>
      <Grid container direction="column" spacing={2}>

        <Grid item>
          <TextField
            id="author"
            label="Author"
            value={state.author}
            name="author"
            onChange={inputChange}
            required
            fullWidth
          />
        </Grid>

        <Grid item>
          <TextField
            id="message"
            label="Message"
            value={state.message}
            onChange={inputChange}
            name="message"
            required
            fullWidth
          />
        </Grid>


        <Grid item>
          <Button
            sx={{ mb: 3 }}
            type="submit"
            disabled={isCreating}
            startIcon={isCreating ? <CircularProgress size={24} color="inherit" /> : null}
            color="info"
            variant="contained"
          >
            {isCreating ? 'Loading...' : 'Send'}
          </Button>

        </Grid>
      </Grid>
    </form>
  );
};

export default MessageForm;