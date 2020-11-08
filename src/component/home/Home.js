import React, { useState } from "react"
import HamburgerMenu from "react-hamburger-menu"
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
    img: "",
    name: "GrandWay"
}, {
    img: "",
    name: "ProfitWay"
}, {
    img: "",
    name: "HomeWay"
}, {
    img: "",
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
            return <div className="">
                <div className="">{elem.img}</div>
                <div className="">{elem.name}</div>
            </div>
        })
    }</div>
}
export default () => {
    const [open, setOpen] = useState(false)
    console.log(open)

    return (
        <div className="div">
            <div className="home">
                <div className="home__line">
                    <div className="conteiner">
                        <menu className="home__menu">
                            <div className="home__menu__logo">
                                International Smart Place</div>
                            <nav className="home__menu__nav">
                                <a href="#">Как проходит обучение</a>
                                <a href="#">Преимущества</a>
                                <a href="#">Инструкция</a>
                                <a href="#">Преподаватели</a>
                                <a className="home__menu__nav--enter" href="#" >Войти</a>
                                <div className="hamburgerMenu"
                                    onClick={() => setOpen(!open)}>
                                    <HamburgerMenu
                                        isOpen={open}
                                        menuClicked={() => setOpen(!open)}
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
            </div>
            <div className="home__menuDescription">
                <div className="conteiner">
                    <menu className="home__menu">
                        <div className="home__menu__logo">
                            International Smart Place</div>
                        <nav className="home__menu__nav">

                            <div className=" home__menu__nav--enterBlack" href="#" >Войти</div>
                            <div className="hamburgerMenu"
                                onClick={() => setOpen(!open)}>
                                <HamburgerMenu
                                    isOpen={open}
                                    menuClicked={() => setOpen(!open)}
                                    width={32}
                                    height={15}
                                    strokeWidth={2}
                                    rotate={0}
                                    color='black'
                                    borderRadius={0}
                                    animationDuration={0.5}
                                /></div>
                        </nav>
                    </menu>
                    <div className="">
                        <ExpandedMenu />
                    </div>
                    <div className="home__menuDescription__products">Продукты</div>
               <div className=""><Products/></div>
                
                </div>
            </div>
        </div>
    )
}