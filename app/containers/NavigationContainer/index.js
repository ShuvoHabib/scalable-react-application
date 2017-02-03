/*
 *
 * NavigationContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectNavigationContainer from './selectors';
import Navigation from './../../components/Navigation';
import { requestTopics, selectTopic } from './actions';

export class NavigationContainer extends React.Component {
  static propTypes = {
    requestTopics: React.PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.requestTopics();
    this.props.selectTopic();
  }

  render() {
    return (
      <Navigation {...this.props} />
    );
  }
}

const mapStateToProps = selectNavigationContainer();

function mapDispatchToProps(dispatch) {
  return {
    selectTopic: (topic) => dispatch(selectTopic(topic)),
    requestTopics: () => dispatch(requestTopics()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);