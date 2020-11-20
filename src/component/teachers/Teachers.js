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
    },
    description: {
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: "17px",
        margin: {top:"38px", bottom:"24px", left:"38px"},
    }
})
const teachers = [{
    img: "./face1.jpg",
    description: "Эксперт по бизнесу",
    name: "Брюнеткин Максим",
    property: "Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спик"
}, {
    img: "./face2.jpg",
    description: "Эксперт по бизнесу",
    name: "Сергей Фрост",
    property: "Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спик"
}, {
    img: "./face3.jpg",
    description: "Эксперт по бизнесу",
    name: "Дарья Мороз",
    property: "Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спик"
}, {
    img: "./face1.jpg",
    description: "Эксперт по бизнесу",
    name: "Брюнеткин Максим",
    property: "Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спик"
}, {
    img: "./face2.jpg",
    description: "Эксперт по бизнесу",
    name: "Сергей Фрост",
    property: "Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спик"
}, {
    img: "./face3.jpg",
    description: "Эксперт по бизнесу",
    name: "Дарья Мороз",
    property: "Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спик"
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
                        <img src={elem.img} alt="" />
                        <div className={classes.description}>{elem.description}</div>
                        <div className={classes.name}>{elem.name}</div>
                        <div className={classes.property}>{elem.property}</div>
                    </div>
                })}
            </div>
        </div>
    </div>
}