import React, {useState} from "react";
import { useHistory } from "react-router";

import BackHeader from "./BackHeader";
import BlueBtn from "../BtnSrc";

function doRadio(chk){
    var obj = document.getElementsByName('radio');

    for(var i = 0; i < obj.length; i++){
        if(obj[i].id !== chk.id){
            obj[i].checked = false;
        }
    }
}

function WriteOneStop({state, getData}){
    function handleChange(){
        var width = document.getElementsByName('w-width')[0].value;
        var vertical = document.getElementsByName('w-vertical')[0].value;
        var height = document.getElementsByName('w-height')[0].value;
        const unable = document.getElementsByName('unable')[0].checked;

        const title = document.getElementsByName('w-title')[0].value;
        const price = document.getElementsByName('w-price')[0].value;
        const picture = '사진다섯개'

        const conditionNew = document.getElementsByName('radio')[0].checked;
        const conditionUse = document.getElementsByName('radio')[1].checked;
        const conditionOld = document.getElementsByName('radio')[2].checked;
        var condition = '';
        if(conditionNew){
            condition = 'new'
        }else if(conditionUse){
            condition = 'use'
        }else if(conditionOld){
            condition = 'old'
        }

        const expireDate = document.getElementsByName('w-expireDate')[0].value;
        const brand = document.getElementsByName('w-brand')[0].value;
        const modelName = document.getElementsByName('w-modelName')[0].value;
        const serialNum = document.getElementsByName('w-serialNum')[0].value;

        var measure = width + ' ' + vertical + ' ' + height
        if(width === '' && vertical === '' && height === ''){
            measure = unable
        }else if((width || vertical || height) && unable){
            measure += ' ' + unable
        }

        const wVolt = document.getElementsByName('w-volt')[0].value;
        const hz = document.getElementsByName('w-hz')[0].value;
        const volt = wVolt + ' ' + hz

        const watt = document.getElementsByName('w-watt')[0].value;
        const text = document.getElementsByName('w-text')[0].value;

        getData({
            title: title,
            price: price,
            picture: picture,
            condition: condition,
            expireDate: expireDate,
            brand: brand,
            modelName: modelName,
            serialNum: serialNum,
            measure: measure,
            volt: volt,
            watt: watt,
            text: text
        })
    }

    return(
        <>
            <div className="join-form">
                <h2>제목<span>*</span></h2>
                <input type="text" placeholder='LG 퓨리케어 공기청정기 양도 합니다.' name="w-title" onChange={handleChange}></input>
            </div>

            <div className="join-form w-price">
                <h2>금액<span>*</span></h2>
                <input type="number" placeholder='￦ 84,500원' name="w-price" onChange={handleChange} className="pr86"></input>
                <p>(월 임차료)</p>
            </div>

            <div className="join-form">
                <h2>사진첨부<span>*</span></h2>
                <p className="explain mt13">제품 상태를 잘 볼 수 있게 최소 5장 이상 첨부해 주세요.</p>
                <div className="picture">
                    <div><img src={require('./../images/list1.png').default} alt="list1_img"></img></div>
                    <div><img src={require('./../images/icon_add.png').default} alt="icon_add" onChange={handleChange}></img></div>
                </div>
            </div>

            <div className="join-form">
                <h2>제품 상태<span>*</span></h2>
                <div className="condition mt13">
                    <div className="left">
                        <input type="checkbox" name="radio" id="new" onClick={()=>{doRadio({id: 'new'})}} onChange={handleChange}/>
                        <label htmlFor="new">거의 새 것</label>
                    </div>
                    <div className="left">
                        <input type="checkbox" name="radio" id="use" onClick={()=>{doRadio({id: 'use'})}} onChange={handleChange}/>
                        <label htmlFor="use">사용감 있음</label>
                    </div>
                    <div className="left">
                        <input type="checkbox" name="radio" id="old" onClick={()=>{doRadio({id: 'old'})}} onChange={handleChange}/>
                        <label htmlFor="old">사용감 많음</label>
                    </div>
                </div>
            </div>

            <div className="join-form end-date">
                <h2>약정만료일<span>*</span></h2>
                <input
                type="date"
                placeholder="2021-08-27"
                name="w-expireDate"
                className="pr10"
                onChange={handleChange}
            ></input>
            </div>

            <div className="join-form">
                <h2>브랜드<span>*</span></h2>
                <input type="text" placeholder='삼성' name="w-brand" onChange={handleChange}></input>
            </div>

            <div className="join-form">
                <h2>모델명<span>*</span></h2>
                <input type="text" placeholder='AS181DAWESF' name="w-modelName" onChange={handleChange}></input>
            </div>

            <div className="join-form">
                <h2>S/N</h2>
                <input type="text" placeholder='LG전자퓨리케어AS181DAWESF' name="w-serialNum" onChange={handleChange}></input>
            </div>

            <div className="join-form">
                <h2>제품 크기 (가로X세로X높이)<span>*</span></h2>
                <div className="width mt13">
                    <div className="width-input">
                        <input type="number" name="w-width" onChange={handleChange}></input>
                        <p>x</p>
                        <input type="number" name="w-vertical" onChange={handleChange}></input>
                        <p>x</p>
                        <input type="number" name="w-height" onChange={handleChange}></input>
                        <p>mm</p>
                    </div>
                    <div className="left">
                        <input type="checkbox" name="unable" id='unable' onChange={handleChange}/>
                        <label htmlFor='unable'>측정불가</label>
                    </div>
                </div>
            </div>
            
            <div className="join-form">
                <h2>정격전압</h2>
                <div className="volt mt13">
                    <div className="v-wrap">
                        <input type="number" name="w-volt" onChange={handleChange}></input>
                        <p>V</p>
                    </div>
                    <p>/</p>
                    <div className="hz-wrap">
                        <input type="number" name="w-hz" onChange={handleChange}></input>
                        <p>Hz</p>
                    </div>
                </div>
            </div>

            <div className="join-form watt">
                <h2>소비전력</h2>
                <input type="number" placeholder='최대' name="w-watt" onChange={handleChange}></input>
                <p>W</p>
            </div>          

            <div className="join-form">
                <h2>내용<span>*</span></h2>
                <textarea className="state mt13" name="w-text" placeholder="해당 제품 상태에 관하여 적어주세요." onChange={handleChange}></textarea>
            </div>
        </>
    )
}

function HomeWrite(){
    const history = useHistory();
    const [state, setState] = useState({
        title:'',
        price:'',
        picture: '사진다섯개',
        condition:'',
        expireDate:'',
        brand:'',
        modelName:'',
        serialNum:'',
        measure:'',
        volt:'',
        watt:'',
        text:''})

    const getData = (data) => {
        setState(data);
    }
    console.log(state)

    function changeBgColor(){
        return state.title.length >= 2 && state.price.length >= 3 && state.picture.length >= 5 && state.condition && state.expireDate && state.brand && state.modelName && (state.measure.length >= 5 || state.measure === true) && state.text
                ? 'blue' : '';
    }

    function pageLogin(){
        const className = document.querySelector('.blue');
        if(className === null){
            return
        }else if(className.childNodes){
            history.push('/nav/home/writing');
        }
    }

    return(
        <div className="writePage">
            <BackHeader data={'양도제안 글쓰기'} back={'/nav/home'}></BackHeader>
        
            <div className="AppIn">
                <WriteOneStop state={state} getData={getData}></WriteOneStop>
                <div
                    className={changeBgColor()}
                    onClick={()=>{pageLogin()}}
                >
                    <BlueBtn data={'등록하기'}></BlueBtn>
                </div>
            </div>
        </div>
    )
}

export default HomeWrite;