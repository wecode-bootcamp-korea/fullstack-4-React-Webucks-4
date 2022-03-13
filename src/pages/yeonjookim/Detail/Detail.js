import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TopNav from '../Components/TopNav/TopNav'
import Footer from '../Components/Footer/Footer'
import styles from './Detail.module.scss'
import Review from './Review.js'
import uuid from 'react-uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


function Detail() {
    const params = useParams()
    const [ coffeeDetail, setCoffeeDetail ] = useState({})
    // Review 컴포넌트의 내용(State)을 Detail 컴포넌트에서 관리합니다.
    const [ newReview, setNewReview ] = useState([])

    // Review Component Functions
    const onRemove = num => {
        // review.num이 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
        // = review.num === num 인 것을 제거함
        setNewReview(newReview.filter(review => review.num !== num));
    };

    const handleReviewLiked = num => {
        // review의 속성 하나만 바꾸기 위해서 map함수로 새로운 객체를 생성
        // review.num === num 일 경우에만 현재 review.isLiked의 속성을 반전시킴
        setNewReview(
            newReview.map(review => 
                review.num === num? 
                {...review, isLiked: !review.isLiked} 
                : review)
        )
    }

    // Detail Component Functions
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

    // uuid로 생성한 값을 key로 사용하면서 리뷰 좋아요, 삭제 기능을 구현하기 위한 식별자로 사용합니다.
    function handleAddReview(e) {
        if (e.key === 'Enter') {
            setNewReview([...newReview, {num:uuid(), id:'newbie', text: e.target.value, isLiked:false}])
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
                        {/* module.scss를 사용할 경우 여기서 사용하는 styles.liked를 다른 코드에서 작성해도 작동하지 않습니다. 새로운 클래스를 만들어야 합니다. */}
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
                                {/* newReview가 빈배열이 아닐 경우에만 Review 컴포넌트를 mount합니다. */}
                                {newReview && newReview.map(review => {
                                    return(
                                        <Review 
                                            key={review.num}
                                            num={review.num}
                                            id={review.id}
                                            text={review.text}
                                            isLiked={review.isLiked}
                                            onRemove={onRemove}
                                            handleReviewLiked={handleReviewLiked}
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