import React from 'react';
import PropTypes from 'prop-types';

function LanguagesList({ languages }) {
  return (
    <ul className="languages-list">
      {
        Object.keys(languages).map((lang, index) => (
          <li key={ `${index + 1}ª Lang`}>{ lang }</li>
        ))
      }
    </ul>
  );
}

LanguagesList.propTypes = {
  languages: PropTypes.objectOf(PropTypes.number),
};

export default LanguagesList;
