import React, { Component, useState } from 'react';

import BlueBtn from '../BtnSrc.js';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

export class Loading extends Component {
  componentDidMount() {
    setTimeout(() => {
      document.location.href = '/login';
    }, 1000);
  }

  render() {
    return (
      <div className='loadingPage AppIn'>
        {/* <Link to='/login'> */}
        <img src={require('./../images/logo.png').default} alt='logo'></img>
        {/* </Link> */}
      </div>
    );
  }
}

function LoginForm({ state, getData }) {
  function handleChange(e) {
    const iconDel = e.target.nextSibling;

    const id = document.getElementsByName('id')[0].value;
    const pw = document.getElementsByName('pw')[0].value;
    getData({
      id: id,
      pw: pw,
    });

    if (e.target.value !== '') {
      e.target.style.borderBottom = '1px solid #55C4F1';
      iconDel.style.display = 'block';
    } else {
      e.target.style.borderBottom = '1px solid #dadada';
      iconDel.style.display = 'none';
    }
  }

  function del(e) {
    const effectDel = e.target.previousSibling;
    effectDel.value = null;
    effectDel.style.borderBottom = '1px solid #dadada';
    e.target.style.display = 'none';
  }

  return (
    <form
    // onSubmit={function (event) {
    // event.preventDefault();
    // console.log(event.target.id, event.target.pw);
    // }}
    >
      <div className='login-form'>
        <h2>아이디</h2>
        <input
          type='text'
          placeholder='아이디 입력'
          value={state.name}
          onChange={handleChange}
          name='id'></input>
        <img
          src={require('./../images/icon_del.png').default}
          alt='icon_del'
          onClick={del}></img>
      </div>
      <div className='login-form'>
        <h2>비밀번호</h2>
        <input
          type='password'
          placeholder='비밀번호 입력'
          value={state.name}
          onChange={handleChange}
          name='pw'></input>
        <img
          src={require('./../images/icon_del.png').default}
          alt='icon_del'
          onClick={del}></img>
      </div>
    </form>
  );
}

class SNS extends Component {
  render() {
    return (
      <li className='sns'>
        <img
          src={require('./../images/sns_' + this.props.data + '.png').default}
          alt='sns img'></img>
      </li>
    );
  }
}

export class CheckBox extends Component {
  render() {
    return (
      <div className='left'>
        <input type='checkbox' name='checker' id={this.props.id} />
        <label htmlFor={this.props.id}>{this.props.data}</label>
      </div>
    );
  }
}

function Login() {
  const [state, setState] = useState({ id: '', pw: '' });
  const history = useHistory();

  const getData = (data) => {
    setState(data);
  };
  console.log(state);

  function changeBgColor() {
    return state.id.length >= 4 && state.pw.length >= 8 ? 'blue' : '';
  }

  function pageHome() {
    const className = document.querySelector('.blue');
    if (className === null) {
      return;
    } else if (className.childNodes) {
      history.push('/nav/home');
    }
  }

  return (
    <>
      <div className='loginPage AppIn'>
        <img src={require('./../images/logo.png').default} alt='logo'></img>
        <LoginForm state={state} getData={getData}></LoginForm>

        {/* 로그인 API 버튼 */}
        <div
          className={changeBgColor()}
          onClick={() => {
            pageHome();
          }}>
          <BlueBtn data={'로그인'}></BlueBtn>
        </div>

        <CheckBox data={'로그인 상태 유지'} id={'login'}></CheckBox>
        <ul className='login-help'>
          <li>
            <Link to='/find/id'>아이디찾기</Link>
          </li>
          <li>
            <Link to='/find/pw'>비밀번호찾기</Link>
          </li>
          <li>
            <Link to='/join'>회원가입</Link>
          </li>
        </ul>
        <div className='line'>
          OR<span>OR</span>
        </div>
        <h2 className='sns-text'>SNS 계정으로 로그인</h2>
        <ul className='sns-wrap'>
          <SNS data={'kakao'}></SNS>
          <SNS data={'google'}></SNS>
          <SNS data={'naver'}></SNS>
          <SNS data={'apple'}></SNS>
        </ul>
      </div>
    </>
  );
}

export default Login;
