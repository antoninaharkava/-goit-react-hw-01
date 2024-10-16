import css from './FriendsList.module.css';
import FriendsListItem from '../FriendsListItem/FriendsListItem.jsx'; 

 const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendslist}>
      {friends.map(friend => (
        <li className ={css.friendsItem} key={friend.id}>
          <FriendsListItem {...friend} />
        </li>
      ))}
    </ul>
  );
};
export default FriendsList