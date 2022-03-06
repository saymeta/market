import React, {Component} from "react";
import BackHeader from "./BackHeader";
import { SearchBox } from "./NavHome";



function RecentSearch({recent}){
    function del({recent}){
        const findid = document.getElementById('id'+recent.id)
        findid.style.display='none'
    }
    return(
        <p className="light-blue" id={'id' + recent.id}>{recent.name}<img src={require("./../images/icon_search_x.png").default} alt="icon-search-x" onClick={()=>{del({recent})}}></img></p>
    )
}

function SuggestedSearch({suggested}){
    return(
        <li>
            <div><span style={{color: suggested.color}}>{suggested.id}</span>{suggested.name}</div>
            <div></div>
        </li>
    )
}

class SearchTitle extends Component{
    render(){
        return(
            <div className="search-title" style={{marginTop: this.props.mt}}>
                <h2>{this.props.title}</h2>
                <span onClick={()=>{recentDel()}}>{this.props.del}</span>
            </div>
        )
    }
}

function recentDel(){
    const findRecent = document.querySelector('.recent-wrap')
    findRecent.style.display = 'none'
}

function HomeSearch(){
    const recentSearch = [
        {
            id:1,
            name:'스타일러'
        },
        {
            id:2,
            name:'에어컨'
        },
        {
            id:3,
            name:'양문형 냉장고'
        },
        {
            id:4,
            name:'김치 냉장고'
        },
        {
            id:5,
            name:'스타일러'
        }
    ]

    const suggestedSearch = [
        {
            id:1,
            name:'에어컨',
            color:'#EA5B52'
        },
        {
            id:2,
            name:'스타일러',
            color:'#EA5B52'
        },
        {
            id:3,
            name:'양문형 냉장고',
            color:'#EA5B52'
        },
        {
            id:4,
            name:'공기청정기',
            color:'#55C4F1'
        },
        {
            id:5,
            name:'제습기',
            color:'#55C4F1'
        },
        {
            id:6,
            name:'안마의자',
            color:'#55C4F1'
        },
        {
            id:7,
            name:'TV',
            color:'#55C4F1'
        },
        {
            id:8,
            name:'에어컨',
            color:'#55C4F1'
        },
        {
            id:9,
            name:'스타일러',
            color:'#55C4F1'
        },
        {
            id:10,
            name:'냉장고',
            color:'#55C4F1'
        }
    ]
    return(
        <div className="searchPage">
            <BackHeader data={'검색'} back={'/nav/home'}></BackHeader>
            <div className="search-wrap AppIn">
                <SearchBox holder="제품 검색이 가능해요."></SearchBox>
                <div className="search-in">
                    <SearchTitle title={'최근 검색어'} del={'전체삭제'}></SearchTitle>
                    <div className="recent-wrap">
                        {recentSearch.map(data => (
                            <RecentSearch recent={data} key={data.id}></RecentSearch>
                        ))}
                    </div>

                    <SearchTitle title={'추천 검색어'} mt={'24px'}></SearchTitle>
                    <ul>
                        {suggestedSearch.map(data => (
                            <SuggestedSearch suggested={data} key={data.id}></SuggestedSearch>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HomeSearch;