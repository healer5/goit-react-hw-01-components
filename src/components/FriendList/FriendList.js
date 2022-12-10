import PropTypes from 'prop-types';
import {
  FriendListCard,
  FriendListItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListCard>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem key={id}>
          <FriendStatus isOnline={isOnline}></FriendStatus>
          <FriendAvatar src={avatar} alt={name} />
          <FriendName>{name}</FriendName>
        </FriendListItem>
      ))}
    </FriendListCard>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
