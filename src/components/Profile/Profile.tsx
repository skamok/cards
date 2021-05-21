import React from 'react';
import styles from './Profile.module.scss';
import {useAppSelector} from '../../redux/hooks/hooks';

function Profile() {
  const user = useAppSelector((state) => state.user);
  return (
    <div className={styles.profile}>
      <img className={styles.profile__avatar} src={user.image} alt={user.alt} />
      <p className={styles.profile__name}>{`${user.firstName} ${user.lastName}`}</p>
      <p className={styles.profile__description}>{user.description}</p>
    </div>
  )
};

export default Profile
