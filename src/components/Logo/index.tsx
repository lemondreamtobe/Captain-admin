import * as React from 'react';
import LogoIcon from '../../global/images/logo2.png';

import './index.less';

export interface LogoProps {
  className?: string
  text: string
  onClick?: () => void
}

export interface LogoState {

}

class Logo extends React.Component<LogoProps, LogoState> {
  constructor(props: LogoProps) {
    super(props);
  }

  render() {
    const {text, className = '', onClick} = this.props;

    return (<div onClick={() => onClick()} className={`common-logo ${className}`}>
      <img className="css-rotate" src={LogoIcon} alt={text} />
      {text}
    </div>);
  }
}

export default Logo;