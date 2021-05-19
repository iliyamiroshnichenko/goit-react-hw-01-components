import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

interface IFriendsData {
  avatar: string;
  name: string;
  isOnline: boolean;
}

const FriendListItem = ({ avatar, name, isOnline }: IFriendsData) => (
  <li className={styles.item}>
    <span className={isOnline ? styles.online : styles.offline}></span>
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className="name">{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
