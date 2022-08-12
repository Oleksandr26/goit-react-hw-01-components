import PropTypes from 'prop-types';

export function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendsListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

function FriendsListItem({ avatar, name, isOnline }) {
  return (
    <li className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
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
