import React, {useState} from "react";
import { Link } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";

import { Nav } from "./NavHome";
import BackHeader from "./BackHeader";
import { ModalMatch } from "./Modal";

const matchNow = true; // 진행중 매칭이 있을 경우
// const matchNow = false; // 진행중 매칭이 없을 경우

const matchPast = true; // 지난 매칭이 있을 경우
// const matchPast = false; // 지난 매칭이 없을 경우

function PastMatch({data}){
    const [toggle, setToggle] = useState(false)

    return(
        <div className="past-match">
            <div className="number">
                <p>NO. 2021082001</p>
                {
                    toggle
                    ?
                    <p onClick={()=>{setToggle(!toggle)}}><img src={require('./../images/icon_up.png').default} alt="icon_up"></img></p>
                    :
                    <p onClick={()=>{setToggle(!toggle)}}>상세보기<img src={require('./../images/icon_specific.png').default} alt="icon_specific"></img></p>
                }
            </div>
            <h2>2021.08.20(금)
                {
                    data.pass === '승계 완료'
                    ?
                    <span>승계 완료</span>
                    :
                    <span style={{color : '#333'}}>{data.pass}</span>
                }
            </h2>
            <table>
                <tbody>
                    {
                        toggle &&
                        <>
                            <tr className="match-toggle-top">
                                <th>양도인 명</th>
                                <td>홍길동</td>
                            </tr>
                            <tr>
                                <th>계약일시</th>
                                <td>2021-08-20 10:50:40</td>
                            </tr>
                            <tr>
                                <th>핸드폰</th>
                                <td>010-1234-****</td>
                            </tr>
                            <tr>
                                <th>배송지</th>
                                <td>부산진구 연수로 10 3층</td>
                            </tr>
                            <tr className="match-toggle">
                                <th>배송 요청사항</th>
                                <td>-</td>
                            </tr>
                        </>             
                    }


                    <tr className="match-info-top">
                        <th>물품 명</th>
                        <td>LG 스타일러</td>
                    </tr>
                    <tr>
                        <th>약정 만료일</th>
                        <td>2022.05.31</td>
                    </tr>
                    <tr>
                        <th>월 이용료</th>
                        <td>84,500원</td>
                    </tr>                         

                    {
                        data.reason &&
                        (
                            toggle &&
                            <>
                                <tr className="toggle-style">
                                    <th></th>
                                    <td></td>
                                </tr>
                                <tr className="match-cancle">
                                    <th>취소사유</th>
                                    <td>{data.reason}</td>
                                </tr>
                            </>
                        )
                    }
                                                                               
                </tbody>
            </table>                
        </div>
    )
}

function MiniModal({setModalMatch, closeModal}){
    return(
        <OutsideClickHandler onOutsideClick={()=>{closeModal(false)}}>
            <div className="mini-modal">
                <p onClick={()=>{setModalMatch(true)}}>매칭 취소하기</p>
                <Link to="/nav/match/info"><p>관리자에게 문의</p></Link>
            </div>
        </OutsideClickHandler>
    )
}

function MatchBox({setModalMatch}){
    const [openModal, setOpenModal] = useState(false);

    return(
        <>
        <div className="match-box" onClick={()=>{setOpenModal(true)}}>
            <h2>LG스타일러 양도합니다.</h2>
            <p className="match-name">김춘향 | <span>기간</span> 약 6개월</p>
            <p className="match-check">매칭 검토 중<span>곧 관리자에게서 연락이 갑니다.</span></p>
            
            {openModal && <MiniModal setModalMatch={setModalMatch} closeModal={setOpenModal}></MiniModal>}
        </div>
        </>
    )
}

function NavMatch(){
    const [toggleState, setToggleState] = useState(1);
    const [modalMatch, setModalMatch] = useState(false);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const matchData = [
        {
            id:1,
            pass:'승계 완료',
        },
        {
            id:2,
            pass:'승계 취소',
            reason:'취소사유 취소사유 취소사유 취소사유 취소사유 취소사유 취소사유 취소사유 취소사유'
        }
    ]

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
            img:'match_on',
            name:'매칭현황'
        },
        {
            id:4,
            link:'mypage',
            img:'mypage',
            name:'마이캔탈'
        }
    ]

    return(
        <div className="matchPage AppIn">
            <BackHeader data={'매칭현황'} back={'/nav/home'}></BackHeader>

            <div className="container">
                <div className="bloc-tabs">
                    <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)} 
                    >
                    진행중 매칭
                    </button>
                    <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                    >
                    지난 매칭 내역
                    </button>
                </div>

                <div className="content-tabs">

                    <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                    >
                    {
                    matchNow
                    ?                        
                        <div className="matchBox-wrap">
                            <MatchBox setModalMatch={setModalMatch}></MatchBox>
                            <MatchBox setModalMatch={setModalMatch}></MatchBox>
                            <MatchBox setModalMatch={setModalMatch}></MatchBox>
                            <MatchBox setModalMatch={setModalMatch}></MatchBox>
                            <MatchBox setModalMatch={setModalMatch}></MatchBox>
                            <MatchBox setModalMatch={setModalMatch}></MatchBox>
                            <MatchBox setModalMatch={setModalMatch}></MatchBox>
                            <MatchBox setModalMatch={setModalMatch}></MatchBox>
                            <MatchBox setModalMatch={setModalMatch}></MatchBox>
                            <MatchBox setModalMatch={setModalMatch}></MatchBox>
                            <MatchBox setModalMatch={setModalMatch}></MatchBox>
                        </div>
                    :
                        <p className="match-null">이용 내역이 없습니다.</p>
                    }                        
                    </div>

                    <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                    >
                    {
                    matchPast
                    ?                        
                        <div className="past-wrap">
                            {matchData.map(data => (
                                <PastMatch data={data} key={data.id}></PastMatch>
                            ))}
                        </div>
                    :
                        <p className="match-null">이용 내역이 없습니다.</p>
                    }                        
                    </div>

                </div>
            </div>
            { modalMatch && <ModalMatch closeModal={setModalMatch}/> }

            <nav>
                <div className="nav-wrap">
                    {nav.map(data => (
                        <Nav nav={data} key={data.id} />
                    ))}
                </div>
            </nav>
        </div>
    )
}

export default NavMatch;