import React from 'react';
import PropTypes from 'prop-types';

const tabs = [`Overview`, `Details`, `Reviews`];

const Tabs = ({onTabClick, isActive}) => {
  return <ul className="movie-nav__list">
    {tabs.map((element) => {
      return <li
        key={element}
        onClick={() => onTabClick(element)}
        className={`movie-nav__item ${element === isActive ? `movie-nav__item--active` : ``}`}>
        <a href="#" className="movie-nav__link">{element}</a>
      </li>;
    })}

  </ul>;
};

Tabs.propTypes = {
  onTabClick: PropTypes.func.isRequired,
  isActive: PropTypes.string.isRequired,
};

export default Tabs;
