import { useDispatch, useSelector } from 'react-redux';
import styles from './Modal.module.css';
import { contacts, startConversation } from '../context/ChatReducer';
import { useState } from 'react';
import imgData from '../data/imgData';

const Modal = ({ setShowModal }) => {
  const contactList = useSelector(contacts);
  const dispatch = useDispatch();
  const [activeId, setActiveId] = useState(0);

  const handleClick = () => {
    dispatch(startConversation({ contactId: activeId }));
    setActiveId(0);
    setShowModal(false);
  };

  return (
    <>
      <div className={styles.backdrop} onClick={() => setShowModal(false)} />
      <div className={styles.modal}>
        <h2>Start Conversation</h2>
        <div className={styles.contactList}>
          {contactList.map((contact, index) => (
            <div key={index} className={`${styles.contactItem} ${activeId == contact.id && styles.activeDiv}`} onClick={() => setActiveId(contact.id)}>
              <div><img src={imgData[contact.pic]} alt={contact.name} /></div>
              <span>{contact.name}</span>
            </div>
          ))}
        </div>
        <div className={styles.btnDiv} onClick={handleClick}><button>Start</button></div>
      </div>
    </>
  )
};

export default Modal;