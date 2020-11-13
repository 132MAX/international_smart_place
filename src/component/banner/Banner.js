import React from "react"
import Banner from "./banner.png"
import "./style.css"

export default () => {
    return <div className="bannerimg">
        <div className="conteiner">
            <div className="banner__elem">
                <img className="banner__img" src={Banner} alt="" />
                <div className="banner__text">
                <p>Раньше я говорил:</p> 
                «Я надеюсь, что все изменится».
                Затем я понял, что существует единственный
                способ, чтобы все изменилось — измениться
                мне самому.
                <br/>
                <br/>
                <span> Джим Рон</span>
                </div>
            </div>
        </div>
    </div>
}