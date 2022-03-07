import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './List.module.scss'


function Card(props) {
    const navigate = useNavigate()
    const [state, setState] =useState({...props, isLiked:false})

    function goToDetail() {
        navigate(`/Detail-yeonjoo/${props.id}`)
    }

    function likeit() {
        if (!state.isLiked) {
            setState({...state, isLiked:true})
        } else {
            setState({...state, isLiked:false})
        }
    }

    return (
        <div>
            <section className={styles.article__frame}> 
                <div className={styles.img__frame} >
                    <img onClick={goToDetail} className={styles.img__content} src={props.imgUrl} alt={props.name} />
                </div>
            {props.name}<span><FontAwesomeIcon onClick={likeit} icon={faHeart} className={`${styles.img__heart} ${state.isLiked? styles.liked : null}`} /></span></section>
        </div>
    )
}

export default Card