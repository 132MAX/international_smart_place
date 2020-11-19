import React from "react"
import { createUseStyles } from 'react-jss'
const stages = [{
    heading: "с I ступени",
    num: 1,
    description: "Start Up",
    name: "Вводный курс"
}, {
    heading: "с II ступени",
    num: 2,
    description: "Бизнес-семинар для Консультантов ISP I",
    name: "Риторика 1"
}, {
    heading: "с III ступени",
    num: 3,
    description: "Бизнес-семинар для Ст. Консультантов ISP II",
    name: "МЛМ обучение"
}, {
    heading: "с IV ступени",
    num: 4,
    description: "Бизнес-семинар для Менеджеров ISP III",
    name: "Продажи"
}, {
    heading: "с V ступени",
    num: 5,
    description: "Бизнес-семинар для Руководителей ОП ISP IV",
    name: "Риторика 2"
}, {
    heading: "с VI ступени",
    num: 6,
    description: "",
    name: "Финансовая грамотность"
}, {
    heading: "с VII ступени",
    num: 7,
    description: "Бизнес-семинар для Директоров ISP V",
    name: "Менеджмент"
}, {
    heading: "с VIII ступени",
    num: 8,
    description: "Бизнес-семинар для Директоров ISP VII",
    name: "Управление бизнесом"
}]
const useStyle = createUseStyles({
    conteiner: {
        maxWidth: "1200px",
        margin: {
            top: 0, right: "auto", bottom: 0, left: "auto"
        }
    },
    stages__title: {
        fontSize: "40px",
        lineHeight: "43px",
        textAlign: "center"
    },
    stages__table: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        margin: {
            top: "127px", bottom: "160px"
        }
    },
    stages__elem: {
        width: "270px",
        margin:{ top: "71px", left :"30px"},
        position: "relative"
    },
    stages__num:{
        position: "absolute",
        left: "-40px",
        top:"25px",
        fontWeight: "500",
        fontSize: "40px",
        lineHeight: "43px"
    },
    stages__heading: {
        fontWeight: "500",
        fontSize: "20px",
        lineHeight: "22px"
    },
    stages__description: {
        width: "222px",
        fontWeight: "500",
        fontSize: "20px",
        lineHeight: "22px",
        padding:{ top:"40px", bottom:"27px"},
        position: "relative",
        '&:before': {
            content: '""',
            position: "absolute",
            display: "block",
            width: "169px",
            height: "7px",
            backgroundColor:"#4B5DFF",
            top:"10px",
            left:"-12px"
        },
        "&:after":{
            content: '""',
            position: "absolute",
            display: "block",
            width: "7px",
            height: "116px",
            backgroundColor:"#4B5DFF",
            top:"10px",
            left:"-12px"
        }

    }
})
export default () => {
    const classes = useStyle()
    return <div className={classes.conteiner}>
        <div className={classes.stages__title}>Этапы обучения</div>
        <div className={classes.stages__table}>
            {stages.map(elem => {
                return <div className={classes.stages__elem}>
                    <div className={classes.stages__heading}>{elem.heading} </div>
                    <div className={classes.stages__num}>{elem.num} </div>
                    <div className={classes.stages__description}>{elem.description} </div>
                    <div className={classes.stages__name}>{elem.name} </div>
                </div>
            })}
        </div>
    </div>
}