import React from "react"
import { createUseStyles } from 'react-jss'
const useStyle = createUseStyles({
    conteiner: {
        maxWidth: "1200px",
        margin: {
            top: 0,
            right: "auto",
            bottom: 0,
            left: "auto"
        },
        fontFamily: "Gordita"
    },
    title: {
        marginTop: "140px",
        fontSize: "40px",
        lineHeight: "43px",
        textAlign: "center"
    },
    box:{
        marginTop:"170px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
    },
    images:{
        backgroundImage:`url("./foto4.png")`,
        backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
        width:"462px",
        height:"280px"
       
    }
})
export default () => {
    const classes = useStyle()
    return <div className={classes.conteiner}>
        <div className={classes.title}>Как проходит обучение?</div>
        <div className={classes.box}>
            <div className={classes.file}>
                <div className={classes.heading}>Онлайн и оффлайн форматы</div>
                <div className={classes.text}>Занятия проходят в разное время в течение карьерного развития партнера</div>
            </div>
            <div className={classes.images}></div>
        </div>
    </div>
}