import PropTypes from 'prop-types';
import { BsPinMapFill } from 'react-icons/bs';

import {
  ProfileCard,
  ProfileImage,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  ProfileStats,
  ProfileStatsList,
  ProfileStatsListName,
  ProfileStatsQuantity,
} from './Profile.styled';

export const Profile = ({
  user: { username, tag, location, avatar, stats, followers, views, likes },
}) => {
  return (
    <ProfileCard>
      <div class="description">
        <ProfileImage src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>{tag}</ProfileTag>
        <ProfileLocation>
          <BsPinMapFill />
          <span>{location}</span>
        </ProfileLocation>
      </div>

      <ProfileStats>
        <ProfileStatsList>
          <ProfileStatsListName>Followers</ProfileStatsListName>
          <ProfileStatsQuantity>{stats.followers}</ProfileStatsQuantity>
        </ProfileStatsList>
        <ProfileStatsList>
          <ProfileStatsListName>Views</ProfileStatsListName>
          <ProfileStatsQuantity>{stats.views}</ProfileStatsQuantity>
        </ProfileStatsList>
        <ProfileStatsList>
          <ProfileStatsListName>Likes</ProfileStatsListName>
          <ProfileStatsQuantity>{stats.likes}</ProfileStatsQuantity>
        </ProfileStatsList>
      </ProfileStats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  users: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: {
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }.isRequired,
  }),
};
