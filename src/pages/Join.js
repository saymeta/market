import React, {Component, useState, useReducer} from "react";
import { useHistory } from "react-router";

import BlueBtn from '../BtnSrc.js';
import BackHeader from "./BackHeader.js";


function reducer(check, action){
    switch(action.type){
        case "idCheck":
            return { idCheck: !check.idCheck, nickNameCheck: check.nickNameCheck, phoneCheck: check.phoneCheck, certCheck: check.certCheck };
        case "nickNameCheck":
            return { idCheck: check.idCheck, nickNameCheck: !check.nickNameCheck, phoneCheck: check.phoneCheck, certCheck: check.certCheck };
        case "phoneCheck":
            return { idCheck: check.idCheck, nickNameCheck: check.nickNameCheck, phoneCheck: !check.phoneCheck, certCheck: check.certCheck }
        case "certCheck":
            return { idCheck: check.idCheck, nickNameCheck: check.nickNameCheck, phoneCheck: check.phoneCheck, certCheck: !check.certCheck }
        default:
            return check;
    }
}

// {backgroundColor: '#55C4F1'} #ccc
function JoinOneStop({state, getData}){
    const [check, dispatch] = useReducer(reducer, { idCheck:false, nickNameCheck:false, phoneCheck:false, certCheck:false })
    
    function del(e){
        const effectDel = e.target.previousSibling;
        effectDel.value = null;
        effectDel.style.borderBottom = '1px solid #dadada'
        e.target.style.display = 'none'
    }

    function handleChange(e) {
        const iconDel = e.target.nextSibling;
        const name = document.getElementsByName('name')[0].value;
        const id = document.getElementsByName('id')[0].value;
        const nickName = document.getElementsByName('nickName')[0].value;
        const phone = document.getElementsByName('phone')[0].value;
        const certNum = document.getElementsByName('certNum')[0].value;
        const pw = document.getElementsByName('pw')[0].value;
        const pwCheck = document.getElementsByName('pwCheck')[0].value;
        const birth = document.getElementsByName('birth')[0].value;
        const address = document.getElementsByName('address')[0].value;
        const addressSpecific = document.getElementsByName('addressSpecific')[0].value;
    
        getData({
            name: name,
            id: id,
            nickName: nickName,
            phone: phone,
            certNum: certNum,
            pw: pw,
            pwCheck: pwCheck,
            birth: birth,
            address: address + ' ' + addressSpecific
        })
    
        if(iconDel){
            if (e.target.value !== ''){
                e.target.style.borderBottom = '1px solid #55C4F1'
                iconDel.style.display = 'block'
                if(iconDel.nextSibling){
                    iconDel.nextSibling.style.display = 'block'
                }else{
                    return
                }
            }else{
                e.target.style.borderBottom = '1px solid #dadada'
                iconDel.style.display = 'none'
                if(iconDel.nextSibling){
                    iconDel.nextSibling.style.display = 'none'
                }

            }
        }else{
            if (e.target.value !== ''){
                e.target.style.borderBottom = '1px solid #55C4F1'
            }else{
                e.target.style.borderBottom = '1px solid #dadada'
            }
        }

    }

    return(
        <>
        <div className="join-form">
            <h2>??????</h2>
            <input
                type="text"
                placeholder="?????????"
                onChange={handleChange}
                name="name"
            ></input>
            <img
                src={require('./../images/icon_del.png').default}
                alt="icon_del"
                onClick={del}
                className="del"
            ></img>
        </div>
        <div className="join-form">
            <h2>????????? (???????????????)</h2>
            <button className="double-btn" style={check.idCheck ? {backgroundColor: '#55C4F1'} : {backgroundColor: '#ccc'}} onClick={() => dispatch({type: 'idCheck'})}>????????????</button>
            <input
                type="email"
                placeholder="????????? (???????????????)"
                onChange={handleChange}
                name="id"
                className="pr86"
            ></input>
            <p className="orange">??????????????? ??????????????????.</p>
        </div>
        <div className="join-form">
            <h2>?????????</h2>
            <button className="double-btn" style={check.nickNameCheck ? {backgroundColor: '#55C4F1'} : {backgroundColor: '#ccc'}} onClick={() => dispatch({type: 'nickNameCheck'})}>????????????</button>
            <input
                type="text"
                placeholder="?????????"
                onChange={handleChange}
                name="nickName"
                className="pr86"
            ></input>
            <p className="orange">??????????????? ??????????????????.</p>
        </div>
        <div className="join-form">
            <h2>?????????????????? ??????('-'??????)</h2>
            <button className="double-btn" style={check.phoneCheck ? {backgroundColor: '#55C4F1'} : {backgroundColor: '#ccc'}} onClick={() => dispatch({type: 'phoneCheck'})}>????????????</button>
            <input
                type="number"
                placeholder="01012345678"
                onChange={handleChange}
                name="phone"
                className="pr86"
            ></input>
        </div>
        <div className="join-form">
            <h2>???????????? ??????</h2>
            <button className="double-btn" style={check.certCheck ? {backgroundColor: '#55C4F1'} : {backgroundColor: '#ccc'}} onClick={() => dispatch({type: 'certCheck'})}>??????</button>
            <input
                type="number"
                placeholder="123456"
                onChange={handleChange}
                name="certNum"
                className="pr86"
            ></input>
            <p className="orange">??????????????? ?????????????????????.</p>
        </div>
        <div className="join-form">
            <h2>???????????? ??????</h2>
            <input
                type="password"
                placeholder="**********"
                onChange={handleChange}
                name="pw"
            ></input>
            <img
                src={require('./../images/icon_del.png').default}
                alt="icon_del"
                onClick={del}
                className="del"
            ></img>
            <p className="orange">??????????????? 8~15?????? ??????, ??????, ???????????? ??????</p>
        </div>
        <div className="join-form">
            <h2>???????????? ??????</h2>
            <input
                type="password"
                placeholder="**********"
                onChange={handleChange}
                name="pwCheck"
            ></input>
            <img
                src={require('./../images/icon_del.png').default}
                alt="icon_del"
                onClick={del}
                className="del"
            ></img>
            <p className="orange">??????????????? ?????????????????????.</p>
        </div>
        <div className="join-form">
            <h2>???????????? (??????)</h2>
            <input
                type="date"
                placeholder="2021-08-27"
                onChange={handleChange}
                name="birth"
                className="pr10"
            ></input>
        </div>
        <div className="join-form">
            <h2>??????</h2>
            <input
                type="text"
                placeholder="???????????? ????????? 10"
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
                placeholder="????????????"
                onChange={handleChange}
                className="mt4"
                name="addressSpecific"
            ></input>
        </div>
        </>
    )
}

