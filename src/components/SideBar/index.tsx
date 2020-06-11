import * as React from 'react';
import './index.less';
import {Menu} from 'antd';
import {
  AppstoreOutlined,
  DatabaseOutlined,
  ApartmentOutlined,
  CommentOutlined,
} from '@ant-design/icons';
import Avator from '../Avator';
import {routesUrl} from '../../routes/const';
import {RouteComponentProps, withRouter} from 'react-router-dom';

const MENULIST = [
  {
    name: '系统管理',
    icon: AppstoreOutlined,
    path: routesUrl.SYSTEM
  },
  {
    name: '设备管理',
    icon: DatabaseOutlined,
    path: routesUrl.DEVICE
  },
  {
    name: '人员管理',
    icon: ApartmentOutlined,
    path: routesUrl.USER
  },
  {
    name: '日志管理',
    icon: CommentOutlined,
    path: routesUrl.DIARY
  },
];

class SideBar extends React.Component<RouteComponentProps> {
  constructor(props) {
    super(props);
  }

  getSelectedMenuKeys = () => {
    const pathname = this.props.location.pathname;
    return pathname ? [pathname] : [];
  }

  clickMenu = ({key}) => {
    this.props.history.push(key);
  }

  render() {
    const selectedKeys = this.getSelectedMenuKeys();

    return (
      <div className="left-side-bar">
        <Avator userName="Lemon" />
        <Menu
          selectedKeys={selectedKeys}
          defaultSelectedKeys={selectedKeys}
          mode="inline"
          onClick={this.clickMenu}
        >
          {
            MENULIST.map((li) => {
              const Icon = li.icon;
              const name = li.name;
              const path = li.path;
              return <Menu.Item key={path} icon={<Icon />}>
                {name}
              </Menu.Item>
            })
          }
        </Menu>
      </div>
    );
  }
}

export default withRouter(SideBar);