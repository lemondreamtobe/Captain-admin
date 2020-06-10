import * as React from 'react';
import Logo from '../Logo';
import ExitLogo from '../../global/images/exit.png';
import './index.less';
import {RouteComponentProps, withRouter} from 'react-router-dom';

class Header extends React.Component<RouteComponentProps> {
  constructor(props) {
    super(props);
  }

  clickExit = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="layout-header">
        <Logo onClick={this.clickExit} text="后台管理" className="logo" />
        <div className="exit" onClick={this.clickExit}>
          <img className="icon" src={ExitLogo} alt="退出" />
            退出
        </div>
      </div>
    );
  }
}

export default withRouter(Header);