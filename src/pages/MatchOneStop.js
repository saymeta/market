import React, {useState} from "react";

import BackHeader from "./BackHeader";
import BlueBtn from "../BtnSrc";
import { ModalComplete } from "./Modal";

export default function MatchOneStop(){
    const [state, setState] = useState({address:'', shippingDate: '', text:''})
    const [modal, setModal] = useState(false);

    function handleChange(){
        var address = document.getElementsByName('address')[0].value;
        const addressSpecific = document.getElementsByName('address')[1].value;
        var shippingDate = document.getElementsByName('shippingDate')[0].value;
        const shippingDateEnd = document.getElementsByName('shippingDate')[1].value;
        const text = document.getElementsByName('text')[0].value;

        setState({
            address : address + ' ' + addressSpecific,
            shippingDate: shippingDate + ' ' + shippingDateEnd,
            text : text
        })

        console.log(state.shippingDate.length);
    }

    function changeBgColor(){
        return state.address.length >= 2
            && state.shippingDate.length >= 21
            ? 'blue' : '';
    }

    function pageLogin(){
        const className = document.querySelector('.blue');
        if(className === null){
            return
        }else if(className.childNodes){
            setModal(true)
        }
    }

    return(
        <div className="AppIn matchOneStopPage">
            <div>
                <BackHeader data={'매칭 정보 입력'} back={'/nav/match'}></BackHeader>

                <div className="join-form mt10">
                    <h2>주소<span>*</span></h2>
                    <input
                        type="text"
                        placeholder="부산진구 연수로 10"
                        onChange={handleChange}
                        name="address"
                    ></input>
                    <img
                        src={require('./../images/icon_search_gray.png').default}
                        alt="icon_del"
                        // onClick={}
                        className="search"
                    ></img>
                    <input
                        type="text"
                        placeholder="상세주소"
                        onChange={handleChange}
                        className="mt4"
                        name="address"
                    ></input>
                </div>


                <div className="join-form end-date">
                    <h2>배송 가능 날짜<span>*</span></h2>
                    <div className="match-date">
                        <input
                            type="date"
                            placeholder="2021-08-27"
                            name="shippingDate"
                            className="pr10"
                            onChange={handleChange}
                        ></input>
                        <div className="match-bar"></div>
                        <input
                            type="date"
                            placeholder="2021-08-27"
                            name="shippingDate"
                            className="pr10"
                            onChange={handleChange}
                        ></input>
                    </div>
                </div>


                <div className="join-form w-text">
                    <h2>내용</h2>
                    <textarea
                        className="state mt13"
                        name="text"
                        placeholder="내용을 입력하세요."
                        onChange={handleChange}
                    ></textarea>
                </div>
            </div>
            <div
                className={changeBgColor()}
                onClick={()=>{pageLogin()}}
            >
                <BlueBtn data={"등록하기"}></BlueBtn>
            </div>

            { modal && <ModalComplete></ModalComplete> }
        </div>
    )
}