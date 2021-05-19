import styles from './App.module.scss';
import Header from '../../components/Header';
import Main from '../Main';
import Footer from '../Footer';
import {useHistory } from "react-router-dom";
import {useEffect} from 'react';
import {useAppSelector} from '../../redux/hooks/hooks';

const App: React.FC = () => {
  const user = useAppSelector((state) => state.user);
  const history = useHistory();
  
  useEffect(() => {
    if (user.logged) {
      history.push('/cards');
    }
  }, [user, history]);
  
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App;
