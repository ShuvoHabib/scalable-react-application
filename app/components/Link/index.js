/**
*
* Link
*
*/

import React from 'react';


import styles from './styles.css';

function Link({ link }) {
  return (
    <div className={styles.link}>
      {link.url}
    </div>
  );
}

Link.propTypes = {
  link: React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired
  })
};

export default Link;
