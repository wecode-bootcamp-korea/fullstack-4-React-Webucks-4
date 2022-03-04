import React, { useEffect, useState } from 'react'
// import TopNav from '../../components/TopNav/TopNav'
// import Footer from '../../components/Footer/Footer'
import './Detail.scss'

function Detail() {
    const [ coffeeDetail, setCoffeeDetail ] = useState({})

    useEffect(() => {
        // fetch할 파일 이름을 어디서 받아 오는지..?
      fetch('http://localhost:3000/data/coffeeDetail/BrewedCoffee.json', {
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
    
  return (
    <div>
        {/* <TopNav /> */}
        <main>
            <section className="detail">
                <div className="detail__title">콜드 브루</div>
                <div className="detail__path">홈&gt;MENU&gt;음료&gt;에스프레소&gt;화이트 초콜릿 모카</div>
            </section>
            <article className='detail__article'>
                <img className='detail__img' src="./images/yeonjookim/demi-deherrera-L-sm1B4L1Ns-unsplash.jpg" alt="big_coffee" />
                <div className="article__content">
                    <div className="coffeeDetails">
                        <div className="coffeeDetails__titleBox">
                            <div className="coffeeDetails__title">화이트 초콜릿 모카</div>
                            <div className="coffeeDetails__smalltitle">White Chocolate Mocha</div>
                        </div>
                        <i className={`fas fa-heart ${ coffeeDetail.isLiked ? 'liked': '' }`} onClick={handleLiked}></i>
                    </div>
                    <hr className="coffeeDetails__line" />
                    <p className="coffeeDetails__description">달콤하고 부드러운 화이트 초콜릿 시럽과 에스프레소를 스팀 밀크와 섞어 휘핑크림으로 마무리한 음료로 달콤함과 강렬한 에스프레소가 부드럽게 어우러진 커피</p>
                    <hr />
                    <div className="coffeeDetails__container__nutrition">
                        <div>제품 영양 정보</div>
                        <div>Tall(톨) / 355ml (12 fl oz)</div>
                    </div>
                    <hr />

                    <div className="container__nutrition__info">
                        <div className="nutrition__info__left">
                            <div className="nutrition__info__col1">
                                <div>1회 제공량 (kcal)</div>
                                <div>포화지방 (g)</div>
                                <div>단백질 (g)</div>
                                <br/>
                            </div>
                            <div className="nutrition__info__col2">
                                <div className="txtRight">345</div>
                                <div className="txtRight">11</div>
                                <div className="txtRight">11</div>
                                <br/>
                            </div>
                        </div>
                        <div className="nutrition__info__right">
                            <div className="nutrition__info__col3">
                                <div>나트륨 (mg)</div>
                                <div>당류 (g)</div>
                                <div>카페인 (mg)</div>
                                <br/>
                            </div>
                            <div className="nutrition__info__col4">
                                <div className="txtRight">150</div>
                                <div className="txtRight">35</div>
                                <div className="txtRight">75</div>
                                <br/>
                            </div>
                        </div>
                    </div>
                        

                    <div className="coffeeDetails__allergy">알레르기 유발 요인: 우유</div>
                    <review>
                        <div className="review__title">리뷰</div>
                        <hr />
                        <div className="review">
                            <div className="review__oneline">
                                <span className="review__id">coffee_lover</span>
                                <span className="review__text">너무 맛있어요!</span>
                            </div>
                            <div>
                                <span className="review__id">CHOCO7</span>
                                <span className="review__text">오늘도 화이트 초콜릿 모카를 마시러 갑니다.</span>
                            </div>
                            <div>
                                <span className="review__id">legend_dev</span>
                                <span className="review__text">진짜 화이트 초콜릿 모카는 전설이다. 진짜 화이트 초콜릿 모카는 전설이다. 진짜 화이트 초콜릿 모카는 전설이다. 진짜 화이트 초코 너무 달아서 머리 아파요...</span>
                            </div>
                        </div>
                        <input className="review__input" type="text" placeholder="리뷰를 입력해주세요." />
                    </review>
                </div>
            </article>
        </main>
        {/* <Footer /> */}
    </div>
  )
}

export default Detail