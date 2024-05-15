import { Provider } from 'react-redux';
import styles from './App.module.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import store from './context/store';
import { useState } from 'react';
import Modal from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Provider store={store}>
      <div className={styles.mainBody}>
        <Sidebar setShowModal={setShowModal} />
        <Chat />
      </div>
      {showModal && <Modal setShowModal={setShowModal} />}
    </Provider>
  );
}

export default App;
