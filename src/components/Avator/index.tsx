import * as React from 'react';
import './index.less';
import Default from '../../global/images/default22.png';

export interface AvatorProps {
  userName: string
  photo?: string
}

export interface AvatorState {

}

class Avator extends React.Component<AvatorProps, AvatorState> {
  constructor(props: AvatorProps) {
    super(props);
  }
  render() {
    const {photo, userName} = this.props;

    return (<div className="common-avator">
      <img className="avator" src={photo || Default} alt="" />
      <div className="name">{userName}</div>
    </div>);
  }
}

export default Avator;