import React,{useEffect} from "react";
import Swiper from "swiper";
import "swiper/css/swiper.css"
import "./swiper.less"
function Banner(props){
    let data = props.data||[];
    useEffect(()=>{
        if(data.length===0)return;
        new Swiper ('.swiper-container', {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay :true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
            
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            
            // 如果需要滚动条
            scrollbar: {
              el: '.swiper-scrollbar',
            },
          })        
    })
    return <div className="swiper-container">
        <div className="swiper-wrapper">
            {data.map((item,index)=>{
                return <div className="swiper-slide" key={index}>
                    <img src={item.url}></img>
                </div>
            })}
        </div>
        <div className="swiper-pagination"></div>
    </div>
}
export default Banner;