export class JoinForm extends Component{
    render(){
        return(
            <div className="join-form">
                <h2>{this.props.data}<span>{this.props.essential}</span></h2>
                
                {
                !this.props.form && <input
                                        type={this.props.type}
                                        placeholder={this.props.holder}
                                    ></input>
                }
            </div>
        )
    }
}

function Join(){     
    const [state, setState] = useState({name:'', id: '', nickName:'', phone:'', certNum:'', pw:'', pwCheck:'', birth:'', address:''})
    const history = useHistory();

    const getData = (data) => {
        setState(data);
    }
    console.log(state)

    // if(state.name.length < 2){
    //     alert('?????? ????????? ?????? ????????? ??????????????????.')
    // } else if(state.id.length < 4){
    //     alert('???????????? 4??? ?????? ??????????????????.')
    // } else if(state.nickName){
    //     alert('???????????? ??????????????????.')
    // } else if(state.phone < 9){
    //     alert('????????? ????????? ???????????? ????????? ?????????.')
    // } else if(state.certNum == null){
    //     alert('??????????????? ????????? ?????????.')
    // } else if(state.pw < 4 || state.pwCheck < 4){
    //     alert('??????????????? 4??? ?????? ??????????????????.')
    // } else if(state.pw !== state.pwCheck){
    //     alert('???????????? ??????????????? ???????????? ??????????????? ?????? ????????????.')
    // } else if(state.address.length < 2){
    //     alert('????????? ??????????????????.')
    // }

    function changeBgColor(){
        return state.name.length >= 2 &&
                state.id.length >= 4 &&
                state.nickName &&
                state.phone.length >= 9 &&
                state.certNum.length >= 4 &&
                state.pw.length >= 8 &&
                state.pwCheck.length >= 8 &&
                state.pw === state.pwCheck &&
                state.address.length >= 2 ? 'blue' : '';
    }

    function pageLogin(){
        const className = document.querySelector('.blue');
        if(className === null){
            return
        }else if(className.childNodes){
            history.push('/login');
        }
    }

    return(
        <div className="joinPage AppIn">
            <BackHeader data={'????????????'} back={'/login'}></BackHeader>

            <JoinOneStop state={state} getData={getData}></JoinOneStop>

            {/* <JoinForm data={'??????'} holder="?????????" state={state} getData={getData}></JoinForm>
            <JoinForm data={'????????? (????????? ??????)'} holder="????????? (????????? ??????)" state={state} getData={getData}></JoinForm>
            <JoinForm data={'?????????'} holder="?????????" state={state} getData={getData}></JoinForm>
            <JoinForm data={"?????????????????? ??????('-'??????)"} holder="01012345678" state={state} getData={getData}></JoinForm>
            <JoinForm data={'???????????? ??????'} holder="123456" state={state} getData={getData}></JoinForm>
            <JoinForm data={'???????????? ??????'} holder="**********" state={state} getData={getData}></JoinForm>
            <JoinForm data={'???????????? ??????'} holder="**********" state={state} getData={getData}></JoinForm>
            <JoinForm data={'???????????? (??????)'} holder="2021-08-27" state={state} getData={getData}></JoinForm>
            
            <JoinForm data={'??????'} holder="???????????? ????????? 10" address="????????????" state={state} getData={getData}></JoinForm>
            <div className="join-form mt"><input type="text" placeholder="????????????" onChange={handleChange}></input></div> */}

            <div
                className={changeBgColor()}
                onClick={()=>{pageLogin()}}
            >
                <BlueBtn data={"????????????"}></BlueBtn>
            </div>
        </div>
    )
}

export default Join;