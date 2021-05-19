import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

interface IFriendsData {
  avatar: string;
  name: string;
  isOnline: boolean;
  id: number;
}

interface IFriends {
  friends: IFriendsData[];
}

const FriendList = ({ friends }: IFriends) => (
  <ul className={styles.list}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
