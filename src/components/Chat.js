import { useSelector } from 'react-redux';
import styles from './Chat.module.css';
import { chatIndex, contacts, conversations, selectedContactId } from '../context/ChatReducer';
import TopBar from './TopBar';
import MessageBox from './MessageBox';
import Messages from './Messages';
import { useEffect, useState } from 'react';

const Chat = () => {
  const contactId = useSelector(selectedContactId);
  const contactList = useSelector(contacts);
  const conversationsList = useSelector(conversations);

  const [currChat, setCurrChat] = useState(conversationsList.find(conversation => conversation.contactId === contactId))
  const [currUser, setCurrUser] = useState(contactList.find(contact => contact.id === contactId))

  useEffect(() => {
    setCurrUser(contactList.find(contact => contact.id === contactId));
    setCurrChat(conversationsList.find(conversation => conversation.contactId === contactId));
  }, [contactId, contactList, conversationsList]);

  return (
    <div className={styles.chatBody}>
      <TopBar contact={currUser} />
      <Messages chat={currChat} />
      <MessageBox />
    </div>
  )
}

export default Chat;
