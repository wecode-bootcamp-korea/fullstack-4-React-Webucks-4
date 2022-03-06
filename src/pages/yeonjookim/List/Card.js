import { useNavigate } from 'react-router-dom'
import styles from './List.module.scss'


function Card(props) {
    const navigate = useNavigate()

    function goToDetail() {
        navigate(`/Detail-yeonjoo/${props.id}`)
    }

    return (
        <div>
            <section className={styles.article__frame}> 
                <div className={styles.img__frame} onClick={goToDetail}>
                    <img className={styles.img__content} src={props.imgUrl} alt={props.name} /> 
                </div>
            {props.name}</section>
        </div>
    )
}

export default Card