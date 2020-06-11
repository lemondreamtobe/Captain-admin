import * as React from 'react';
import './index.less';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {Form, Input, Button, notification} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import { loginMode } from '../../modes/index';
import Logo from '../../components/Logo';
import {routesUrl} from '../../routes/const';

export interface LoginProps {

}

export interface LoginState {

}

class Login extends React.Component<LoginProps & RouteComponentProps, LoginState> {

  constructor(props) {
    super(props);
  }

  onFinish = async (values) => {
    const res = await loginMode.login(values);

    if (res.error_code === 0) {
      this.props.history.push(routesUrl.DEVICE);
    } else {
      notification.error({
        message: '登录失败，请联系管理员'
      });
    }
  }

  render() {
    return (<div className="Login-page">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{remember: true}}
        onFinish={this.onFinish}
      >
        <Form.Item>
          <Logo text="后台管理" className="form-title" />
        </Form.Item>
        <Form.Item
          name="username"
          label="账号"
          rules={[{required: true, message: 'Please input your Username!'}]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          label="密码"
          rules={[{required: true, message: 'Please input your Password!'}]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>);
  }
}

export default withRouter(Login);