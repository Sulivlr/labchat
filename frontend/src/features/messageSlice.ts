import {Message} from '../types';
import {createSlice} from '@reduxjs/toolkit';
import {createMessage, fetchMessages} from './messageThunk';

interface MessageState {
  item: Message[];
  fetching: boolean;
  isCreating: boolean;
}

const initialState: MessageState = {
  item: [],
  fetching: false,
  isCreating: false,
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
      state.isCreating = true;
    }).addCase(createMessage.fulfilled, (state) => {
      state.isCreating = false;
    }).addCase(createMessage.rejected, (state) => {
      state.isCreating = false;
    });
  },
  selectors: {
    selectMessages: (state) => state.item,
    selectFetching: (state) => state.fetching,
    selectIsCreating: (state) => state.isCreating,
  }
});

export const messagesReducer = messagesSlice.reducer;
export const {selectMessages,
  selectFetching,
  selectIsCreating,
} = messagesSlice.selectors;