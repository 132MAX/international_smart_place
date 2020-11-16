import React, { useState } from "react"
import "./style.css"
export default()=>{
    return <div className="conteiner">
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
}