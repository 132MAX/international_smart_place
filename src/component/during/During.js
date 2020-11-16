import React from "react"
import "./style.css"

const info = [{
    name: "Инвестирование",
    text: "Как увеличить доход за счет инвестирования?"
}, {
    name: "Инвестирование",
    text: "Как в течение года выйти на ежемесячный доход в 1 млн рублей?"
}, {
    name: "Менеджмент",
    text: "Как создать команду и эффективно управлять ей?"
}, {
    name: "МЛМ",
    text: "Как привлечь людей в свою команду?"
}, {
    name: "Управление бизнес процессами",
    text: "Как правильно организовать управление бизнес-процессами?"
}, {
    name: "Работа с возвражениями",
    text: "Как бороться с вырожениями и убеждать?"
}, {
    name: "Усиление продаж",
    text: "Как научиться продавать, не продавая?"
}]
export default () => {
    return <div className="conteiner during">

        <div className="during__info">
            В ходе обучения вы узнаете
        </div>
        <div className="during__box">
            {info.map((elem => <div className="during__box__elem">
                <div className="during__name">{elem.name}</div>
                <div className="during__text">{elem.text}</div>
            </div>))}
        </div>
        <div className="during__answer">
            Ответы на все эти вопросы даст
           <p>Бизнес Академия ISP</p>
            <button className="during__button">
                Инструкция
            </button>
        </div>
    </div>

}