
import React from "react"
import { createUseStyles } from 'react-jss'
const line = [{
    num: "01",
    title: "Регистрация",
    text: "Пройти регистрацию в Бизнес Академии ISP"
}, {
    num: "02",
    title: "Оплата обучения",
    text: "Оплатить курс  Start-Up"
}, {
    num: "03",
    title: "Доступ в ЛК",
    text: "Получить доступ в ЛК дистанционной платформы"
}, {
    num: "04",
    title: "Теория и практика",
    text: "Изучить теорию и выполнить практические задания (тесты)"
}, {
    num: "05",
    title: "Тестирование",
    text: "Пройти итоговое тестирование"
}, {
    num: "06",
    title: "Подписание договора",
    text: "Получить сертификат"
}]
const useStyle = createUseStyles({
    partner__title: {
        fontWeight: 'normal',
        fontSize: 30,
        lineHeight: "42px",
    },
    partner__button: {
        fontWeight: 500,
        fontSize: 16,
        lineHeight: '22px',
        color: '#FFFFFF',
        padding: { top: 15, right: 23, bottom: 18, left: 23 },
        margin: { top: 39, bottom: 146 },
        backgroundColor: " #4B5DFF",
        borderRadius: 10,
        width: 180,
        height: 51,
        cursor: 'pointer',
        transition: "all 0.3s",
        "&:hover": {
    color: "#EBECFF"
        }
    },
    partner__line: {



    },
    partner__line: {
        display: "flex",
        justifyContent: 'space-between',
        position: 'relative',
        zIndex: "2",
        "&:before": {
            position: 'absolute',
            content: '""',
            width: "87%",
            height: "2px",
            background: "#CDCCCC",
            zIndex: "-2",
            top: 17,
        }
    },
    num: {
        width: 45,
        height: 44,
        left: 122,
        top: 405,
        background: '#EBECFF',
        borderRadius: 10,
        textAlign: "center",
        alignItems: "center",
        padding: { top: 13, bottom: 13 },
        transition: "all 0.3s",
        cursor: 'pointer',

        "&:hover": {
            background: "#4B5DFF",
            color: "#fff"
        }
    },
    title: {
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: '22px ',
        margin: { top: 49, bottom: 22 }
    },
    text: {
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: '20px ',
        color: '#C4C4C4',
        width: 153,
        height: 18,
    },





}
)
export default () => {
    const classes = useStyle()
    return <div className="">
        <div className="conteiner">
            <div className={classes.partner__title}>Как стать партнером холдинга GrandWay</div>
            <div className={classes.partner__button}>Начать обучение</div>
            <div className={classes.partner__line}>
                {line.map(elem => {
                    return <div className={classes.partner__line__elem}>
                        <div className={classes.num}>{elem.num}</div>
                        <div className={classes.title}>{elem.title}</div>
                        <div className={classes.text}>{elem.text}</div>
                    </div>
                })}
            </div>
        </div>
    </div>
}