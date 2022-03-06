import React, {Component} from "react";
import BackHeader from "./BackHeader";
class AlertHeader extends Component{
    render(){
        return(
            <div className="alert-header">
                <h2>{this.props.data}</h2>
                <div></div>
            </div>
        )
    }
}

function AlertBox({data, prev}){
    return(
        <div className="alert-box" style={data.new}>
            <p>{data.name}</p>
            <p>{data.time}{prev}</p>
        </div>
    )
}

function HomeAlert(){
    const alertToday = [
        {
            id:1,
            name: '[공지] 캔탈마켓 이벤트 당첨자 안내',
            time: '18:21',
            new: {border: '1px solid rgba(0, 159, 226, 0.5)'}
        },
        {
            id:2,
            name: '[1:1 문의하기] 답변이 등록되었습니다.',
            time: '21:45',
        }
    ]

    const alertPrevious = [
        {
            id:1,
            name: '[매칭신청] 매칭신청이 완료 되었습니다. 매칭 정보를 입력해 주세요.',
            time: '1'
        }
    ]

    return(
        <div className="alertPage">
            <BackHeader data={'알림센터'} back={'/nav/home'}></BackHeader>
            <div className="alert-list AppIn">
                <AlertHeader data={'오늘 알림'}></AlertHeader>
                {alertToday.map(data => (
                    <AlertBox data={data} key={data.id} />
                ))}

                <AlertHeader data={'이전 알림'}></AlertHeader>
                {alertPrevious.map(data => (
                    <AlertBox data={data} key={data.id} prev={'일전'}/>
                ))}
            </div>
        </div>
    )
}

export default HomeAlert;