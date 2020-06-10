import * as React from 'react';
import './index.less';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import BaseLayout from '../../components/BaseLayout';

export interface HomeProps {

}

export interface HomeState {

}

class Home extends React.Component<HomeProps & RouteComponentProps, HomeState> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BaseLayout>
        <div className="home-page">
          <span className="desc">
            Hello Captain! This island is Home of {process.env.NODE_ENV}. My name is {process.env.CAPTAIN_NAME}
          </span>
        </div>
      </BaseLayout>
    );
  }
}

export default withRouter(Home);
