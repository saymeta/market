import React, {Component} from "react";
import { Link } from "react-router-dom";

import BackHeader from './BackHeader';

export class NoticeEach extends Component{
    render(){
        return(
            <div className="notice-each AppIn">
                <BackHeader data={'공지사항'} back={'/nav/mypage/notice'}></BackHeader>
                <NoticeList new={false}></NoticeList>
                <div className="notice-content">
                황금시대의 품었기 주는 웅대한 피가 눈에 온갖 것이다. 불어 놀이 내는 소금이라 없으면, 않는 봄바람이다. 크고 이것을 있는 발휘하기 아니다. 따뜻한 그림자는 미인을 위하여, 쓸쓸한 영락과 것은 사막이다. 우리 그림자는 우리는 너의 그들을 무엇을 가치를 꽃 때까지 이것이다. 남는 열매를 귀는 아니더면, 미묘한 무엇을 것은 사막이다. 따뜻한 천자만홍이 인간의 끓는 말이다. 따뜻한 되려니와, 아니더면, 트고, 낙원을 찾아 갑 두기 생생하며, 그리하였는가? 열락의 가는 속잎나고, 생생하며, 힘있다.

                만천하의 가는 무엇이 아름답고 끓는 이것이다. 속잎나고, 그러므로 인간이 구할 않는 자신과 쓸쓸하랴? 바이며, 새가 자신과 천자만홍이 풀밭에 듣는다. 그들은 이상의 설레는 쓸쓸하랴? 인생을 발휘하기 구하지 황금시대의 약동하다. 청춘의 이상을 피에 귀는 대고, 사막이다. 싸인 이 위하여 피에 일월과 그들의 듣는다. 인간은 같이, 피가 못할 착목한는 별과 위하여 있다. 살 장식하는 남는 품으며, 위하여, 눈에 구하기 것이다. 힘차게 그들을 행복스럽고 돋고, 과실이 있는 것이다. 그것을 이성은 그와 것이다.

                웅대한 구하지 청춘의 끓는다. 창공에 힘차게 거친 살 우리 하는 싹이 것이다. 것이다.보라, 착목한는 거선의 동산에는 트고, 무엇이 운다. 더운지라 고행을 품고 이상 인간에 청춘 열락의 사막이다. 사랑의 사람은 미인을 길지 실현에 것이다. 대한 인생을 트고, 어디 때문이다. 피고 낙원을 그들의 수 그들을 봄바람이다. 이것은 실로 별과 말이다. 끓는 따뜻한 관현악이며, 예가 찾아 이상, 것이다.
                </div>
            </div>
        )
    }
} 

class NoticeList extends Component{
    render(){
        return(
            <div className='notice-list'
                style={this.props.updates}
            >
                <div>
                    <h2>[공지] 캔탈마켓 이벤트 당첨자 안내</h2>
                    {
                        this.props.updates
                        ?
                        <img src={require('./../images/icon_notice_new.png').default} alt="icon_notice_new"></img>
                        :
                        ''
                    }
                </div>
                <p>2021.08.26</p>
            </div>
        )
    }
}

class MyPageNotice extends Component{
    render(){
        const updates = {border : '1px solid rgba(0, 159, 226, 0.5)'}

        return(
            <div className="noticePage AppIn">
                <BackHeader data={'공지사항'} back={'/nav/mypage'}></BackHeader>
                <Link to='/nav/mypage/notice/each'><NoticeList updates={updates}></NoticeList></Link>
                <Link to='/nav/mypage/notice/each'><NoticeList></NoticeList></Link>
                <Link to='/nav/mypage/notice/each'><NoticeList></NoticeList></Link>
                <Link to='/nav/mypage/notice/each'><NoticeList></NoticeList></Link>
                <Link to='/nav/mypage/notice/each'><NoticeList></NoticeList></Link>
                <Link to='/nav/mypage/notice/each'><NoticeList></NoticeList></Link>
                <Link to='/nav/mypage/notice/each'><NoticeList></NoticeList></Link>
            </div>
        )
    }
}

export default MyPageNotice;