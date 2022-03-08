import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TopNav from '../Components/TopNav/TopNav'
import Footer from '../Components/Footer/Footer'
import styles from './Detail.module.scss'
import Review from './Review.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


function Detail() {
    const params = useParams()
    const [ coffeeDetail, setCoffeeDetail ] = useState({})
    const [ newReview, setNewReview ] = useState([])

    useEffect(() => {
      fetch(`http://localhost:3000/data/coffeeDetail/${params.id}.json`, {
          method: 'GET'
      })
        .then(res => res.json())
        .then(data => {
            data.isLiked = false
            setCoffeeDetail(data)
        })
    }, [])

    function handleLiked() {
        !coffeeDetail.isLiked ?
        setCoffeeDetail({...coffeeDetail, isLiked:true})
        : setCoffeeDetail({...coffeeDetail, isLiked:false})
    }

    function handleAddReview(e) {
        if (e.key === 'Enter') {
            setNewReview([...newReview, {key:newReview.length, id:'newbie', text: e.target.value, isLiked:false}])
            e.target.value = ''
        }
    }
    
  return (
    <div>
        <TopNav />
        <main>
            <section className={styles.detail}>
                <div className={styles.detail__title}>{String(coffeeDetail.type).startsWith('Cold') ? `콜드 브루 커피` : `브루드 커피`}</div>
                <div className={styles.detail__path}>홈&gt;MENU&gt;음료&gt;{coffeeDetail.type}&gt;{coffeeDetail.name}</div>
            </section>
            <article className={styles.detail__article}>
                <img className={styles.detail__img} src={coffeeDetail.imgUrl} alt="coffee_detail" />
                <div className={styles.article__content}>
                    <div className={styles.coffeeDetails}>
                        <div className={styles.coffeeDetails__titleBox}>
                            <div className={styles.coffeeDetails__title}>{coffeeDetail.name}</div>
                            <div className={styles.coffeeDetails__smalltitle}>{coffeeDetail.englishName}</div>
                        </div>
                        <FontAwesomeIcon icon={faHeart} className={`${styles.fas} ${coffeeDetail.isLiked ? styles.liked : ''}`} onClick={handleLiked} />
                    </div>
                    <hr className={styles.coffeeDetails__line} />
                    <p className={styles.coffeeDetails__description}>{coffeeDetail.description}</p>
                    <hr />
                    <div className={styles.coffeeDetails__container__nutrition}>
                        <div>제품 영양 정보</div>
                        <div>{coffeeDetail.size}</div>
                    </div>
                    <hr />

                    <div className={styles.container__nutrition__info}>
                        <div className={styles.nutrition__info__left}>
                            <div className={styles.nutrition__info__col1}>
                                <div>1회 제공량 (kcal)</div>
                                <div>포화지방 (g)</div>
                                <div>단백질 (g)</div>
                                <br/>
                            </div>
                            <div className={styles.nutrition__info__col2}>
                                <div className={styles.txtRight}>{coffeeDetail.nutrition? coffeeDetail.nutrition[0].value : `No info`}</div>
                                <div className={styles.txtRight}>{coffeeDetail.nutrition? coffeeDetail.nutrition[1].value : `No info`}</div>
                                <div className={styles.txtRight}>{coffeeDetail.nutrition? coffeeDetail.nutrition[2].value : `No info`}</div>
                                <br/>
                            </div>
                        </div>
                        <div className={styles.nutrition__info__right}>
                            <div className={styles.nutrition__info__col3}>
                                <div>나트륨 (mg)</div>
                                <div>당류 (g)</div>
                                <div>카페인 (mg)</div>
                                <br/>
                            </div>
                            <div className={styles.nutrition__info__col4}>
                                <div className={styles.txtRight}>{coffeeDetail.nutrition? coffeeDetail.nutrition[3].value : `No info`}</div>
                                <div className={styles.txtRight}>{coffeeDetail.nutrition? coffeeDetail.nutrition[4].value : `No info`}</div>
                                <div className={styles.txtRight}>{coffeeDetail.nutrition? coffeeDetail.nutrition[5].value : `No info`}</div>
                                <br/>
                            </div>
                        </div>
                    </div>
                        

                    <div className={styles.coffeeDetails__allergy}>알레르기 유발 요인: {coffeeDetail.allergyInfo}</div>
                    <section>
                        <div className={styles.review__title}>리뷰</div>
                        <hr />
                        <div className={styles.review}>
                            <div className={styles.review__oneline}>
                                <span className={styles.review__id}>coffee_lover</span>
                                <span className={styles.review__text}>너무 맛있어요!</span>
                            </div>
                            <div>
                                <span className={styles.review__id}>CHOCO7</span>
                                <span className={styles.review__text}>오늘도 {coffeeDetail.name}를 마시러 갑니다.</span>
                            </div>
                            <div>
                                <span className={styles.review__id}>legend_dev</span>
                                <span className={styles.review__text}>진짜 {coffeeDetail.name}는 전설이다. 진짜 {coffeeDetail.name}는 전설이다. 진짜 {coffeeDetail.name}는 전설이다. 진짜 화이트 초코 너무 달아서 머리 아파요...</span>
                            </div>
                            <div>
                                {newReview && newReview.map(review => {
                                    return(
                                        <Review 
                                            key={review.key}
                                            num={review.key}
                                            id={review.id}
                                            text={review.text}
                                            isLiked={review.isLiked}
                                        />
                                )})}
                            </div>
                        </div>
                        <input className={styles.review__input} type="text" onKeyUp={handleAddReview} placeholder="리뷰를 입력해주세요." />
                    </section>
                </div>
            </article>
        </main>
        <Footer />
    </div>
  )
}

export default Detail