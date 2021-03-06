import React, {useState, useReducer} from "react";
import { useHistory } from "react-router";

import BlueBtn from '../BtnSrc.js';
import BackHeader from "./BackHeader.js";
import Modal from "./Modal.js";


function reducer(check, action){
    switch(action.type){
        case "phoneCheck":
            return { phoneCheck: !check.phoneCheck, certCheck: check.certCheck }
        case "certCheck":
            return { phoneCheck: check.phoneCheck, certCheck: !check.certCheck }
        default:
            return check;
    }
}

function pwReducer(check, action){
    switch(action.type){
        case "phoneCheck":
            return { phoneCheck: !check.phoneCheck, certCheck: check.certCheck }
        case "certCheck":
            return { phoneCheck: check.phoneCheck, certCheck: !check.certCheck }
        default:
            return check;
    }
}

function PwOneStop({state, getData}){
    const [check, dispatch] = useReducer(pwReducer, { phoneCheck:false, certCheck:false })

    function handleChange(e) {
        const iconDel = e.target.nextSibling;
        const name = document.getElementsByName('name')[0].value;
        const id = document.getElementsByName('id')[0].value;
        const phone = document.getElementsByName('phone')[0].value;
        const certNum = document.getElementsByName('certNum')[0].value;
    
        getData({
            name: name,
            id: id,
            phone: phone,
            certNum: certNum,
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
                className="pr15"
            ></input>
        </div>
        <div className="join-form">
            <h2>????????? (???????????????)</h2>
            <input
                type="email"
                placeholder="????????? (???????????????)"
                onChange={handleChange}
                name="id"
                className="pr15"
            ></input>
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
        </>
    )
}

export function NewPw(){
    const [state, setState] = useState({pw:'', pwCheck:''})
    console.log(state)

    const history = useHistory();

    function handleChange(e) {
        const iconDel = e.target.nextSibling;
        const pw = document.getElementsByName('pw')[0].value;
        const pwCheck = document.getElementsByName('pwCheck')[0].value;

        setState({
            pw: pw,
            pwCheck: pwCheck,
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

    function changeBgColor(){
        return state.pw.length >= 8 &&
                state.pwCheck.length >= 8 &&
                state.pw === state.pwCheck ? 'blue' : '';
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
        <div className="findPage AppIn">
            <div>
                <BackHeader data={'??? ???????????? ??????'} back={'/find/pw'}></BackHeader>
                {/* <JoinForm data={"???????????? ??????"} holder="**********"></JoinForm>
                <JoinForm data={"???????????? ??????"} holder="**********"></JoinForm> */}
                <div className="join-form">
                    <h2>???????????? ??????</h2>
                    <input
                        type="password"
                        placeholder="**********"
                        onChange={handleChange}
                        name="pw"
                        className="pr15"
                    ></input>
                    <p className="orange">??????????????? 8~15?????? ??????, ??????, ???????????? ??????</p>
                </div>
                <div className="join-form">
                    <h2>???????????? ??????</h2>
                    <input
                        type="password"
                        placeholder="**********"
                        onChange={handleChange}
                        name="pwCheck"
                        className="pr15"
                    ></input>
                    <p className="orange">??????????????? ?????????????????????.</p>
                </div>                                        
            </div>
            <div
                className={changeBgColor()}
                onClick={()=>{pageLogin()}}            
            >
                <BlueBtn data={'???????????? ??????'}></BlueBtn>
            </div>
        </div>
    )
}

export function FindId(){
    const [openModal, setOpenModal] = useState(false);
    const [state, setState] = useState({phone:'', certNum:''})
    console.log(state)

    const [check, dispatch] = useReducer(reducer, { phoneCheck:false, certCheck:false })
    
    function handleChange(e) {
        const iconDel = e.target.nextSibling;
        const phone = document.getElementsByName('phone')[0].value;
        const certNum = document.getElementsByName('certNum')[0].value;
    
        setState({
            phone: phone,
            certNum: certNum,
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

    function changeBgColor(){
        return state.phone.length >= 9 && state.certNum.length >= 4 ? 'blue' : '';
    }

    function pageModal(){
        const className = document.querySelector('.blue');
        if(className === null){
            return
        }else if(className.childNodes){
            setOpenModal(true)
        }
    }

    return(
        <div>
            <div className="findPage AppIn">
                <div>
                    <BackHeader data={'????????? ??????'} back={'/login'}></BackHeader>
                    {/* <JoinForm data={"?????????????????? ??????('-'??????)"} holder="01012345678"></JoinForm>
                    <JoinForm data={"???????????? ??????"} holder="123456"></JoinForm> */}
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
                </div>

                <div
                    className={changeBgColor()}
                    onClick={()=>{pageModal()}}
                >
                    <BlueBtn data={'????????? ??????'}></BlueBtn>
                </div>
            </div>
            {openModal && <Modal closeModal={setOpenModal}/>}
        </div>
    )
}

function FindPw(){
    const [state, setState] = useState({name:'', id: '', phone:'', certNum:''})
    const history = useHistory();

    const getData = (data) => {
        setState(data);
    }
    console.log(state)

    function changeBgColor(){
        return state.name.length >= 2 &&
                state.id.length >= 4 &&
                state.phone.length >= 9 &&
                state.certNum.length >= 4 ? 'blue' : '';
    }

    function pageNewPw(){
        const className = document.querySelector('.blue');
        if(className === null){
            return
        }else if(className.childNodes){
            history.push('/find/pw/new');
        }
    }    

    return(
        <div className="findPage AppIn">
            <div>
                <BackHeader data={'???????????? ??????'} back={'/login'}></BackHeader>
                <PwOneStop state={state} getData={getData}></PwOneStop>
            </div>
            <div
                className={changeBgColor()}
                onClick={()=>{pageNewPw()}}            
            >
                <BlueBtn data={'???????????? ??????'}></BlueBtn>
            </div>
        </div>
    )

}

export default FindPw;