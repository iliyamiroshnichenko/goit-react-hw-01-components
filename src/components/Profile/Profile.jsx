import PropTypes from 'prop-types';
import styles from './Profile.module.css';
import defaultImage from './default.jpg';

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img className={styles.avatar} src={avatar} alt="Аватар пользователя" />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p>{location}</p>
    </div>
    <ul className={styles.stats}>
      <li className={styles.item}>
        <span className="label">Followers</span>
        <span className={styles.quantity}>{stats.followers}</span>
      </li>
      <li className={styles.item}>
        <span className="label">Views</span>
        <span className={styles.quantity}>{stats.views}</span>
      </li>
      <li className={styles.item}>
        <span className="label">Likes</span>
        <span className={styles.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar: defaultImage,
  stats: { followers: 0, views: 0, likes: 0 },
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
