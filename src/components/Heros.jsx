import React from 'react';
import PropTypes from 'prop-types';

const Humans = ({ race }) => (
  <>
    <div className="hero">
      <button type="button" className="hero__btn">add hero</button>
      <hr className="hero__line" />
      <ul className="hero__list">
        {race.map(hero => (
          <li className="hero__item" key={hero.id}>
            <h4 className="hero__name">{hero.name}</h4>
            <p className="hero__name">{hero.race}</p>
            <button
              type="button"
              className="hero__delete"
            >
              Delete Hero
            </button>
          </li>
        ))}
      </ul>
    </div>
  </>
);

Humans.propTypes = {
  race: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    race: PropTypes.string.isRequired,
  })).isRequired,
};

export default Humans;
