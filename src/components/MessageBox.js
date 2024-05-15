import styles from './Chat.module.css';
import { IoIosAttach } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, selectedContactId } from '../context/ChatReducer';
import { useState } from 'react';

const MessageBox = () => {
  const contactId = useSelector(selectedContactId);
  const dispatch = useDispatch();

  const [message, setMessage] = useState('');

  const handleClick = () => {
    dispatch(addMessage({ contactId, message }));
    setMessage('');
  };
  return (
    <div className={styles.messageBoxDiv}>
      <div className={styles.messageBoxDivEl}>
        <div className={styles.attchmentIcon}><IoIosAttach /></div>
        <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Type your message here" />
        <div className={styles.downIcon}><FaAngleDown /></div>
        <div className={styles.btnDiv}>
          <button className={styles.sendBtn} onClick={handleClick}>Send</button>
        </div>
      </div>
    </div>
  )
};

export default MessageBox;