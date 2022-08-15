import { FriendsListItem } from '../FriendsListItem/FriendsListItem';
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
