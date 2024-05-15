import { createSlice } from "@reduxjs/toolkit";
import chatData from '../data/chatdata.json';

const chat = createSlice({
  name: "chat",
  initialState: {
    contacts: (localStorage.getItem('contacts') && JSON.parse(localStorage.getItem('contacts'))) || chatData.contacts,
    conversations: (localStorage.getItem('conversations') && JSON.parse(localStorage.getItem('conversations'))) || chatData.conversations,
    selectedContactId: 1
  },
  reducers: {
    addMessage: (state, action) => {
      const { contactId, message } = action.payload;
      const index = state.conversations.findIndex((c) => c.contactId === contactId);
      state.conversations[index].messages.push({ sender: 'User', text: message, timestamp: new Date().toISOString() });
      localStorage.setItem('conversations', JSON.stringify(state.conversations));
    },
    changeSelectedId: (state, action) => {
      const { contactId } = action.payload;
      state.selectedContactId = contactId;
    },
    startConversation: (state, action) => {
      const { contactId } = action.payload;
      const index = state.conversations.findIndex((c) => c.contactId === contactId);
      if (index !== -1) {
        state.selectedContactId = contactId;
        return;
      }
      state.conversations.push({ contactId, messages: [] });
      state.selectedContactId = contactId;
    },
  },
});

const chatReducer = chat.reducer;

export const { addMessage, changeSelectedId, startConversation } = chat.actions;
export const contacts = (state) => state.chatReducer.contacts;
export const conversations = (state) => state.chatReducer.conversations;
export const selectedContactId = (state) => state.chatReducer.selectedContactId;

export default chatReducer;