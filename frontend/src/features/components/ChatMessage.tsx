import React from 'react';
import {Card, CardContent, CardHeader, Grid, Typography} from '@mui/material';

interface Props {
  author: string;
  message: string;
}

const ChatMessage: React.FC<Props> = ({author, message}) => {
  return (
    <Grid item lg={12}>
      <Card>
        <CardHeader title={`Author: ${author}`}></CardHeader>
        <CardContent>
          <Typography variant="body2">Message: {message}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ChatMessage;