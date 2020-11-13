import React, { useState } from "react"
import HamburgerMenu from "react-hamburger-menu"
import Bounce from 'react-reveal/Bounce';
import Headhesive from "headhesive"
import "./style.css"

const homeArr = [{
    title: "Клиентам",
    name1: "Клиентам",
    name2: "Клиентам",
    name3: "Клиентам",
    name4: "Клиентам"
}, {
    title: "Бизнесу",
    name1: "Бизнесу",
    name2: "Бизнесу",
    name3: "Бизнесу",
    name4: "Бизнесу"
}, {
    title: "Дистрибьютерам",
    name1: "Дистрибьютерам",
    name2: "Дистрибьютерам",
    name3: "Дистрибьютерам",
    name4: "Дистрибьютерам"
}, {
    title: "О компании",
    name1: "О компании",
    name2: "О компании",
    name3: "О компании",
    name4: "О компании"
}]
const products = [{
    img: "f1.png",
    name: "GrandWay"
}, {
    img: "f4.png",
    name: "ProfitWay"
}, {
    img: "f3.png",
    name: "HomeWay"
}, {
    img: "f4.png",
    name: "Marketing"
}]
function ExpandedMenu() {
    return <div className="expanded">{
        homeArr.map((elem, index) => {
            return <div className="expandedElem">
                <div className="arr__title">{elem.title}</div>
                <div className="arr__name1">{elem.name1}</div>
                <div className="arr__name2">{elem.name2}</div>
                <div className="arr__name3">{elem.name3}</div>
                <div className="arr__name4">{elem.name4}</div>
            </div>
        })
    }</div>
}
function Products() {
    return <div className="products">{
        products.map((elem, index) => {
            //  const img = elem.img
            return <div className="products__elem">
                <img src={elem.img} alt="" />
                <div className="">{elem.name}</div>
            </div>
        })
    }</div>
}
function Menu(props) {

    return <menu className="home__menu  ">
        <div className="home__menu__logo ">
            International Smart Place</div>
        <nav className="home__menu__nav">
            <a href="#">Как проходит обучение</a>
            <a href="#">Преимущества</a>
            <a href="#">Инструкция</a>
            <a href="#">Преподаватели</a>
            <a className="home__menu__nav--enter" href="#" >Войти</a>
            <div className="hamburgerMenu"
                onClick={() => props.setOpen(!props.open)}>
                <HamburgerMenu
                    isOpen={props.open}
                    menuClicked={() => props.setOpen(!props.open)}
                    width={32}
                    height={15}
                    strokeWidth={2}
                    rotate={0}
                    color='white'
                    borderRadius={0}
                    animationDuration={0.5}
                /></div>
        </nav>
    </menu>
}
        function Facial(props){
            return  <Bounce left><div className="home">
            <div className="home__line">
                <div className="conteiner">
                    <Menu
                        open={props.open}
                        setOpen={props.setOpen}
                    />
                    <div className="home__info">
                        <div className="home__info__text">
                            <div >Бизнес Академия </div>
                            <p className="title">International Smart Place</p>
                            <p className="home__info__textQuestion">Как изменить свою жизнь?</p>
                            <p className="home__info__textQuestion">Как начать инвестировать деньги?</p>
                            <p className="home__info__textQuestion">Как правильно приобрести недвижимость?</p>
                            <p className="home__info__textQuestion">Как создать свою команду?</p>
                            <button className="home__info__textButton">Начать обучение</button>
                        </div>
                        <div className="home__info__img">
                        </div>
                    </div>
                </div>
            </div>
            <div className="home__wave"></div>
        </div></Bounce>
}

    function Reverse (props){
    return   <div className="home__menuDescription"><Bounce right>
    <div className="conteiner">
        <Menu
            open={props.open}
            setOpen={props.setOpen}
        />
        <div className="">
            <ExpandedMenu />
        </div>
        <div className="home__menuDescription__products">Продукты</div>
        <div className=""><Products /></div>
    </div></Bounce>
</div>
    }


export default () => {
    //var header = new Headhesive(Menu);
    const [open, setOpen] = useState(false)
    var options = {
        offset: 500
    }

    // const text=open?  reverse :facial
    return (
        <div className="div">
           { open?  <Reverse
        open={open}
        setOpen={setOpen} />: <Facial
        open={open}
        setOpen={setOpen}/>}
        </div>
    )
}