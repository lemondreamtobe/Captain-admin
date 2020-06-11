import * as React from 'react';
import './index.less';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import BaseLayout from '../../components/BaseLayout';
import SystemManage from '../SystemManage';
import DeviceManage from '../DeviceManage';
import UserManage from '../UserManage';
import DiaryManage from '../DiaryManage';
import {Route, Switch} from 'react-router-dom';
import {routesUrl} from '../../routes/const';

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
          <Switch>
            <Route exact path={routesUrl.SYSTEM} component={SystemManage} />
            <Route exact path={routesUrl.DEVICE} component={DeviceManage} />
            <Route exact path={routesUrl.USER} component={UserManage} />
            <Route exact path={routesUrl.DIARY} component={DiaryManage} />
          </Switch>
        </div>
      </BaseLayout>
    );
  }
}

export default withRouter(Home);
