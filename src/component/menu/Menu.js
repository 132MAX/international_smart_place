import React, { useState , useEffect} from "react"
import "./style.css"

export default()=>{
    const [sees , setSees]=useState(0)
    const  onScroll=()=>{
        const positionScroll= document.body.scrollTop|| document.documentElement.scrollTop
        console.log(positionScroll)
        setSees(positionScroll/1000)
    }
        
    
    useEffect(()=>{
    window.addEventListener("scroll",onScroll)
    },[]) 
    return  <div className="menuFixed" style={{opacity:sees}}>
        <div className="conteiner">
    <menu className="home__menu  ">
    <div className="home__menu__logo ">
        International Smart Place</div>
    <nav className="home__menu__nav">
        <a href="#">Как проходит обучение</a>
        <a href="#">Преимущества</a>
        <a href="#">Инструкция</a>
        <a href="#">Преподаватели</a>
        <a className="home__menu__nav--enter" href="#" >Войти</a>
    
    </nav>
</menu>
</div> 
</div> 
}