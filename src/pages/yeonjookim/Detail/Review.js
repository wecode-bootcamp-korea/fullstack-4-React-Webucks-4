import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Detail.module.scss'

function Review(props) {

  // Review 컴포넌트의 state를 상위의 Detail에서 관리합니다. props로 함수도 넘겨받아서 사용합니다.
  
  return (
    <div>
      <span className={styles.review__id}>{props.id}</span>
      <span className={styles.review__text}>{props.text}</span>
      <span>
        <FontAwesomeIcon icon={faHeart}  
        onClick={() => props.handleReviewLiked(props.num)} 
        className={`${styles.review__heart} ${props.isLiked ? styles.review__heart__liked : ''}`} />
      </span>
      <span onClick={() => props.onRemove(props.num)} className={styles.review__del}>✖</span>
    </div>
  )
}

export default Review