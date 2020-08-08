import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../../tabs/tabs.jsx';
import Details from '../details/details.jsx';
import Reviews from '../reviews/reviews.jsx';
import Overview from '../overview/overview.jsx';
import withActiveTab from '../../../hocs/withActiveTab.jsx';
import {connect} from 'react-redux';
import {getComments} from '../../../reducer/data/selectors';

export const MovieTabs = ({movie, isActive, onTabClick, comments}) => {
  const getComponentByFilter = (filter) => {
    switch (filter) {
      case `Details`:
        return <Details filmContent={movie} />;
      case `Reviews`:
        return <Reviews reviews={comments} />;
      default:
        return <Overview filmContent={movie} />;
    }
  };

  return <div className="movie-card__desc">
    <nav className="movie-nav movie-card__nav">
      <Tabs onTabClick={onTabClick} isActive={isActive}/>
    </nav>
    {getComponentByFilter(isActive)}
  </div>;
};

const mapStateToProps = (state) => ({
  comments: getComments(state),
});

MovieTabs.propTypes = {
  movie: PropTypes.object.isRequired,
  isActive: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
  comments: PropTypes.array,
};

export default connect(mapStateToProps)(withActiveTab(MovieTabs));
