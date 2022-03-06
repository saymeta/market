import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";

const bellNew = true; // 알림이 있을 때
// const bellNew = false; // 알림이 없을 때

function MiniModal({closeModal}){
    return(
        <OutsideClickHandler onOutsideClick={()=>{closeModal(false)}}>
            <div className="mini-modal">
                <p>게시글 수정</p>
                <p>삭제</p>
            </div>
        </OutsideClickHandler>
    )
}
 
export function HomeList({user}){
    const [modal, setModal] = useState(false)

    return(
        <div className="home-list">
            <img src={require('./../images/list' + user.id +'.png').default} alt="list img"></img>
            <div className="list-text">
                <div className="list-title">
                    <h2>{user.name}</h2>
                    <div onClick={()=>{setModal(true)}}>{user.edit}</div>
                </div>
                <p className="list-address">{user.address} | 남은 기간 약 {user.months}개월</p>
                <span>양도제안</span>
                <div className="list-bottom">
                    <p>월 {user.price}원</p>
                    <div className="icon-wrap">
                        <div>
                            <img src="/img/list_likes.png" alt="list_likes"></img>
                            <p>{user.likes}</p>
                        </div>
                        <div>
                            <img src="/img/list_comment.png" alt="list_comment"></img>
                            <p>{user.comment}</p>
                        </div>
                    </div>
                </div>
            </div>

            {
                modal && <MiniModal closeModal={setModal}></MiniModal>
            }
        </div>
    )
}

export function Nav({nav}){
    return(
        <Link to={nav.link}>
            <div className="nav">
                <img src={require('./../images/nav_' + nav.img +'.png').default} alt='nav icon'></img>
                <h2>{nav.name}</h2>
            </div>
        </Link>
    )
}

export class SearchBox extends Component{
    render(){
        return(
            <div className="search-box">
                <input type="search" placeholder={this.props.holder}></input>
            </div>
        )
    }
}

function Home(){
    const listData = [
        {
            id: 1,
            name: '[삼성] 에어드레서 양도합니다.',
            address: '동구 수정제2동',
            months: 26,
            price: '84,500',
            likes: 12,
            comment: 12,
        },
        {
            id: 2,
            name: '[LG] 에어드레서 양도받으실분~',
            address: '연제구 거제제3동',
            months: 5,
            price: '55,100',
            likes: 21,
            comment: 19,
        },
        {
            id: 3,
            name: '[파나소닉] 에어드레서 팝니다!',
            address: '남구 남포제1동',
            months: 4,
            price: '99,400',
            likes: 18,
            comment: 41,
        },
        {
            id: 4,
            name: '[다이슨] 에어드레서 좋아요',
            address: '해운대구 반여제2동',
            months: 1,
            price: '35,800',
            likes: 11,
            comment: 15,
        }
    ]
    const nav = [
        {
            id:1,
            link:'home',
            img:'home_on',
            name:'홈',
        },
        {
            id:2,
            link:'heart',
            img:'heart',
            name:'찜'
        },
        {
            id:3,
            img:'match',
            link:'match',
            name:'매칭현황'
        },
        {
            id:4,
            img:'mypage',
            link:'mypage',
            name:'마이캔탈'
        }
    ]
    return(
        <div className="homePage">
            <div className="home-header">
                <Link to='/nav/home'><img src="/img/logo_img.png" className="logo-mini" alt="logo_mini"></img></Link>
                <Link to='/nav/home/search'><SearchBox holder={"관심있는 제품을 검색하세요!"} /></Link>
                <Link to='/nav/home/alert'>
                    {
                        bellNew
                        ?
                        <img src="/img/icon_bell_on.png" className="icon-bell" alt="icon_bell"></img>
                        :
                        <img src="/img/icon_bell.png" className="icon-bell" alt="icon_bell"></img>
                    }
                </Link>
            </div>
            <div className="AppIn">
            {listData.map(data => (
                <HomeList user={data} key={data.id}/>
            ))}
            </div>
            <nav>
                <Link to='/nav/home/write'><div className="float"><img src={require('./../images/icon_write.png').default} alt="icon_write"></img></div></Link>
                <div className="nav-wrap">
                    {nav.map(data => (
                        <Nav nav={data} key={data.id} />
                    ))}
                </div>
            </nav>
        </div>
    )
}

export default Home;