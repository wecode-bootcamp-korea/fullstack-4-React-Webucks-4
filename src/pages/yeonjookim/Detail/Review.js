import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react';
import styles from './Detail.module.scss'

function Review(props) {
  const [ state, setState ] = useState(props);

  useEffect(() => {
    console.log("state변함!")
    if (state.isLiked) {
      document.getElementsByTagName('FontAwesomeIcon').className =`${styles.review__heart} ${styles.liked}`

    } else {
      document.getElementsByTagName('FontAwesomeIcon').className =`{styles.review__heart}`
    }
  }, [state])
  
  function handleLiked() {
    console.log("liked button clicked!", state)
    !state.isLiked ?
    setState({...state, isLiked:true})
    : setState({...state, isLiked:false})
  }

  function handleDel() {
    console.log(props.num)
    console.log(state.num)
    console.log(state.filter(item => item.num !== state.num))
  }


  return (
    <div>
      <span className={styles.review__id}>{props.id}</span>
      <span className={styles.review__text}>{props.text}</span>
      <span onClick={handleLiked}><FontAwesomeIcon icon={faHeart} className={`${styles.review__heart} ${state.isLiked ? styles.liked : ''}`} /></span>
      <span onClick={handleDel} className={styles.review__del}>✖</span>
    </div>
  )
}

export default Review