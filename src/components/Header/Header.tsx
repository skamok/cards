import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";
import {useCallback} from 'react';
import {useStore, useSelector} from 'react-redux';

const Header: React.FC = () => {

  return (
    <header className={styles.header}>
      <div className={classNames(styles.header__user, styles.user)}>
        <img className={styles.user__image} src={''} alt={''} />
        <p className={styles.user__name}>{`${'stas'}`}</p>
      </div>
        <ul className={classNames(styles.header__nav, styles.nav)}>
          <li className={styles.nav__item}>
            <Link className={styles.nav__link} to="/cards">
              Cards
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link className={styles.nav__link} to="/profile">
              Profile
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link className={styles.nav__link} to="/loginForm" >
              Log out
            </Link>
          </li>
        </ul>
    </header>
  );
}

export default Header;
