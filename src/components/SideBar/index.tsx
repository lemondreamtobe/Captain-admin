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

const MENULIST = [
  {
    name: '系统管理',
    icon: AppstoreOutlined
  },
  {
    name: '设备管理',
    icon: DatabaseOutlined
  },
  {
    name: '人员管理',
    icon: ApartmentOutlined
  },
  {
    name: '日志管理',
    icon: CommentOutlined
  },
];

class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="left-side-bar">
        <Avator userName="Lemon" />
        <Menu
          defaultSelectedKeys={['1']}
          mode="inline"
        >
          {
            MENULIST.map((li, index) => {
              const Icon = li.icon;
              const name = li.name;
              return <Menu.Item key={index} icon={<Icon />}>
                {name}
              </Menu.Item>
            })
          }
        </Menu>
      </div>
    );
  }
}

export default SideBar;