import React from "react"
import { createUseStyles } from 'react-jss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const useStyle = createUseStyles({
    conteiner: {
        maxWidth: "1200px",
        margin: {
            top: 0, right: "auto", bottom: 0, left: "auto"
        }
        , fontFamily: "Gordita"
    }
    , trainingLine: {
        backgroundImage: `url("./line.png")`,
        width: "100%",
        height: "246px",
        backgroundPosition: 'center',
        backgroundSize: ' 100% 100%',
        bottom: "-250px",
        left: "0",
        backgroundRepeat: 'no-repeat'

    }
    , trainingLine2: {
        backgroundImage: `url("./line2.png")`,
        width: "100%",
        height: "246px",
        backgroundPosition: 'center',
        backgroundSize: ' 100% 100%',
        bottom: "-250px",
        left: "0",
        backgroundRepeat: 'no-repeat'

    }
    , title: {
        marginTop: "140px",
        fontSize: "40px",
        lineHeight: "43px",
        textAlign: "center"
    }
    , box: {
        marginTop: "170px",
        marginBottom: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "@media(max-width:1400px)":{
            justifyContent: 'space-around',
            
            
        }
        
    }
    , heading: {
        lineHeight: "43px",
        fontSize: "40px",
        width: "388px",
        marginBottom: "26px"
    }
    , text: {
        lineHeight: "22px",
        fontSize: "20px",
        width: "372px"
    }
    , images6: {
        backgroundImage: `url("./foto6.png")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: "462px",
        height: "280px",
        position: "relative",
        marginBottom: "80px",
    }
    , images: {
        backgroundImage: `url("./foto7.png")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: 272,
        height: 280,
        borderRadius: 30,
        position: "relative",
        marginBottom: "80px",
        "&:before": {
            content: `""`,
            position: "absolute",
            top: "144px", left: "-231px",
            width: 272,
            height: 280,
            borderRadius: 30,
            width: "272px",
            height: "280px",
            backgroundImage: `url("./foto8.png")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            "@media(max-width:1300px)":{
                display: 'none',
                
                
            }
        },
      
    }
    , elem: {
        display: "flex",
        width: "333px",
        height: "388px",
        flexWrap: "wrap"
    }
    , file__img: {
        width: "148px",
        height: "148px",
    }
    , file__name: {
        fontWeight: "bold",
        fontSize: "16px",
        textAlign: "center"
    }
}
)
const products = [{
    img: "f1.png",
    name: "GrandWay"
}, {
    img: "f2.png",
    name: "ProfitWay"
}, {
    img: "f3.png",
    name: "HomeWay"
}, {
    img: "f4.png",
    name: "Marketing"
}]
export default () => {

    const classes = useStyle()
    function Training1() {
        return <div className={classes.training}>
            <div className="conteiner">
                <div className={classes.title}>Преимущества</div>
                <div className={classes.box}>
                    <div className={classes.file}>
                        <div className={classes.heading}>Карьерный рост</div>
                        <div className={classes.text}>Корпоративная система тренингов в Бизнес Академии поможет больше
                        узнать о продуктах нашей компании
                        и научиться, как правильно предлагать
                        клиентам продукцию, чтобы заработать
                        свои первые деньги.
</div>
                    </div>
                    <div className={classes.images6}>
                    </div>
                </div>
            </div>
            <div className={classes.trainingLine}></div>
        </div>
    }
    function Training2() {
        return <div className={classes.training}>
            <div className="conteiner">
                <div className={classes.title}>Преимущества</div>
                <div className={classes.box}>
                    <div className={classes.file}>
                        <div className={classes.heading}>Карьерный рост</div>
                        <div className={classes.text}>Корпоративная система тренингов в Бизнес Академии поможет больше
                        узнать о продуктах нашей компании
                        и научиться, как правильно предлагать
                        клиентам продукцию, чтобы заработать
                        свои первые деньги.
    </div>
                    </div>
                    <div className={classes.images}>
                    </div>
                </div>
            </div>
            <div className={classes.trainingLine}></div>
        </div>
    }
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 2000,
        cssEase: "linear"
    };
    return <div className="">

        <Slider {...settings}>

            <Training1 />
            <Training2 />


        </Slider>
    </div>
}