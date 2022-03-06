import React, {Component} from "react";
import { Nav } from "./NavHome";
import BackHeader from "./BackHeader";
import {HomeList} from './NavHome';

class NavHeart extends Component{
    render(){
        const listData = [
            {
                id: 1,
                name: '[삼성] 에어드레서 양도합니다.',
                address: '동구 수정제2동',
                months: 26,
                price: '84,500',
                likes: 12,
                comment: 12,
            }
        ]

        const nav = [
            {
                id:1,
                link:'home',
                img:'home',
                name:'홈',
            },
            {
                id:2,
                link:'heart',
                img:'heart_on',
                name:'찜'
            },
            {
                id:3,
                link:'match',
                img:'match',
                name:'매칭현황'
            },
            {
                id:4,
                link:'mypage',
                img:'mypage',
                name:'마이캔탈'
            }
        ]

        return(
            <div className="heartPage AppIn">
                <BackHeader data={'관심제품'} back={'/nav/home'}></BackHeader>
                {listData.map(data => (
                <HomeList user={data} key={data.id}/>
                ))}
                <nav>
                    <div className="nav-wrap">
                        {nav.map(data => (
                            <Nav nav={data} key={data.id} />
                        ))}
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavHeart;