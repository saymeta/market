import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BackHeader extends Component {
  render() {
    return (
      <div className='join-header'>
        <Link to={this.props.back}>
          <img
            src={require('./../images/icon_back.png').default}
            alt='icon_back'></img>
        </Link>
        <h1>{this.props.data}</h1>
        <div>
          <Link to='/nav/mypage/info'>{this.props.img}</Link>
        </div>
      </div>
    );
  }
}

export default BackHeader;
