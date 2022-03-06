import React, {Component, useState} from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OutsideClickHandler from "react-outside-click-handler";

import BackHeader from "./BackHeader";
import { BlueFlat } from "../BtnSrc";
import { ModalSimple } from "./Modal";

// const seller = true; // 판매자일 경우 표시되는 화면
const seller = false; // 구매자일 경우 표시되는 화면 
const booked = true; // 예약중일 경우 표시되는 버튼

class Slick extends Component{
    render(){
        return(
            <Slider {...this.props.data}>
                <div>
                    <h3><img src={require('./../images/writing.png').default} alt="writing icon"></img></h3>
                </div>
                <div>
                    <h3><img src={require('./../images/writing.png').default} alt="writing icon"></img></h3>
                </div>
                <div>
                    <h3><img src={require('./../images/writing.png').default} alt="writing icon"></img></h3>
                </div>
                <div>
                    <h3><img src={require('./../images/writing.png').default} alt="writing icon"></img></h3>
                </div>
                <div>
                    <h3><img src={require('./../images/writing.png').default} alt="writing icon"></img></h3>
                </div>
            </Slider>
        )
    }
}

function MiniModal({closeMadal}){
    return(
        seller
        ?
        <OutsideClickHandler onOutsideClick={()=>closeMadal(false)}>
            <div className="mini-modal">
                <p>게시글 수정</p>
                <p>삭제</p>
            </div>
        </OutsideClickHandler>
        :
        <OutsideClickHandler onOutsideClick={()=>closeMadal(false)}>
            <div className="mini-modal">
                <p>신고하기</p>
                <p>이 사용자의 글 보지 않기</p>
            </div>
        </OutsideClickHandler>
    )
}

function WritingHeader(){
    const [openModal, setOpenModal] = useState(false);

    return(
        <div className="writing-header">
            <div>
                <p>삼성</p>
                <div
                    onClick={()=>{
                        setOpenModal(true)
                    }}
                >
                    <img src={require('./../images/icon_writing_edit.png').default} alt="writing edit"></img>
                </div>
            </div>
            <h2>에어드레서 양도 합니다.</h2>
            <div className="writing-myinfo">
                <img src={require('./../images/icon_profile.png').default} alt="profile icon"></img>
                <p>김춘향 | 부산진구 연수로</p>
            </div>

            {openModal && <MiniModal closeMadal={setOpenModal}></MiniModal>}
        </div>
    )
}

class SellText extends Component{
    render(){
        return(
        <div className="writing-price">
            { seller ? <h3 className="light-blue">양도 제안중</h3> : ''}
            <p className="price-bold">월 84,500원</p>
            <p>남은 약정　　<span>6개월</span></p>
            <p>약정 만료일　<span>2022.05.31</span></p>
            <p>제품 상태　　<span>사용감 있음</span></p>
            <p>기본정보</p>
            <table>
                <tbody>
                    <tr>
                        <th>브랜드</th>
                        <td>LG</td>
                    </tr>
                    <tr>
                        <th>모델명</th>
                        <td>AS181DAWESF</td>
                    </tr>
                    <tr>
                        <th>S/N</th>
                        <td>LG전자 퓨리케어 AS181DAWESF</td>
                    </tr>
                    <tr>
                        <th>제품크기<br/>(WxDxH)</th>
                        <td>343x587x343mm</td>
                    </tr>
                    <tr>
                        <th>정격전압</th>
                        <td>220V/60Hz</td>
                    </tr>
                    <tr>
                        <th>소비전력</th>
                        <td>최대 48W</td>
                    </tr>                                                                                                                                
                </tbody>
            </table>
            <p className="sell-text">
                상태 좋은 스타일러입니다.<br />
                기간은 6개월 입니다.
            </p>
        </div>
        )
    }
}

function Comment({data}){
    return(
        <div className={'comment'+' '+data.ml}>
            <div className="comment-id">
                <img src={require('./../images/icon_profile.png').default} alt="comment_profile"></img>
                <h4>{data.name}</h4>
                <p><span>{data.time}</span>시간전</p>
            </div>
            <p className="comment-text">
                {data.text}
            </p>
            <div className="comment-btn">
                <p>답글달기</p>
                <p>게시글보기</p>
            </div>
        </div>
    )
}

function WriteComment({setOpenModal}){
    const [insistBoolean, setInsistBoolean] = useState(true);

    function insist(){
        setInsistBoolean(!insistBoolean)
    }

    function pageModal(){
        setOpenModal(true)
    }

    return(
        <div className="comment-write">
            <div onClick={()=>{insist()}}>
                {
                    insistBoolean
                    ? <img src={require('./../images/icon_insist.png').default} alt="icon_insist"></img>
                    : <img src={require('./../images/icon_insist_on.png').default} alt="icon_insist"></img>
                }
            </div>
            <input type="text" placeholder="댓글 쓰기.."></input>
            {
                seller ? '' : booked
                ? <div className="blueToGray" onClick={()=>{pageModal()}}><BlueFlat data={'예약중'}></BlueFlat></div>
                : <div onClick={()=>{pageModal()}}><BlueFlat data={'승계신청'}></BlueFlat></div>
            }
        </div>
    )
}

function Writing(){
    const [openModal, setOpenModal] = useState(false);

    const commentData=[
        {
            id:1,
            name:'홍길동',
            time:12,
            text:'찍힘이나 생활기스는 어떤가요?',
            ml:''
        },
        {
            id:2,
            name:'김춘향',
            time:10,
            text:'사진에 보면 나와있습니다!',
            ml:'ml30'
        },
        {
            id:3,
            name:'홍길동',
            time:10,
            text:'넵!',
            ml:'ml30'
        }
    ]

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        lazyLoad: true
    }
    return(
        <div className="writingPage">
            <div className="slick-wrap">
                <BackHeader back={'/nav/home'}></BackHeader>
                <Slick data={settings}></Slick>
            </div>
            <div className="writing-text AppIn">
                <WritingHeader></WritingHeader>
                <SellText></SellText>
                <div className="comment-wrap">
                    <h2>댓글 (3)</h2>
                    {
                        commentData.map(data => (
                            <Comment data={data} key={data.id}></Comment>
                        ))
                    }
                </div>
            </div>
            <WriteComment setOpenModal={setOpenModal}></WriteComment>
            {openModal && <ModalSimple closeModal={setOpenModal}/>}
        </div>
    )
} 
export default Writing;