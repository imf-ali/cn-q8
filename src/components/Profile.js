import { useDispatch, useSelector } from 'react-redux';
import styles from './Sidebar.module.css';
import { changeSelectedId, contacts, selectedContactId } from '../context/ChatReducer';
import { useEffect, useRef } from 'react';
import imgData from '../data/imgData';

const Profile = ({ conversation }) => {
  const contactList = useSelector(contacts);
  const activeId = useSelector(selectedContactId);
  const dispatch = useDispatch();
  const itemRef = useRef();

  const { id, name, pic } = contactList.find(contact => contact.id === conversation.contactId);
  const { messages } = conversation;

  const handleClick = (id) => {
    dispatch(changeSelectedId({ contactId: id }));
  };

  useEffect(() => {
    if(activeId == id){
      itemRef.current.scrollIntoView({
        behavior:'smooth',
        block:'nearest',
        inline:'nearest'
      });
    }
  }, [activeId])

  return (
    <div ref={itemRef} className={`${styles.profile} ${activeId === id && styles.activeProfile}`} onClick={() => handleClick(id)}>
      <div className={styles.imageDiv}>
        <img src={imgData[pic]} alt={name} />
      </div>
      <div className={styles.messageDiv}>
        <div className={styles.name}>{name}</div>
        <span className={styles.firstMessage}>{messages.length ? messages[messages.length - 1].text : ''}</span>
      </div>
      <div className={styles.timeDiv}>
        <div className={styles.time}>10:00</div>  
      </div>
    </div>
  )
};

export default Profile;