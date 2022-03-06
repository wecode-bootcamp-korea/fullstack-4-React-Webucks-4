import styles from './Detail.module.scss'

function Review(props) {
  return (
    <div>
      <span className={styles.review__id}>{props.id}</span>
      <span className={styles.review__text}>{props.text}</span>
    </div>
  )
}

export default Review