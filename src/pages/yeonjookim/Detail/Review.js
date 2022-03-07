import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Detail.module.scss'

function Review(props) {
  const [state, setState] = props;

  function handleLiked() {
    // state[props.num].liked = true
    // !coffeeDetail.isLiked ?
    // setCoffeeDetail({...coffeeDetail, isLiked:true})
    // : setCoffeeDetail({...coffeeDetail, isLiked:false})
  }

  function handleDel() {
    console.log(props.num)
  }

  return (
    <div>
      <span className={styles.review__id}>{props.id}</span>
      <span className={styles.review__text}>{props.text}</span>
      <span onClick={handleLiked} className={`${styles.review__liked} ${state[props.num].liked? styles.liked : null}`}><FontAwesomeIcon icon={faHeart} /></span>
      <span onClick={handleDel} className={styles.review__del}>✖</span>
    </div>
  )
}

export default Review