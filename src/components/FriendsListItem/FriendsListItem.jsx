import s from './FriendsListItem.module.css';

export function FriendsListItem({ avatar, name, isOnline }) {
  return (
    <li className={s.friendsItem}>
      <span className={isOnline ? s.true : s.false}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
