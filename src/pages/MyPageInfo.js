import React, {useState, useReducer} from "react";
import BackHeader from "./BackHeader";
import BlueBtn from "../BtnSrc";


function reducer(check, action){
    switch(action.type){
        case "nickNameCheck":
            return { nickNameCheck: !check.nickNameCheck, phoneCheck: check.phoneCheck }
        case "phoneCheck":
            return { nickNameCheck: check.nickNameCheck, phoneCheck: !check.phoneCheck }
        default:
            return check;
    }
}

function MyPageInfo(){
    const [state, setState] = useState({
        name:'',
        nickName:'',
        phone:'',
        certNum:'',
        pw:'',
        pwCheck:'',
        birth:'',
        address:''})
    console.log(state)
    
    // const history = useHistory();
    const [check, dispatch] = useReducer(reducer, { nickNameCheck:false, phoneCheck:false });

    const [bgColor, setBgColor] = useState(false);


    function handleChange(e) {
        setBgColor(true)
        const iconDel = e.target.nextSibling;
        const name = document.getElementsByName('name')[0].value;
        const nickName = document.getElementsByName('nickName')[0].value;
        const phone = document.getElementsByName('phone')[0].value;
        const certNum = document.getElementsByName('certNum')[0].value;
        const pw = document.getElementsByName('pw')[0].value;
        const pwCheck = document.getElementsByName('pw')[1].value;
        const birth = document.getElementsByName('birth')[0].value;
        const address = document.getElementsByName('address')[0].value;
        const addressSpecific = document.getElementsByName('address')[1].value;
    
        setState({
            name: name,
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

    function changeBgColor(){
        return bgColor ? 'blue' : ''
    }


    function pageLogin(){
        const className = document.querySelector('.blue');
        if(className === null){
            return
        }else if(className.childNodes){
            // history.push('/nav/mypage');
            alert('??????????????? ?????????????????????.')
        }
    }
    return(
        <div className="infoPage AppIn">
            <div>
               <BackHeader data={'??? ??????'} back={'/nav/mypage'}></BackHeader>
                    <div className="join-form">
                        <h2>??????</h2>
                        <input
                            type="text"
                            placeholder="?????????"
                            onChange={handleChange}
                            name="name"
                        ></input>
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
                        <p className="orange">??????????????? 8~15?????? ??????, ??????, ???????????? ??????</p>
                    </div>
                    <div className="join-form">
                        <h2>???????????? ??????</h2>
                        <input
                            type="password"
                            placeholder="**********"
                            onChange={handleChange}
                            name="pw"
                        ></input>
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
                            name="address"
                        ></input>
                    </div>
            </div>

            <div
                className={changeBgColor()}
                onClick={()=>{pageLogin()}}
            >
                <BlueBtn data="?????? ????????????"></BlueBtn>
            </div>
        </div>
    )
}

export default MyPageInfo;