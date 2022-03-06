import React, {Component, useState} from "react";
import { Link } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";

import { Nav } from "./NavHome";
import BackHeader from './BackHeader';

class MyWork extends Component{
    render(){
        return(
            <div className="my-work">
                <p>{this.props.data}</p>
                <img src={require('./../images/icon_specific.png').default} alt="icon_specific"></img>
            </div>
        )
    }
}

function ProfileModal({closeModal}){
    return(
        <div className="profile-modal">
            <OutsideClickHandler onOutsideClick={()=>{closeModal(false)}}>
                <div className="profile-modal-in">
                    <h3>프로필 변경하기</h3>
                    <p>앨범에서 선택</p>
                    <p>기본 이미지로 변경</p>
                </div>
            </OutsideClickHandler>
        </div>
    )
}

function NavMyPage(){
    const nav = [
        {
            id:1,
            link:'home',
            img:'home',
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
            link:'match',
            img:'match',
            name:'매칭현황'
        },
        {
            id:4,
            link:'mypage',
            img:'mypage_on',
            name:'마이캔탈'
        }
    ]
    const [openModal, setOpenModal] = useState(false);
    
    return(
        <div className="myPage AppIn">
            <BackHeader data={'마이 캔탈'} back={'/nav/home'} img={<img src={require('./../images/icon_setting.png').default} alt="icon_myprofile"></img>}></BackHeader>
            <div className="mypage-wrap">
                <div className="profile">
                    <img src={require('./../images/icon_myprofile.png').default} alt="icon_myprofile">
                    </img>
                    <img
                        src={require('./../images/icon_myprofile_add.png').default} alt="icon_myprofile"
                        onClick={()=>{
                            setOpenModal(true)
                        }}
                        className="myProfile-add"
                    >
                    </img>
                    <h2>홍길동</h2>
                    <p>부산진구 양정동 | 010-1234-5678</p>
                </div>
                <Link to="/nav/mypage/written"><MyWork data={'내 작성글'}></MyWork></Link>
                <Link to="/nav/mypage/notice"><MyWork data={'공지사항'}></MyWork></Link>
                <Link to="/nav/mypage/qna"><MyWork data={'1:1 문의하기'}></MyWork></Link>
                <div className="cs-center">
                    <h2>고객센터 연결하기</h2>
                    <p>상담시간: AM 09:00 ~ PM 06:00 / 주말 및 공휴일 제외</p>
                </div>
            </div>

            <nav>
                <div className="nav-wrap">
                    {nav.map(data => (
                        <Nav nav={data} key={data.id} />
                    ))}
                </div>
            </nav>

            {openModal && <ProfileModal closeModal={setOpenModal}></ProfileModal>}            
        </div>
    )
} 

export default NavMyPage;