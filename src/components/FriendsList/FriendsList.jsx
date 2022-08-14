import PropTypes from 'prop-types';
import s from './FriendsList.module.css';

export function FriendList({ friends }) {
  return (
    <section className={s.container}>
      <ul className={s.friendList}>
        {friends.map(friend => (
          <FriendsListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </section>
  );
}

function FriendsListItem({ avatar, name, isOnline }) {
  return (
    <li className={s.friendsItem}>
      <span className={isOnline ? s.true : s.false}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendsListItem.prototype = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};
