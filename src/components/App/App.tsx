import styles from './App.module.scss';
import Header from '../../components/Header';
import Main from '../Main';
import Footer from '../Footer';
import {useHistory } from "react-router-dom";
import {useEffect} from 'react';
import {useSelector} from 'react-redux';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App;
