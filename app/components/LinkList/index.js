/**
*
* LinkList
*
*/

import React from 'react';
import Link from '../Link'
import styles from './styles.css';

function LinkList({ links }) {

  const linkNodes = links.map(l =>(
    <Link
    key={l.id}
    link={l}
    />
  ));
  return (
    <div className={styles.linkList}>
      {linkNodes}
    </div>
  );
}

LinkList.propTypes = {
  links: React.PropTypes.arrayOf(React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
  }))
};


export default LinkList;
