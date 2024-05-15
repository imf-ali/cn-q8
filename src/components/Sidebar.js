import { useSelector } from "react-redux";
import { contacts, conversations } from "../context/ChatReducer";
import styles from './Sidebar.module.css';
import { CiSearch } from "react-icons/ci";
import { FiPlusCircle } from "react-icons/fi";
import Profile from "./Profile";

const Sidebar = ({ setShowModal }) => {
  const conversationsList = useSelector(conversations);
  console.log(conversationsList);

  return (
    <div className={styles.sidebar}>
      <div className={styles.searchbox}>
        <div className={styles.search}><CiSearch /></div>
        <input type="text" placeholder="Search for conversation" />
      </div>
      <div className={styles.conversationBox}>
        <span>CONVERSATIONS</span>
        <div onClick={() => setShowModal(true)}><FiPlusCircle className={styles.plusIcon} /></div>
      </div>
      <div className={styles.contactList}>
        {conversationsList.map((conversation, index) => <Profile key={index} conversation={conversation} />)}
      </div>
    </div>
  )
};

export default Sidebar;