import React, { Component } from 'react';
import Page from '../pages/Page';
import AboutContainer from '../containers/About';
import {connect} from 'react-redux';

class About extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'About Page';
  };

  pageMeta = () => {
    return [
      { name: 'description', content: 'A reactGo example of life' }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        <AboutContainer {...this.props} />
      </Page>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        userList : state.userList
    }
};

export default connect(mapStateToProps)(About);
