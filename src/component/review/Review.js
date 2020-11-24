import React from "react"
import { createUseStyles } from 'react-jss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
import "./media.css"
const review = [{
    foto: "./review.png",
    text: "Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спикер Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спикер Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спикер ",
    client: "Клиент",
    nameClient: "Мария Петрова",
    stars: "./stars.png",
    city: "Город",
    nameCity: "Санкт-Петербург",
    stars: "./stars.png"
}, {
    foto: "./review.png",
    text: "Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спикер Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спикер Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спикер ",
    client: "Клиент",
    nameClient: "Мария Петрова",
    stars: "./stars.png",
    city: "Город",
    nameCity: "Санкт-Петербург",
    stars: "./stars.png"
}, {
    foto: "./review.png",
    text: "Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спикер Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спикер Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спикер ",
    client: "Клиент",
    nameClient: "Мария Петрова",
    stars: "./stars.png",
    city: "Город",
    nameCity: "Санкт-Петербург",
    stars: "./stars.png"
}]
const useStyle = createUseStyles({
    review: {
        marginTop: 200,
        marginBottom: 62,

    },
    review__title: {
        fontWeight: 'normal',
        fontSize: 30,
        lineHeight: "32px",
        textAlign: 'center',
    },
    review__elem: {

        justifyContent: 'space-between',
        display: 'flex',
        marginTop: 64,
marginBottom: 40,

    },
    review__elem__items: {
        width: 760,
        height: 61,
    },
    text: {
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: "22px",
        marginBottom: 18,
        
    },
    text__box: {
        display: 'flex',
        justifyContent: 'flex-start',
        
        marginBottom: 60,
    },
    text__client: {
        marginRight: 100,
    },
    text__client_p: {
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: "22px",
        color: '#ADADAD',
       
    },
    nameClient:{
        margin:{top:11,bottom:15}
    },
    nameCity:{
        margin:{top:11,bottom:15}
    },
    stars:{
        width: 92,
        height: 16,
    }
})

export default () => {
    const styles = useStyle()
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return <div className={styles.review}>
        <div className="conteiner review">
            <div className={styles.review__title}>Отзывы наших клиентов</div>
            <div className={styles.review__slider}>
                <Slider {...settings}>
                    {review.map(elem => {
                        return <div className={styles.review__box}>
                            <div className={styles.review__elem}>
                                <img className={styles.review__elem__foto} src={elem.foto} alt="" />
                                <div className={styles.review__elem__items}>
                                    <div className={styles.text}>{elem.text}</div>
                                    <div className={styles.text__box}>{elem.box}
                                        <div className={styles.text__client}>
                                            <p className={styles.text__client_p}>{elem.client}</p>
                                            <div className={styles.nameClient}>{elem.nameClient}</div>
                                            <img className={styles.stars} src={elem.stars} alt="stars" />
                                        </div>
                                        <div className={styles.city}>
                                            <p className={styles.text__client_p}>{elem.city}</p>
                                            <div className={styles.nameCity}>{elem.nameCity}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </Slider>
            </div>
        </div>
    </div>
}