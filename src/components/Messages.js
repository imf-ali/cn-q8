import styles from './Chat.module.css';

const Messages = ({ chat }) => {
  return (
    <div className={styles.messagesDiv}>
      {chat.messages.map((message, index) => {
        return (
          <div key={index} className={styles.messageItem}>
            <div className={message.sender == 'User' ? styles.myMessage : styles.senderMessage}>
              <div>{message.text}</div>
              <div className={styles.timestamp}>{new Date(message.timestamp).getHours()}:{new Date(message.timestamp).getMinutes()}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
};

export default Messages;