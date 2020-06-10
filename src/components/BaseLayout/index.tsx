import * as React from 'react';
import Header from '../Header';
import './index.less';
import SideBar from '../SideBar';

interface BaseLayoutProps {
  className?: string
}

class BaseLayout extends React.Component<BaseLayoutProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const {className = ''} = this.props;

    return (
      <div className={`base-layout ${className}`}>
        <Header />
        <div className="base-layout-body">
          <div className="base-layout-body-left">
            <SideBar />
          </div>
          <div className="base-layout-body-right">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default BaseLayout;