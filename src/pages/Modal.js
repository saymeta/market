import React, { useState } from "react"
import { Link } from "react-router-dom";
import {BlueFlat} from '../BtnSrc';

export function ModalMatch({closeModal}){
    const [nextModal, setNextModal] = useState(false);
    const [complete, setComplete] = useState(false);

    return(
        nextModal
        ?
        (
            complete
            ?
            <div className="modal-background">
                <div className="modal">
                    <img src="/img/modal_check.png" alt="modal"></img>
                    <h2><span>매칭 신청</span>이 정상적으로<br/><span>완료</span>되었습니다.</h2>
                    <p>곧 관리자에게서 연락이 갑니다.</p>
                    <div>
                        <div onClick={()=>{closeModal(false)}}><BlueFlat data={'매칭현황 보기'}></BlueFlat></div>           
                    </div>
                </div>
            </div>            
            :
            <div className="modal-background">
                <div className="modal">
                    <h2>취소사유를 입력해주세요.</h2>
                    <textarea placeholder="내용을 입력하세요."></textarea>
                    <div>
                        <div className="gray-flat" onClick={()=>closeModal(false)}>아니오</div>
                        <div onClick={()=>{setComplete(true)}}><BlueFlat data={'취소하기'}></BlueFlat></div>           
                    </div>
                </div>
            </div>
        )
        :
        <div className="modal-background">
        <div className="modal">
            <h2 className="mb16">매칭을 취소하시겠습니까?</h2>
            <div>
                <div className="gray-flat" onClick={()=>closeModal(false)}>아니오</div>
                <div onClick={()=>{setNextModal(true)}}><BlueFlat data={'취소하기'}></BlueFlat></div>           
            </div>
        </div>
    </div>
    )
}

export function ModalComplete(){
    return(
        <div className="modal-background">
            <div className="modal">
                <img src="/img/modal_check.png" alt="modal"></img>
                <h2><span>매칭 정보 입력</span>이 정상적으로<br/><span>완료</span>되었습니다.</h2>
                <p>곧 관리자에게서 연락이 갑니다.</p>
                <div>
                    <Link to='/nav/match'><BlueFlat data={'매칭현황 보기'}></BlueFlat></Link>           
                </div>
            </div>
        </div>        
    )
}

export function ModalSimple({closeModal}){
    const [nextModal, setNextModal] = useState(false);

    return(
        nextModal
        ?
        <div className="modal-background">
            <div className="modal">
                <img src="/img/modal_check.png" alt="modal"></img>
                <h2><span>매칭 신청</span>이 정상적으로<br/><span>완료</span>되었습니다.</h2>
                <p>곧 관리자에게서 연락이 갑니다.</p>
                <div>
                    <Link to='/nav/match'><BlueFlat data={'매칭현황 보기'}></BlueFlat></Link>           
                </div>
            </div>
        </div>
        :
        <div className="modal-background">
        <div className="modal">
            <h2 className="mb16">김춘향 님께 매칭을 신청하시겠습니까?</h2>
            <div>
                <div className="gray-flat" onClick={()=>closeModal(false)}>취소하기</div>
                <div onClick={()=>{setNextModal(true)}}><BlueFlat data={'신청하기'}></BlueFlat></div>           
            </div>
        </div>
    </div>
    )
}

function Modal({closeModal}){
    return(
        <div className="modal-background">
            <div className="modal">
                <img src="/img/modal_check.png" alt="modal"></img>
                <h2><span>아이디 찾기</span> 결과</h2>
                <p>아이디:　cantal**</p>
                <div>
                    <div className="gray-flat" onClick={()=>closeModal(false)}>취소하기</div>
                    <Link to='/login'><BlueFlat data={'신청하기'}></BlueFlat></Link>           
                </div>
            </div>
        </div>
    )
}

export default Modal