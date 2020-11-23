import React from "react"
import { createUseStyles } from 'react-jss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const review = [{
    foto: "./review.png",
    text: "Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спикер Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спикер Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спикер ",
    client: "Клиент",
    nameClient: "Мария Петрова",
    stars: "./stars.png",
    city: "Город",
    nameCity: "Санкт-Петербург"

}, {
    foto: "./review.png",
    text: "Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спикер Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спикер Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спикер ",
    client: "Клиент",
    nameClient: "Мария Петрова",
    stars: "./stars.png",
    city: "Город",
    nameCity: "Санкт-Петербург"

}, {
    foto: "./review.png",
    text: "Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спикер Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спикер Пятилетний опыт работы с криптовалютой. Идейний вдохновитель и ведущий спикер ",
    client: "Клиент",
    nameClient: "Мария Петрова",
    stars: "./stars.png",
    city: "Город",
    nameCity: "Санкт-Петербург"

}]
const useStyle = createUseStyles({
    review: {
        marginTop: 200,
        marginBottom: 32,

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
    },
    review__elem__items: {
        width: 760,
        height: 61,
    },
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
        <div className="conteiner">
            <div className={styles.review__title}>Отзывы наших клиентов</div>
            <div className={styles.review__slider}>
                <Slider {...settings}>
                    {review.map(elem => {
                        return <div className={styles.review__box}>
                        <div className={styles.review__elem}>
                            <img className={styles.review__elem__foto} src={elem.foto} alt="" />
                            <div className={styles.review__elem__items}>
                                <div className={styles.text}>{elem.text}</div>
                                <div className={styles.text}>{elem.box}
                                    <div className={styles.text}>
                                        <p>{elem.client}</p>
                                        <div className={styles.nameClient}>{elem.nameClientext}</div>
                                    </div>
                                    <div className={styles.city}>
                                        <p>{elem.city}</p>
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