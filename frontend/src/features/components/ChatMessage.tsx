import React from 'react';
import {Card, CardContent, CardHeader, Grid, Typography} from '@mui/material';
import dayjs from 'dayjs';

interface Props {
  author: string;
  message: string;
  datetime: string;
}

const ChatMessage: React.FC<Props> = ({author, message,datetime}) => {
  return (
    <Grid item lg={12}>
      <Card>
        <CardHeader title={`Author: ${author}`}></CardHeader>
        <CardContent>
          <Typography variant="body2">Message: {message}</Typography>
          <Typography variant="body2" color="secondary">
            Date: {dayjs(datetime).format('YYYY-MM-DD HH:mm')}
          </Typography>

        </CardContent>
      </Card>
    </Grid>
  );
};

export default ChatMessage;