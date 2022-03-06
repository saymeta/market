import React, {useState} from "react";

import BackHeader from './BackHeader';
import BlueBtn from './../BtnSrc.js';

const qnaNow = true; // 진행중 매칭이 있을 경우
// const qnaNow = false; // 진행중 매칭이 없을 경우

const qnaPast = true; // 지난 매칭이 있을 경우
// const qnaPast = false; // 지난 매칭이 없을 경우

function PastQna(){
    const [toggle, setToggle] = useState(false);

    return(
        <div className="past-qna" onClick={()=>{setToggle(!toggle)}}>
            <div className="past-qna-header">
                <h2>Q. [계약문의] 문의 드립니다.<span>답변완료</span></h2>
                <img src={require('./../images/icon_up.png').default} alt="icon_up"></img>
            </div>
            <p className="past-date">2021.08.26</p>

            {
                toggle
                &&
                <div className="past-qna-answer">
                    <h2>A.</h2>
                    <p>
                        안녕하세요. <br/>
                        캔탈마켓 관리자입니다. <br/>
                        문의주신 내용 확인했습니다.
                    </p>
                </div>
            }

        </div>
    )
}

function MyPageQnA(){
    const [toggleState, setToggleState] = useState(1);
    const [state, setState] = useState({
        name: '',
        id: '',
        title: '',
        text: ''
    });

    const toggleTab = (index) => {
        setToggleState(index);
    };

    function handleChange(e){
        if (e.target.value !== ''){
                e.target.style.borderBottom = '1px solid #55C4F1'
        }else{
                e.target.style.borderBottom = '1px solid #dadada'
        }

        const name = document.getElementsByName('q-name')[0].value;
        const id = document.getElementsByName('q-id')[0].value;
        const title = document.getElementsByName('q-title')[0].value;
        const text = document.getElementsByName('q-text')[0].value;

        setState({
            name: name,
            id: id,
            title: title,
            text: text
        })
    }

    function changeBgColor(){
        return state.name.length >= 2
            && state.id.length >= 5
            && state.title.length >= 2
            && state.text
                ? 'blue' : '';
    }

    function pageQna(){
        const className = document.querySelector('.blue');
        if(className === null){
            return
        }else if(className.childNodes){
            alert('1:1 문의하기 작성이 완료되었습니다.')
        }
    }

    return(
        <div className="qnaPage AppIn">
            <BackHeader data={'1:1 문의하기'} back={'/nav/mypage'}></BackHeader>
        
            <div className="container">
                <div className="bloc-tabs">
                    <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)} 
                    >
                    문의하기
                    </button>
                    <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                    >
                    지난 문의 내역
                    </button>
                </div>

                <div className="content-tabs">
                    <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                    >
                        {
                            qnaNow
                            ?
                            <div className="qna-writing">
                                <div>
                                    <div className="join-form">
                                        <h2>이름<span>*</span></h2>
                                        <input
                                            type="text"
                                            placeholder="김캔탈"
                                            onChange={handleChange}
                                            name="q-name"
                                        ></input>
                                    </div>
                                    <div className="join-form">
                                        <h2>이메일<span>*</span></h2>
                                        <input
                                            type="email"
                                            placeholder="loplab@naver.com"
                                            onChange={handleChange}
                                            name="q-id"
                                            className="pr86"
                                        ></input>
                                    </div>
                                    <div className="join-form">
                                        <h2>제목<span>*</span></h2>
                                        <input
                                            type="text"
                                            placeholder="문의합니다."
                                            onChange={handleChange}
                                            name="q-title"
                                        ></input>
                                    </div>                                    
                                    <div className="join-form w-text">
                                        <h2>문의 내용<span>*</span></h2>
                                        <textarea className="state mt13" name="q-text" placeholder="해당 제품 상태에 관하여 적어주세요." onChange={handleChange}></textarea>
                                    </div>
                                    <div className="join-form">
                                        <h2 className="mb12">사진첨부</h2>
                                        <div className="picture">
                                            <div><img src={require('./../images/list1.png').default} alt="list1_img"></img></div>
                                            <div><img src={require('./../images/icon_add.png').default} alt="icon_add" onChange={handleChange}></img></div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={changeBgColor(), "pb30"}
                                    onClick={()=>{pageQna()}}
                                >
                                    <BlueBtn data={'작성하기'}></BlueBtn>
                                </div>
                            </div>
                            :
                            <p className="match-null">문의 내역이 없습니다.</p>
                        }

                    </div>

                    <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                    >
                        {
                            qnaPast
                            ?
                            <div>
                                <PastQna></PastQna>
                                <PastQna></PastQna>
                            </div>
                            :
                            <p className="match-null">문의 내역이 없습니다.</p>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPageQnA;