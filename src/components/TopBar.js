import styles from './Chat.module.css';
import { FaCirclePlus } from "react-icons/fa6";
import imgData from '../data/imgData';

const TopBar = ({ contact }) => {
  return (
    <div className={styles.topBar}>
      <div className={styles.topBarImageDiv}>
        <img src={imgData[contact.pic]} alt={contact.name} />
      </div>
      <div className={styles.topBarName}>{contact.name}</div>
      <div className={styles.circleIcon}><FaCirclePlus /></div>
    </div>
  )
};

export default TopBar;