import './App.css';
import './reset.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollTop from './ScrollTop';

import Login, { Loading } from './pages/Login.js';
import NavHome from './pages/NavHome';
import Join from './pages/Join.js';
import FindPw, { FindId, NewPw } from './pages/FindPw.js';
import NavHeart from './pages/NavHeart.js';
import NavMatch from './pages/NavMatch.js';
import MatchOneStop from './pages/MatchOneStop';
import NavMyPage from './pages/NavMyPage.js';
import HomeAlert from './pages/HomeAlert.js';
import HomeSearch from './pages/HomeSearch';
import HomeWrite from './pages/HomeWrite';
import Writing from './pages/Writing';
import MyPageWritten from './pages/MyPageWritten';
import MyPageNotice, { NoticeEach } from './pages/MyPageNotice';
import MyPageQnA from './pages/MyPageQnA';
import MyPageInfo from './pages/MyPageInfo';

function App() {
  // login(){
  //   setTimeout(()=>{
  //     this.props.navigation.replace('./pages/Login.js')
  //   },1000)
  // }
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className='App'>
        <ScrollTop>
          <Switch>
            <Route exact path='/'>
              <Loading></Loading>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/nav/home'>
              <NavHome></NavHome>
            </Route>
            <Route exact path='/join'>
              <Join></Join>
            </Route>
            <Route exact path='/find/id'>
              <FindId></FindId>
            </Route>
            <Route exact path='/find/pw'>
              <FindPw></FindPw>
            </Route>
            <Route exact path='/find/pw/new'>
              <NewPw></NewPw>
            </Route>
            <Route exact path='/nav/heart'>
              <NavHeart></NavHeart>
            </Route>
            <Route exact path='/nav/match'>
              <NavMatch></NavMatch>
            </Route>
            <Route exact path='/nav/match/info'>
              <MatchOneStop></MatchOneStop>
            </Route>
            <Route exact path='/nav/mypage'>
              <NavMyPage></NavMyPage>
            </Route>
            <Route exact path='/nav/home/search'>
              <HomeSearch></HomeSearch>
            </Route>
            <Route exact path='/nav/home/alert'>
              <HomeAlert></HomeAlert>
            </Route>
            <Route exact path='/nav/home/write'>
              <HomeWrite></HomeWrite>
            </Route>
            <Route exact path='/nav/home/writing'>
              <Writing></Writing>
            </Route>
            <Route exact path='/nav/mypage/written'>
              <MyPageWritten></MyPageWritten>
            </Route>
            <Route exact path='/nav/mypage/notice'>
              <MyPageNotice></MyPageNotice>
            </Route>
            <Route exact path='/nav/mypage/notice/each'>
              <NoticeEach></NoticeEach>
            </Route>
            <Route exact path='/nav/mypage/qna'>
              <MyPageQnA></MyPageQnA>
            </Route>
            <Route exact path='/nav/mypage/info'>
              <MyPageInfo></MyPageInfo>
            </Route>
          </Switch>
        </ScrollTop>
      </div>
    </BrowserRouter>
  );
}

export default App;
