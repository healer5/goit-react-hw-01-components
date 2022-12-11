import PropTypes from 'prop-types';

import {
  StatisticsCard,
  StatisticsCardList,
  StatisticsCardItem,
  StatisticsCardLabel,
  StatisticsTitle,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsCard>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}

      <StatisticsCardList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsCardItem key={id}>
            <StatisticsCardLabel>{label}</StatisticsCardLabel>
            <span class="percentage">{percentage}</span>
          </StatisticsCardItem>
        ))}
      </StatisticsCardList>
    </StatisticsCard>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
