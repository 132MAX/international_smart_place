import React from "react"
import "./style.css"

const info=[{
    num:"11+",
    description: "Тем обучения"
},{
    num:"10+",
    description: "ТОП бизнес тренеров"
},{
    num:"25+",
    description: "Инструментов для успешной работы"
},{
    num:"88 ч",
    description: "Интенсивного обучения"
},{
    num:"55 ч",
    description: "Самостоятельной практики"
},{
    num:"40 ч",
    description: "Онлайн-тренингов"
}]
export default () => {
    return <div className="what">
        <div className="conteiner">
            <div className="what__tetle">
                <p> Что такое бизнес академия </p>
                <p>International Smart Place ?</p>
            </div>
            <div className="what__info">
                {info.map((elem=> <div className="info__elem">
                    <div className="info__num">{elem.num}</div>
                    <div className="info__description">{elem.description}</div>
                </div> ))}
            </div>
          
        </div>
    </div>
}