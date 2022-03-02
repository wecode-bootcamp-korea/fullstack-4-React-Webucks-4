import React from 'react'
import { useNavigate } from 'react-router-dom'
// import TopNav from '../../components/TopNav/TopNav'
// import Footer from '../../components/Footer/Footer'
import './List.scss'

function List() {
    const navigate = useNavigate()

    function goToDetail() {
        navigate("/Detail-yeonjoo")
    }

    return (
        <div>
            {/* <TopNav /> */}
            <main>
                <p className="article__title">
                    콜드 브루 커피 <img className="article__title__icon" src="https://freepikpsd.com/file/2020/08/coffee-emoji-png-1.png" alt="커피 아이콘" />
                    <span className="article__smalltitle">디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
                </p>
                <article className='article'>
                    <section className='article__frame'>
                        <div className="img__frame" onClick={goToDetail}>
                            <img className='img__content' src="./images/yeonjooKim//eiliv-sonas-aceron-_tSgUmeYMm8-unsplash.jpg" alt='나이트로 바닐라 크림' /> 
                        </div>
                        나이트로 바닐라 크림</section>
                    <section className='article__frame'>
                        <div className="img__frame" onClick={goToDetail}>
                            <img className='img__content' src="./images/yeonjooKim//demi-deherrera-L-sm1B4L1Ns-unsplash.jpg" alt='돌체 콜드 브루' /> 
                        </div>
                        돌체 콜드 브루</section>
                    <section className='article__frame'>
                        <div className="img__frame" onClick={goToDetail}>
                            <img className='img__content' src="./images/yeonjooKim//becca-tapert-vzU4qT_jhEQ-unsplash.jpg" alt="바닐라 크림 콜드 브루" /> 
                        </div>
                        바닐라 크림 콜드 브루</section>
                    <section className='article__frame'>
                        <div className="img__frame" onClick={goToDetail}>
                            <img className='img__content' src="./images/yeonjooKim//harris-vo-JpQGEArmG0I-unsplash.jpg" alt="콜드 브루" /> 
                        </div>
                        콜드 브루</section>
                    <section className='article__frame'>
                        <div className="img__frame" onClick={goToDetail}>
                            <img className='img__content' src="./images/yeonjooKim//jarek-ceborski-IhqDpFz7I8Q-unsplash.jpg" alt="콜드 브루 오트 라떼" /> 
                        </div>
                        콜드 브루 오트 라떼</section>
                    <section className='article__frame'>
                        <div className="img__frame" onClick={goToDetail}>
                            <img className='img__content' src="./images/yeonjooKim//jeremy-yap-jn-HaGWe4yw-unsplash.jpg" alt="벨벳 다크 모카 나이트로" /> 
                        </div>
                        벨벳 다크 모카 나이트로</section>
                    <section className='article__frame'>
                        <div className="img__frame" onClick={goToDetail}>
                            <img className='img__content' src="./images/yeonjooKim//mariana-ibanez-D8-sp5a_IM8-unsplash.jpg" alt="제주 비자림 콜드 브루" /> 
                        </div>
                        제주 비자림 콜드 브루</section>
                    <section className='article__frame'>
                        <div className="img__frame" onClick={goToDetail}>
                            <img className='img__content' src="./images/yeonjooKim//mariana-ibanez-NJ8Z8Y_xUKc-unsplash.jpg" alt="프렌치 애플 타르트 나이트로" /> 
                        </div>
                        프렌치 애플 타르트 나이트로</section>
                    <section className='article__frame'>
                        <div className="img__frame" onClick={goToDetail}>
                            <img className='img__content' src="./images/yeonjooKim//rizky-subagja-IBhJivtPqHQ-unsplash.jpg" alt="나이트로 콜드 브루" /> 
                        </div>
                        나이트로 콜드 브루</section>
                    <section className='article__frame'>
                        <div className="img__frame" onClick={goToDetail}>
                            <img className='img__content' src="./images/yeonjooKim//siddharth-salve-8wESIey6sYQ-unsplash.jpg" alt="초콜릿 크림 칩 프라푸치노" /> 
                        </div>
                        초콜릿 크림 칩 프라푸치노</section>
                </article>
                <p className="article__title">
                    브루드 커피 <img className="article__title__icon" src="https://freepikpsd.com/file/2020/08/coffee-emoji-png-1.png" alt="커피 아이콘" />
                    <span className="article__smalltitle">디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
                </p>
                <article className='article'>
                    <section className='article__frame'>
                        <div className="img__frame" onClick={goToDetail}>
                            <img className='img__content' src="./images/yeonjooKim//wade-austin-ellis-yN7prWLW7xg-unsplash.jpg" alt='아이스 커피' /> 
                        </div>
                        아이스 커피</section>
                    <section className='article__frame'>
                        <div className="img__frame" onClick={goToDetail}>
                            <img className='img__content' src="./images/yeonjooKim//victor-rutka-4FujjkcI40g-unsplash.jpg" alt='오늘의 커피' /> 
                        </div>
                        오늘의 커피</section>
                </article>
            </main>
            {/* <Footer /> */}
        </div>
    )
}

export default List