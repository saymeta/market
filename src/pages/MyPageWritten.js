import React, {Component} from "react";
import BackHeader from './BackHeader';
import {HomeList} from './NavHome';

class MyPageWritten extends Component{
    render(){
        const listData = [
            {
                id: 1,
                name: 'LG스타일러 양도합니다.',
                edit: <img src={require("./../images/icon_writing_edit.png").default} alt="icon_edit"></img>,
                address: '동구 수정제2동',
                months: 6,
                price: '84,500',
                likes: 12, 
                comment: 12,
            },
            {
                id: 2,
                name: 'LG스타일러 양도합니다.',
                edit: <img src={require("./../images/icon_writing_edit.png").default} alt="icon_edit"></img>,
                address: '동구 수정제2동',
                months: 6,
                price: '84,500',
                likes: 12, 
                comment: 12,
            },
            {
                id: 3,
                name: 'LG스타일러 양도합니다.',
                edit: <img src={require("./../images/icon_writing_edit.png").default} alt="icon_edit"></img>,
                address: '동구 수정제2동',
                months: 6,
                price: '84,500',
                likes: 12, 
                comment: 12,
            }
        ]        
        return(
            <div className="writtenPage AppIn">
                <BackHeader data={'내 작성글'} back={'/nav/mypage'}></BackHeader>
                {listData.map(data => (
                    <HomeList user={data} key={data.id}/>
                ))}
            </div>
        )
    }
}
 
export default MyPageWritten;