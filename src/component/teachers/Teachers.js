import React from "react"
import { createUseStyles } from 'react-jss'
const useStyle = createUseStyles({
    teachers__title: {
        fontWeight: 'normal',
        fontSize: 40,
        lineHeight: "43px",
    },
    teachers__text: {
        width: 922,
        height: 79,
        fontFamily: 'Gordita',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 20,
        lineHeight: "28px",
        marginTop: 20,

    },
    teachers__table: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',


    },
    teachers__elem: {
        width: 365,
        height: 671,
        boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.25)',
        marginBottom: 137,
        position: 'relative', 
    },
    teachers__elem__home:{
        width: "100%",
        height: "100%",
       "&:hover":{
        display: 'none',
    } 
    },
    info: {
        width: "100%",
        display: 'none',
        left: 0,
        bottom: 0,
        right: 0,
        top: 0,
        "&:hover":{
            display: 'block',
        } 
    },
    description: {
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: "17px",
        margin: { top: "38px", bottom: "24px", left: "38px" },
    },
    name: {
        fontWeight: 500,
        fontSize: 30,
        lineHeight: "32px",
        margin: { bottom: "29px", left: "38px" },
    },
    property: {
        margin: { left: "38px" },
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: "22px",
        width: "276px",
    }
})
const teachers = [{
    img: "./face1.jpg",
    description: "Эксперт по бизнесу",
    name: "Брюнеткин Максим",
    property: "Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спик",
    info: "Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спикер компании Spacebot Bitteam"
}, {
    img: "./face2.jpg",
    description: "Эксперт по бизнесу",
    name: "Сергей Фрост",
    property: "Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спик",
    info: "Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спикер компании Spacebot Bitteam"
}, {
    img: "./face3.jpg",
    description: "Эксперт по бизнесу",
    name: "Дарья Мороз",
    property: "Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спик",
    info: "Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спикер компании Spacebot Bitteam"
}, {
    img: "./face1.jpg",
    description: "Эксперт по бизнесу",
    name: "Брюнеткин Максим",
    property: "Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спик",
    info: "Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спикер компании Spacebot Bitteam"
}, {
    img: "./face2.jpg",
    description: "Эксперт по бизнесу",
    name: "Сергей Фрост",
    property: "Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спик",
    info: "Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спикер компании Spacebot Bitteam"
}, {
    img: "./face3.jpg",
    description: "Эксперт по бизнесу",
    name: "Дарья Мороз",
    property: "Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спик",
    info: "Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спикер компании Spacebot Bitteam"
}]
export default () => {
    const classes = useStyle()
    return <div className="teachers">
        <div className="conteiner">
            <div className={classes.teachers__title}>Преподаватели INTERNATIONAL SMART PLACE </div>
            <div className={classes.teachers__text}>Это высококвалифицированная команда управленцев, менеджеров, бизнес-тренеров и экспертов. Общение с ними даст вам не только новые знания и идеи, но и импульс к их реализации</div>
            <div className={classes.teachers__table}>
                {teachers.map(elem => {
                    return <div className={classes.teachers__elem}>
                        <div className={classes.info}>{elem.info}</div>
                        <div className={classes.teachers__elem__home}>
                        <img src={elem.img} alt="" />
                        <div className={classes.description}>{elem.description}</div>
                        <div className={classes.name}>{elem.name}</div>
                        <div className={classes.property}>{elem.property}</div>
                    </div>
                    </div>
                })}
            </div>
        </div>
    </div>
}