import {Message} from '../types';
import {createSlice} from '@reduxjs/toolkit';
import {createMessage, fetchMessages} from './messageThunk';

interface MessageState {
  item: Message[];
  fetching: boolean;
  createLoading: boolean;
}

const initialState: MessageState = {
  item: [],
  fetching: false,
  createLoading: false,
};


export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.pending, (state) => {
      state.fetching = true;
    }).addCase(fetchMessages.fulfilled, (state, {payload: messages}) => {
      state.fetching = false;
      state.item = messages;
    }).addCase(fetchMessages.rejected, (state) => {
      state.fetching = false;
    });

    builder.addCase(createMessage.pending, (state) => {
      state.createLoading = true;
    }).addCase(createMessage.fulfilled, (state) => {
      state.createLoading = false;
    }).addCase(createMessage.rejected, (state) => {
      state.createLoading = false;
    });
  },
  selectors: {
    selectMessages: (state) => state.item,
    selectFetching: (state) => state.fetching,
  }
});

export const messagesReducer = messagesSlice.reducer;
export const {selectMessages,
  selectFetching
} = messagesSlice.selectors;